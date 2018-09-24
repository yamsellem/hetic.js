import BaseEditor from './base-editor.jsx';
import mirror from './codemirror'

class Editor extends BaseEditor {
    emitCode(lang, value, diff) {
        this.socket.emit(lang, {room: this.props.room, value: value, diff: diff});
    }
    componentDidMount() {
        const mirrors = {
            html: mirror(this.html, 'htmlmixed', this.props.code && this.props.code.html),
            css: mirror(this.css, 'css', this.props.code && this.props.code.css),
            js: mirror(this.js, 'javascript', this.props.code && this.props.code.js)
        };

        this.socket = io();
        this.socket.emit('create', {room: this.props.room});

        if (this.props.code) {
            this.emitCode('resources', this.props.code.resources, this.props.code.resources);
            ['html', 'css', 'js'].forEach(lang => {
                this.emitCode(lang, this.props.code[lang]);
            });
        }

        ['html', 'css', 'js'].forEach(lang => {
            mirrors[lang].on('change', (editor, diff) => {
                this.updateCodeDebounced(lang, editor.getValue());
                this.emitCode(lang, editor.getValue(), diff);
                this.props.onCode(lang, editor.getValue());
            });
        });
    }
    componentWillUnmount() {
        this.socket.emit('destroy', {room: this.props.room});
        this.socket.disconnect();
    }
    componentDidUpdate(prevProps) {
        if (JSON.stringify(this.props.code && this.props.code.resources) === JSON.stringify(prevProps.code && prevProps.code.resources))
            return;
        
        const props = this.props;
        this.setState({resources: props.code.resources});
        this.emitCode('resources', props.code.resources, props.code.resources);
    }
}

export default Editor;

import BaseEditor from './base-editor.jsx';
import mirror from './codemirror'

class Editor extends BaseEditor {
    emitCode(lang, value, diff) {
        this.socket.emit(lang, {room: this.props.room, value: value, diff: diff});
    }
    componentDidMount() {
        const mirrors = {
            html: mirror(this.html, 'htmlmixed'),
            css: mirror(this.css, 'css'),
            js: mirror(this.js, 'javascript')
        };

        this.socket = io();
        this.socket.emit('create', {room: this.props.room});

        ['html', 'css', 'js'].forEach(lang => {
            mirrors[lang].on('change', (editor, diff) => {
                this.updateCodeDebounced(lang, editor.getValue());
                this.emitCode(lang, editor.getValue(), diff);
            });
        });
    }
    componentWillUnmount() {
        this.socket.emit('destroy', {room: this.props.room});
        this.socket.disconnect();
    }
}

export default Editor;

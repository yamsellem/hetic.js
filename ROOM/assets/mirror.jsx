import BaseEditor from './base-editor.jsx';
import mirror from './codemirror'

class Mirror extends BaseEditor {
    componentDidMount() {
        const room = this.props.room;

        const mirrors = {
            html: mirror(this.html, 'htmlmixed', '', true),
            css: mirror(this.css, 'css', '', true),
            js: mirror(this.js, 'javascript', '', true)
        };

        this.socket = io();
        this.socket.on(`${room}://mirror`, mirror => {
            const lang = Object.keys(mirror)[0];
            const diff = mirror[lang];
            if (!diff)
                return;

            if (lang === 'resources') {
                this.setState({resources: diff});
                return;
            }
            
            mirrors[lang].replaceRange(diff.text, diff.from, diff.to, diff.origin);
            this.updateCodeDebounced(lang, mirrors[lang].getValue());
        });

        fetch(`/rooms/${room}`)
        .then(res => res.json())
        .then(data => {
            this.setState({resources: data.resources.value || {}});

            ['html', 'css', 'js'].forEach(lang => {
                if (!data[lang])
                    return;

                mirrors[lang].setValue(data[lang].value);
                this.updateCode(lang, mirrors[lang].getValue());
            });
        });
    }
    componentWillUnmount() {
        this.socket.off(`${this.props.room}://mirror`);
    }
}

export default Mirror;

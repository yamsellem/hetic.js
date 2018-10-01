import React from 'react';

import BaseEditor from './base-editor.jsx';
import CodeMirror from './code-mirror.jsx';

class Mirror extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            js: props.code.js || '',
            css: props.code.css || '',
            html: props.code.html || '',
            resources: (props.code && props.code.resources) || {}
        };
    }
    onCodeUpdate(editor, diff, value, lang) {
        this.updateCode(lang, value);
    }
    updateCode(lang, value) {
        const state = {};
        state[lang] = value;
        this.setState(state);
    }
    componentDidMount() {
        const room = this.props.room;

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
            
            this[lang].replaceRange(diff.text, diff.from, diff.to, diff.origin);
        });

        fetch(`/rooms/${room}`)
        .then(res => res.json())
        .then(data => {
            this.setState({resources: data.resources.value || {}});

            ['html', 'css', 'js'].forEach(lang => {
                if (!data[lang])
                    return;
                
                this.updateCode(lang, data[lang].value);
            });
        });
    }
    componentWillUnmount() {
        this.socket.off(`${this.props.room}://mirror`);
    }
    render() {
        return (
            <BaseEditor 
                htmlEditor={<CodeMirror lang="htmlmixed" value={this.state.html} onMount={e => {this.html = e;}} onChange={this.onCodeUpdate.bind(this)} readonly={true} />}
                cssEditor={<CodeMirror lang="css" value={this.state.css} onMount={e => {this.css = e;}} onChange={this.onCodeUpdate.bind(this)} readonly={true} />}
                jsEditor={<CodeMirror lang="javascript" value={this.state.js} onMount={e => {this.js = e;}} onChange={this.onCodeUpdate.bind(this)} readonly={true} />}
                resources={this.state.resources}
                html={this.state.html}
                css={this.state.css}
                js={this.state.js}
            />
        );
    }
}

export default Mirror;

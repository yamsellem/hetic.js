import React from 'react';

import BaseEditor from './base-editor.jsx';
import CodeMirror from './code-mirror.jsx';

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            js: props.code.js || '',
            css: props.code.css || '',
            html: props.code.html || ''
        };
    }
    emitCode(lang, value, diff) {
        this.socket.emit(lang, {room: this.props.room, value: value, diff: diff});
    }
    onCodeUpdate(editor, diff, value, lang) {
        this.updateCode(lang, value);
        this.emitCode(lang, value, diff);
        this.props.onCode(lang, value);
    }
    updateCode(lang, value) {
        const state = {};
        state[lang] = value;
        this.setState(state);
    }
    componentDidMount() {
        this.socket = io();
        this.socket.emit('create', {room: this.props.room});

        if (this.props.code) {
            this.emitCode('resources', this.props.code.resources, this.props.code.resources);
            ['html', 'css', 'js'].forEach(lang => {
                this.emitCode(lang, this.props.code[lang]);
            });
        }
    }
    componentDidUpdate(prevProps) {
        if (JSON.stringify(this.props.code && this.props.code.resources) === JSON.stringify(prevProps.code && prevProps.code.resources))
            return;
        
        const props = this.props;
        this.emitCode('resources', props.code.resources, props.code.resources);
    }
    componentWillUnmount() {
        this.socket.emit('destroy', {room: this.props.room});
        this.socket.disconnect();
    }
    render() {
        return (
            <BaseEditor 
                htmlEditor={<CodeMirror lang="htmlmixed" value={this.state.html} onChange={this.onCodeUpdate.bind(this)} />}
                cssEditor={<CodeMirror lang="css" value={this.state.css} onChange={this.onCodeUpdate.bind(this)} />}
                jsEditor={<CodeMirror lang="javascript" value={this.state.js} onChange={this.onCodeUpdate.bind(this)} />}
                resources={(this.props.code && this.props.code.resources) || {}}
                html={this.state.html}
                css={this.state.css}
                js={this.state.js}
            />
        );
    }
}

export default Editor;

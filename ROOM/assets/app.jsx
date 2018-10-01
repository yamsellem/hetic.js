import React from 'react';
import ReactDOM from 'react-dom';

import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/htmlmixed/htmlmixed';

import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/matchtags';
import 'codemirror/addon/edit/closetag';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';

import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror-one-dark-theme/one-dark.css';
import 'bulma/css/bulma.css'
import './app.css';

import Hub from './hub.jsx';
import Editor from './editor.jsx';
import Mirror from './mirror.jsx';
import Nav from './nav.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        const room = localStorage.getItem('room') || '';
        const code = JSON.parse(localStorage.getItem('code') || '{"html": "", "css": "", "js": "", "resources": {"js": [], "css": []}}');
        this.state = {
            tab: !room ? 'hub' : 'editor', 
            room: room, 
            code: code, 
            invalid: false
        };
    }
    createRoom(room) {
        fetch(`/rooms/${room}`)
        .then(res => res.json())
        .then(data => {
            if (!data || Object.keys(data).length)
                return this.setState({invalid: true});

            this.setState({room: room, tab: 'editor', invalid: false});
            localStorage.setItem('room', room);
        });
    }
    enterRoom(room) {
        this.setState({room: room, tab: 'mirror', invalid: false});
    }
    leaveRoom() {
        this.setState({tab: 'hub', code: {html: '', css: '', js: '', resources: {js: [], css: []}}}); 
        localStorage.removeItem('room');
        localStorage.removeItem('code');
    }
    updateCode(lang, value) {
        const code = JSON.parse(JSON.stringify(this.state.code));
        code[lang] = value;
        this.setState({code: code});
        localStorage.setItem('code', JSON.stringify(code));
    }
    updateResource(action, lang, name) {
        const code = JSON.parse(JSON.stringify(this.state.code));
        const values = code['resources'][lang].slice(0);

        if (action === 'add')
            values.push(name);
        else
            values.splice(values.indexOf(name), 1);

        code['resources'][lang] = values;
        this.setState({code: code});
        localStorage.setItem('code', JSON.stringify(code));
    }
    render() {
        let content;
        switch(this.state.tab) {
           case 'hub': content = <Hub invalid={this.state.invalid} onCreate={this.createRoom.bind(this)} onEnter={this.enterRoom.bind(this)} />; break;
           case 'editor': content = <Editor room={this.state.room} code={this.state.code} onCode={this.updateCode.bind(this)} />; break;
           case 'mirror': content = <Mirror room={this.state.room} code={this.state.code} />; break;
        }

        return (
            <div>
                <Nav tab={this.state.tab} room={this.state.room} onLeave={this.leaveRoom.bind(this)} code={this.state.code} onResources={this.updateResource.bind(this)} />
                {content}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);

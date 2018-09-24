import React from 'react';
import ReactDOM from 'react-dom';

import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/htmlmixed/htmlmixed';

import 'codemirror/lib/codemirror.css';
import 'codemirror-one-dark-theme/one-dark.css';
import 'bulma/css/bulma.css'
import './app.css';

import classnames from './classnames';
import Hub from './hub.jsx';
import Editor from './editor.jsx';
import Mirror from './mirror.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'hub',
            invalid: false,    
            room: ''
        };
    }
    createRoom(room) {
        fetch(`/rooms/${room}`)
        .then(res => res.json())
        .then(data => {
            if (!data || Object.keys(data).length)
                return this.setState({invalid: true});

            this.setState({room: room, tab: 'editor', invalid: false});
        });
    }
    enterRoom(room) {
        this.setState({room: room, tab: 'mirror', invalid: false});
    }
    leaveRoom() {
        this.setState({tab: 'hub'}); 
    }
    render() {
        let content;
        switch(this.state.tab) {
           case 'hub': content = <Hub invalid={this.state.invalid} onCreate={this.createRoom.bind(this)} onEnter={this.enterRoom.bind(this)} />; break;
           case 'editor': content = <Editor room={this.state.room} />; break;
           case 'mirror': content = <Mirror room={this.state.room}/>; break;
        }

        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        ROOM
                    </div>
                    <div className="navbar-button">
                        <div className={classnames('control', {'is-hidden': this.state.tab === 'hub'})}>
                            <div className="tags has-addons">
                                <span className={classnames('tag is-primary', {'is-recording': this.state.tab === 'editor'})}>{this.state.room}</span>
                                <a className="tag is-delete is-primary" onClick={this.leaveRoom.bind(this)}></a>
                            </div>
                        </div>
                    </div>
                </nav>

                {content}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);

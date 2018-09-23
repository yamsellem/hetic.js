const classnames = (...args) => {
    return args.reduce((memo, arg) => {
        switch (typeof arg) {
            case 'string': memo.push(arg); break;
            case 'object':
                Object.keys(arg).forEach(key => {
                    if (arg[key])
                        memo.push(key);
                });
                break;
        }
        return memo;
    }, []).join(' ');
};

const debounce = (fn, wait = 100) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), wait);
    };
};

const mirror = (el, lang, readonly) => {
    return CodeMirror(el, {
        value: '',
        theme: 'one-dark',
        lineNumbers: true,
        readOnly: readonly,
        mode: lang
    });
};

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

class Hub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            room: '',
            rooms: []
        };
    }
    componentDidMount() {
        fetch('/rooms')
        .then(res => res.json())
        .then(rooms => this.setState({rooms: rooms}));

        this.socket = io();
        this.socket.on('rooms', rooms => {
            this.setState({rooms: rooms});
        });
    }
    componentWillUnmount() {
        this.socket.off('rooms');
    }
    change(event) {
        this.setState({room: event.target.value});
    }
    submit(event) {
        event.preventDefault();
        if (!this.state.room)
            return;

        this.props.onCreate(this.state.room.toLowerCase());
    }
    choose(room) {
        this.props.onEnter(room);
    }
    render() {
        const lis = this.state.rooms.map(room => {
            return (
                <li key={room}>
                    <button className="button is-small is-primary" onClick={this.choose.bind(this, room)}>
                        <span>{room}</span>
                        <span className="icon">
                            <i className="fas fa-arrow-right"></i>
                        </span>
                    </button>
                </li>
            );
        });

        return (
            <div className="columns is-gapless is-mobile h-home">
                <div className="column is-half has-text-centered">
                    <form onSubmit={this.submit.bind(this)}>
                        <label className="label">Create a room</label>
                        <div className="field is-grouped is-grouped-centered has-addons">
                            <div className="control is-marginless">
                                <input className={classnames('input', {'is-danger': this.props.invalid})} type="text" placeholder="Room name" placeholder="Room name" value={this.state.room} onChange={this.change.bind(this)} />
                            </div>
                            <div className="control">
                                <button className={classnames('button', {'is-primary': !this.props.invalid, 'is-danger': this.props.invalid})}>
                                    let's go
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="column is-half has-text-centered">
                    {!lis.length ? null : <div>
                        <label className="label">Join a room</label>
                        <ul className="buttons">
                            {lis}
                        </ul>
                    </div>}
                </div>
            </div>
        );
    }
}

class BaseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            js: '',
            css: '',
            html: '',
            leftRatio: 50,
            rightRatio: 50,
            draggingRight: false
        };
        this.updateCodeDebounced = debounce(this.updateCode.bind(this), 500);
    }
    updateDragLeft(ratio) {
        this.setState({leftRatio: ratio})
    }
    updateDragRight(ratio) {
        this.setState({rightRatio: ratio})
    }
    updateDragRightToggle(dragging) {
        this.setState({draggingRight: dragging})
    }
    updateCode(lang, value) {
        const state = {};
        state[lang] = value;
        this.setState(state);
    }
    render() {
        return (
            <div className="columns is-gapless is-mobile h-editor" ref={el => this.container = el}>
                <div className="column is-half">
                    <Divider title="HTML"></Divider>
                    <div className="columns" style={{flexBasis: this.state.leftRatio + '%' }}>
                        <div className="column is-paddingless" ref={el => this.html = el}></div>
                    </div>
                    <Draggable title="JavaScript" parent={this} onUpdate={this.updateDragLeft.bind(this)} />
                    <div className="columns" style={{flexBasis: 100 - this.state.leftRatio + '%' }}>
                        <div className="column is-paddingless" ref={el => this.js = el}></div>
                    </div>
                </div>
                <div className="column is-half">
                    <Divider title="CSS"></Divider>
                    <div className="columns" style={{flexBasis: this.state.rightRatio + '%' }}>
                        <div className="column is-paddingless" ref={el => this.css = el}></div>
                    </div>
                    <Draggable title="Result" parent={this} onUpdate={this.updateDragRight.bind(this)} onUpdateStart={this.updateDragRightToggle.bind(this, true)} onUpdateStop={this.updateDragRightToggle.bind(this, false)} />
                    <div className="columns" style={{flexBasis: 100 - this.state.rightRatio + '%' }}>
                        <div className="column is-paddingless" ref={el => this.frame = el}>
                            <Result className={classnames({'is-hidden': this.state.draggingRight})} js={this.state.js} css={this.state.css} html={this.state.html}/>
                            <div className={classnames({'is-hidden': !this.state.draggingRight})}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

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

class Mirror extends BaseEditor {
    componentDidMount() {
        const room = this.props.room;

        const mirrors = {
            html: mirror(this.html, 'htmlmixed', true),
            css: mirror(this.css, 'css', true),
            js: mirror(this.js, 'javascript', true)
        };

        this.socket = io();
        this.socket.on(`${room}://mirror`, mirror => {
            const lang = Object.keys(mirror)[0];
            const diff = mirror[lang];
            mirrors[lang].replaceRange(diff.text, diff.from, diff.to, diff.origin);
            this.updateCodeDebounced(lang, mirrors[lang].getValue());
        });

        fetch(`/rooms/${room}`)
        .then(res => res.json())
        .then(data => {
            ['html', 'css', 'js'].forEach(lang => {
                mirrors[lang].setValue(data[lang].value);
                this.updateCode(lang, mirrors[lang].getValue());
            });
        });
    }
    componentWillUnmount() {
        this.socket.off(`${this.props.room}://mirror`);
    }
}

class Result extends React.Component {
    template(js, css, html) {
        return `
            <html>
                <head>
                    <style>${css}</style>
                </head>
                <body>
                    ${html}
                    <script>${js}</script>
                </body>
            </html>
        `;
    }
    render() {
        const template = this.template(this.props.js, this.props.css, this.props.html);
        return <iframe srcDoc={template}></iframe>;
    }
}

class Draggable extends React.Component {
    constructor(props) {
        super(props);

        this.dragging = false;
        this.drag = this.drag.bind(this);
        this.defaultHalf = this.defaultHalf.bind(this);
        this.dragStart = this.dragStart.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
    }
    drag(e) {
        if (!this.dragging)
            return;
        
        const rect = this.props.parent.container.getBoundingClientRect();
        let ratio = Math.floor(((e.pageY - rect.top) / rect.height) * 100);
        this.props.onUpdate(ratio);
    }
    dragStart() {
        this.dragging = true;
        this.props.onUpdateStart && this.props.onUpdateStart();
    }
    dragEnd() {
        this.dragging = false;
        this.props.onUpdateStop && this.props.onUpdateStop();
    }
    defaultHalf() {
        this.props.onUpdate(50);
    }
    componentDidMount() {
        this.el.addEventListener('dblclick', this.defaultHalf);
        this.el.addEventListener('mousedown', this.dragStart);
        document.addEventListener('mouseup', this.dragEnd);
        document.addEventListener('mousemove', this.drag);
    }
    componentWillUmount() {
        document.removeEventListener('mouseup', this.dragEnd);
        document.removeEventListener('mousemove', this.drag);
    }
    render() {
        return (
            <div className="divider is-draggable" ref={el => this.el = el}>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

class Divider extends React.Component {
    render() {
        return (
            <div className="divider">
                <p>{this.props.title}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
);

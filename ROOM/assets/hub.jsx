import React from 'react';
import classnames from './classnames';

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

export default Hub;

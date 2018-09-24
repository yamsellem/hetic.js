import React from 'react';
import classnames from './classnames';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            jsPath: '',
            cssPath: ''
        }
    }
    toggle() {
        this.setState({visible: !this.state.visible});
    }
    isResource(value) {
        return /^http:\/\//.test(value) || /^https:\/\//.test(value);
    }
    addResourceCSS(e) {
        e.preventDefault();
        this.props.onResources('add', 'css', this.state.cssPath);
        this.setState({cssPath: ''});
    }
    addResourceJS(e) {
        e.preventDefault();
        this.props.onResources('add', 'js', this.state.jsPath);
        this.setState({jsPath: ''});
    }
    removeResourceCSS(name, e) {
        e.preventDefault();
        this.props.onResources('remove', 'css', name);
        this.setState({cssPath: ''});
    }
    removeResourceJS(name, e) {
        e.preventDefault();
        this.props.onResources('remove', 'js', name);
        this.setState({jsPath: ''});
    }
    render() {
        const tab = this.props.tab;
        
        let css = null;
        let js = null;
        if (this.props.code.resources.css)
            css = <ul>{this.props.code.resources.css.map((css, index) => <li key={index}><a href={css} target="_blank">{css}</a><i class="fas fa-trash-alt" onClick={this.removeResourceCSS.bind(this, css)}></i></li>)}</ul>
        if (this.props.code.resources.js)
            js = <ul>{this.props.code.resources.js.map((js, index) => <li key={index}><a href={js} target="_blank">{js}</a><i class="fas fa-trash-alt" onClick={this.removeResourceJS.bind(this, js)}></i></li>)}</ul>

        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    ROOM
                </div>
                <div className="navbar-button">
                    <div class={classnames('field is-grouped is-grouped-multiline', {'is-hidden': tab === 'hub'})}>
                        <div className={classnames('control', {'is-hidden': tab !== 'editor'})}>
                            <div className="tags has-addons">
                                <span className="tag is-primary">resources</span>
                                <a className="tag is-add is-primary" onClick={this.toggle.bind(this)}></a>
                            </div>
                            <div class={classnames('notification', {'is-hidden': !this.state.visible})}>
                                <p>CSS</p>
                                <form class="field has-addons" onSubmit={this.addResourceCSS.bind(this)}>
                                    <div class="control is-expanded">
                                        <input class="input is-small is-dark" type="text" placeholder="Add a stylesheet" value={this.state.cssPath} onChange={event => this.setState({cssPath: event.target.value})} />
                                    </div>
                                    <div class="control">
                                        <button class="button is-small is-dark">+</button>
                                    </div>
                                </form>
                                {css}

                                <p>JavaScript</p>
                                <form class="field has-addons" onSubmit={this.addResourceJS.bind(this)}>
                                    <div class="control is-expanded">
                                        <input class="input is-small is-dark" type="text" placeholder="Add a script" value={this.state.jsPath} onChange={event => this.setState({jsPath: event.target.value})} />
                                    </div>
                                    <div class="control">
                                        <button class="button is-small is-dark">+</button>
                                    </div>
                                </form>
                                {js}

                            </div>
                        </div>
                        <div className="control">
                            <div className="tags has-addons">
                                <span className={classnames('tag is-primary', {'is-recording': tab === 'editor'})}>{this.props.room}</span>
                                <a className="tag is-delete is-primary" onClick={this.props.onLeave}></a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;

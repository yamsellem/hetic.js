
(function() {
    var Header = React.createClass({
        getInitialState: function() {
            return {
                newTodo: ''
            }
        },
        render: function() {
            return <header id="header">
                <h1>todos</h1>
                <input
                    id="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus={true}
                    value={this.state.newTodo}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleChange}/>
            </header>;
        },
        handleChange: function(event) {
            this.setState({newTodo: event.target.value});
        },
        handleKeyDown: function (event) {
			if (event.which !== 13)
				return;

			var val = this.state.newTodo.trim();
            if (!val)
                return;

            var collection = this.props.collection;
            collection.set(collection.size, {
                id: collection.size,
                name: val,
                completed: false
            });

            this.setState({newTodo: ''});
		}
    });
    var Item = React.createClass({
        getInitialState: function() {
            return {
                editing: false,
                editText: ''
            };
        },
        render: function() {
            return <li className={classNames({
                completed: this.props.model.completed,
                editing: this.state.editing
            })}>
                <div className="view">
                    <input
                        type="checkbox"
                        className="toggle"
                        checked={this.props.model.completed}
                        onChange={this.props.onToggle} />
                    <label onDoubleClick={this.handleEdit}>{this.props.model.name}</label>
                    <button className="destroy" onClick={this.props.onDestroy}></button>
                </div>
                <input
                    ref="editField"
                    type="text"
                    className="edit"
                    onKeyDown={this.handleKeyDown}
                    onBlur={this.handleSubmit}
                    onChange={this.handleChange}
                    value={this.state.editText}/>
            </li>;
        },
        handleEdit: function() {
            this.setState({
                editing: true,
                editText: this.props.model.name
            });
        },
        handleChange: function(event) {
            this.setState({editText: event.target.value});
        },
        handleKeyDown: function (event) {
			if (event.which !== 13)
				return;
            this.handleSubmit();
        },
        handleSubmit: function() {
            this.props.model.name = this.state.editText;
            this.props.onUpdate();
            this.setState({editing: false});
        },
        componentDidUpdate: function () {
			if (this.state.editing) {
				var node = React.findDOMNode(this.refs.editField);
				node.focus();
				node.setSelectionRange(node.value.length, node.value.length);
			}
		},
    })
    var List = React.createClass({
        componentDidMount: function() {
            this.props.collection.onChange(this.forceUpdate.bind(this));
        },
        render: function() {
            var items = this.props.collection.toArray()
            .filter(model => {
                if (this.props.nowShowing === 'active')
                    return !model.completed;
                else if (this.props.nowShowing === 'completed')
                    return model.completed;
                else
                    return true;
            })
            .map(model => {
                return <Item
                    key={model.id}
                    model={model}
                    onToggle={this.toggle.bind(this, model)}
                    onUpdate={this.update.bind(this, model)}
                    onDestroy={this.destroy.bind(this, model)}/>;
            });

            return <section id="main">
                <input
                    id="toggle-all"
                    type="checkbox"
                    checked={this.props.collection.toArray().every(model => model.completed)}
                    onChange={this.toggleAll}/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul id="todo-list">
                    {items}
                </ul>
            </section>;
        },
        toggle: function(model) {
            model.completed = !model.completed;
            this.update(model);
        },
        update: function(model) {
            this.props.collection.set(model.id, model);
        },
        destroy: function(model) {
            this.props.collection.delete(model.id);
        },
        toggleAll: function() {
            this.props.collection.toArray()
            .forEach(model => {
                model.completed = !model.completed;
                this.props.collection.set(model.id, model);
            });
        }
    });
    var Footer = React.createClass({
        componentDidMount: function() {
            this.props.collection.onChange(this.forceUpdate.bind(this));
        },
        render: function() {
            var nowShowing = this.props.nowShowing;

            var activeCount = this.props.collection.toArray()
            .filter(model => !model.completed).length;

            if (activeCount < 2)
                activeCount += ' item left';
            else
                activeCount += ' items left';

            this.props.collection.size
            return <footer id="footer">
                <span id="todo-count">{activeCount}</span>
                <ul id="filters">
                    <li>
                        <a
                            className={classNames({selected: nowShowing === 'all'})}
                            href="#/">All</a>
                    </li>
                    <li>
                        <a
                            className={classNames({selected: nowShowing === 'active'})}
                            href="#/active">Active</a>
                    </li>
                    <li>
                        <a
                            className={classNames({selected: nowShowing === 'completed'})}
                            href="#/completed">Completed</a>
                    </li>
                </ul>
                <button id="clear-completed" onClick={this.handleDeleteComplete}>Clear completed</button>
            </footer>;
        },
        handleDeleteComplete: function() {
            this.props.collection.toArray()
            .filter(model => model.completed)
            .forEach(model => this.props.collection.delete(model.id));
        }
    });

    // add listeners to Map common update operations
    class Collection extends Map {
        constructor() {
            super();
            this.listeners = [];
        }
        set(key, value) {
            super.set(key, value);
            this.listeners.forEach(cb => cb());
        }
        delete(key) {
            super.delete(key);
            this.listeners.forEach(cb => cb());
        }
        onChange(cb) {
            this.listeners.push(cb);
        }
        toArray() {
            return Array.from(this.values());
        }
    }

    var collection = new Collection();

    var App = React.createClass({
        getInitialState: function() {
            return {
                nowShowing: 'all'
            }
        },
        render: function() {
            return <div>
                <Header collection={collection}/>
                <List collection={collection} nowShowing={this.state.nowShowing}/>
                <Footer collection={collection} nowShowing={this.state.nowShowing}/>
            </div>;
        },
        componentDidMount: function () {
			var setState = this.setState;
			var router = Router({
				'/': setState.bind(this, {nowShowing: 'all'}),
				'/active': setState.bind(this, {nowShowing: 'active'}),
				'/completed': setState.bind(this, {nowShowing: 'completed'})
			});
			router.init('/');
		}
    })

    React.render(
        <App />,
        document.querySelector('#todoapp')
    );
})();

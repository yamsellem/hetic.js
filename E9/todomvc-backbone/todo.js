'use strict';

$(function() {
    var Header = Backbone.View.extend({
        tagName: 'header',
        id: 'header',
        events: {
            'keyup': 'onChange'
        },
        template: function() {
            return `
                <h1>todos</h1>
                <input id="new-todo" placeholder="What needs to be done?" autofocus>
            `;
        },
        render: function() {
            $(this.el).html(this.template());
            return this;
        },
        onChange: function(event) {
            if (event.which != 13)
                return;

            var val = event.target.value;
            if (!val)
                return;

            this.collection.add({name: val, completed: false});
            event.target.value = '';
        }
    });

    var Item = Backbone.View.extend({
        tagName: 'li',
        events: {
            'click input[type=checkbox]': 'toggle',
            'dblclick label': 'edit',
            'click button': 'destroy',
            'keyup': 'onChange'
        },
        initialize: function() {
            this.listenTo(this.model, 'destroy', this.remove);
        },
        template: function() {
            return `
                <div class="view">
                    <input type="checkbox" class="toggle" />
                    <label>${this.model.get("name")}</label>
                    <button class="destroy"></button>
                </div>
                <input type="text" class="edit" />
            `;
        },
        render: function() {
            var completed = this.model.get('completed');

            $(this.el).html(this.template());
            $(this.el).toggleClass('completed', completed);
            $(this.el).find('input[type=checkbox]').prop('checked', completed);

            return this;
        },
        toggle: function() {
            var completed = !this.model.get('completed');
            this.model.set('completed', completed);
            this.render();
        },
        destroy: function() {
            this.model.destroy();
        },
        edit: function() {
            $(this.el).addClass('editing');
            $(this.el).find('input[type=text]').val(this.model.get('name')).focus();
        },
        onChange: function(event) {
            if (event.which != 13)
                return;

            this.model.set('name', event.target.value);
            $(this.el).removeClass('editing');
            this.render();
        }
    });

    var List = Backbone.View.extend({
        tagName: 'section',
        id: 'main',
        events: {
            'click #toggle-all': 'toggleAll'
        },
        initialize: function() {
            this.listenTo(this.collection, 'add change', this.render);
            this.listenTo(this.collection, 'filter', function(type) {
                this.filterType = type;
                this.render();
            });
        },
        template: function() {
            return `
                <input id="toggle-all" type="checkbox">
                <label for="toggle-all">Mark all as complete</label>
                <ul id="todo-list"></ul>
            `;
        },
        render: function() {
            $(this.el).html(this.template());
            $('#toggle-all').prop('checked', this.checked);

            this.collection.filter(function(model) {
                if (this.filterType === 'active')
                    return !model.get('completed');
                else if (this.filterType === 'completed')
                    return model.get('completed');
                else
                    return true;
            }.bind(this)).forEach(function(model) {
                var item = new Item({model: model});
                $(this.el).find('ul').append(item.render().el);
            }.bind(this));

            return this;
        },
        toggleAll: function(event) {
            this.checked = $(event.target).prop('checked');

            this.collection.forEach(function(model) {
                model.set('completed', this.checked);
            }.bind(this));
        }
    });

    var Footer = Backbone.View.extend({
        tagName: 'footer',
        id: 'footer',
        events: {
            'click #clear-completed': 'clearCompleted'
        },
        initialize: function() {
            this.listenTo(this.collection, 'add change', this.render);
            this.listenTo(this.collection, 'filter', function(type) {
                this.filterType = type;
                this.render();
            });
        },
        template: function() {
            return `
                <span id="todo-count"></span>
                <ul id="filters">
                    <li>
                        <a href="#/">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                <button id="clear-completed">Clear completed</button>
            `;
        },
        render: function() {
            $(this.el).html(this.template());

            var index = !this.filterType ? 0 : this.filterType === 'active' ? 1 : 2;

            $(this.el).find('a').removeClass('selected');
            $($(this.el).find('a')[index]).addClass('selected');

            var left = this.collection.filter(function(model) {
                return !model.get('completed');
            }).length;

            left < 2 ? left += ' item left' : left += ' items left';
            $(this.el).find('#todo-count').text(left);

            return this;
        },
        clearCompleted: function() {
            this.collection.filter(function(model) {
                return model.get('completed');
            }).forEach(function(model) {
                model.destroy();
            });
        }
    });

    var todos = new Backbone.Collection();

    var Router = Backbone.Router.extend({
        routes: {
			'*filter': 'setFilter'
		},
		setFilter: function (param) {
			todos.trigger('filter', param);
		}
    });

    $('#todoapp')
    .append(new Header({collection: todos}).render().el)
    .append(new List({collection: todos}).render().el)
    .append(new Footer({collection: todos}).render().el);

    var router = new Router();
    Backbone.history.start();
})

$(function() {

    // handle item checked, meaning it's done
    $('#todo-list').delegate('li input[type=checkbox]', 'change', function() {
        $(this).closest('li').toggleClass('completed');
        filter(); // necessary later for filters
        count(); // necessary later for count
    });

    // handle item creation
    var template = `
    <div class="view">
        <input type="checkbox" class="toggle" />
        <label></label>
        <button class="destroy"></button>
    </div>
    <input type="text" class="edit" />`;

    $('#new-todo').on('keypress', function(e) {
        if (e.keyCode !== 13) return;

        var $li = $('<li>').html(template);
        $li.find('label').html(this.value);
        $('#todo-list').append($li);
        this.value = "";

        filter(); // necessary later for filters
        count(); // necessary later for count
    });

    // handle item deletion
    $('#todo-list').delegate('.destroy', 'click', function() {
        $(this).closest('li').remove();
        count(); // necessary later for count
    });

    // handle item edition
    $('#todo-list').delegate('li label', 'dblclick', function() {
        var $li = $(this).closest('li');
        $li.toggleClass('editing');
        $li.find('input.edit').val($(this).text()).focus();
    });

    $('#todo-list').delegate('li input[type=text]', 'keypress', function(e) {
        if (e.keyCode !== 13) return;

        console.log('dude')
        var $li = $(this).closest('li');

        var value = $(this).val();
        $li.find('label').text(value);
        $li.toggleClass('editing');
    });

    $('#todo-list').delegate('li input[type=text]', 'click', function(e) {
        e.stopPropagation();
    });

    $(document).on('click', function() {
        $('li').removeClass('editing');
    });

    // handle count actives
    var count = function() {
        var count = $('#todo-list li input[type=checkbox]:not(:checked)').length;
        $('#todo-count').text(count > 1 ? `${count} items left` : `${count} item left`);
    }

    // handle filters
    var filter = function(state) {
        var state = location.hash;
        var index = state === '#/' ? 0 : state === '#/active' ? 1 : 2;
        $('#filters a').removeClass('selected');
        $($('#filters a')[index]).addClass('selected');

        var $lis = $('#todo-list li');
        switch (state) {
            case '#/':
                $lis.removeClass('hidden');
            break;
            case '#/active':
                $lis.removeClass('hidden');
                var $li = $lis.filter(function(index, li) {
                    return $(li).find('input[type=checkbox]:checked').length;
                });
                $li.addClass('hidden');
            break;
            case '#/completed':
                $lis.removeClass('hidden');
                var $li = $lis.filter(function(index, li) {
                    return $(li).find('input[type=checkbox]:not(:checked)').length;
                });
                $li.addClass('hidden');
            break;
        }
    };

    filter();
    count();
    $(window).on('hashchange', filter);

    // handle completed deletion
    $('#clear-completed').on('click', function() {
        var $lis = $('#todo-list li');
        var $li = $lis.filter(function(index, li) {
            return $(li).find('input[type=checkbox]:checked').length;
        });
        $li.remove();
    });

    // toggle all
    $('#toggle-all').on('change', function() {
        var $checkbox = $('#todo-list li input[type=checkbox]');
        $checkbox.prop('checked', this.checked);
        filter();
        count(); // necessary later for count
    });
});

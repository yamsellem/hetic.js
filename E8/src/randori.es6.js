"use strict";

import $ from 'jquery';

$(() => {
    $('i').on('click', () => {
        $('input').val('').removeAttr('disabled');
        $('ul').html('');
        $('i').html('').hide();
    });

    $('input').on('keydown', (e) => {
        let $li = $('li.selected');
        switch(e.keyCode) {
            case 13:
                if ($li.length) {
                    let username = $li.text();
                    username = username.replace(/\/.*/, '');
                    $('i').html(username).show();
                    $(e.currentTarget).val('').attr('disabled', 'disabled');

                    let $ul = $('ul').html('');

                    $.ajax(`https://api.github.com/users/${username}/repos?q=`)
                     .then(function(data) {
                        for (let i = 0; i < 10; i++) {
                            let item = data[i];
                            $ul.append(`<li>${item.full_name}</li>`);
                        }
                     });
                    break;
                }

                let name = $(e.currentTarget).val();

                $.ajax(`https://api.github.com/search/repositories?q=${name}`)
                .then((data) => {
                    let $ul = $('ul').html('');
                    for (let i = 0; i < 10; i++) {
                        let item = data.items[i];
                        $ul.append(`<li>${item.full_name}</li>`);
                    }
                });
            break;
            case 38:
                if ($li.length) {
                    $li.prev().addClass('selected');
                    $li.removeClass('selected');
                } else {
                    $li = $('li').last();
                    $li.addClass('selected');
                }
            break;
            case 40:
                if ($li.length) {
                    $li.next().addClass('selected');
                    $li.removeClass('selected');
                } else {
                    $li = $('li').first();
                    $li.addClass('selected');
                }
            break;
        }
    });
});

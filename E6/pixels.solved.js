// step 1
var li = document.querySelector('.board li');
li.classList.add('cadmiumyellow');

// step 2
var lis = document.querySelectorAll('.board li.braken');
for (var i = 0; i < lis.length; i++)
    lis[i].className = 'candyapplered';

// step 3
var li = document.querySelector('.board li.cadmiumyellow');
li.addEventListener('click', function() {
    li.className = 'bondiblue';
});

// step 4
var li = document.querySelector('.board li.candyapplered');
li.addEventListener('click', function() {
    var lis = document.querySelectorAll('.board li');
    for (var i = 0; i < lis.length; i++)
        lis[i].className = 'candyapplered';
});

// step 5
var lis = document.querySelectorAll('.board li.champagne');
for (var i = 0; i < lis.length; i++) {
    var li = lis[i];
    li.addEventListener('click', function() {
        this.className = 'braken';
    });
}

// step 6
var lib = document.querySelector('.board li.braken');
var lic = document.querySelector('.board li.champagne');

var toggle = function(li) {
    if (li.className === 'champagne') {
        li.className = 'braken';
    } else {
        li.className = 'champagne';
    }
}

lib.addEventListener('click', function() {
    toggle(lib);
    toggle(lic);
});

lic.addEventListener('click', function() {
    toggle(lib);
    toggle(lic);
});

// step 7
var li = document.querySelector('.board li.champagne');
var i = 0;
li.addEventListener('click', function() {
    i++;
    if (i > 2) {
        li.className = 'braken';
    }
});

// step 8
var handleClick = function(lis, count, i) {
    count[i] = 0;
    var li = lis[i];
    li.addEventListener('click', function() {
        count[i]++;
        if (count[i] > 2) {
            li.className = 'champagne';
        }
    });
}

var lis = document.querySelectorAll('.board li.braken');
var count = [];
for (var i = 0; i < lis.length; i++) {
    handleClick(lis, count, i);
}

// step 9
var ul = document.querySelector('.board');
ul.innerHTML += '<li></li><li class="darkgreen"></li><li class="darkgreen"></li><li></li>';

// step 10
var li = document.querySelector('.board li:nth-child(8)');
li.insertAdjacentHTML('afterend', '<li class="safetyorange"></li><li class="safetyorange"></li><li class="safetyorange"></li><li class="safetyorange"></li>');

// step 11
var lis = document.querySelectorAll('.board li');
for(var i = 0; i < lis.length; i++) {
    var li = lis[i];
    li.addEventListener('click', function() {
        var toggle = document.querySelector('.board li.toggle');
        if (!toggle) {
            this.classList.add('toggle');
        } else {
            toggle.classList.remove('toggle');
            var memo = toggle.className;
            toggle.className = this.className;
            this.className = memo;
        }
    });
}

// step 12
var value = 0;
var lis = document.querySelectorAll('.board li');
for(var i = 0; i < lis.length; i++) {
    var li = lis[i];
    li.addEventListener('click', function() {
        if (!this.dataset.value) {
            this.dataset.value = value++;
        }
    });

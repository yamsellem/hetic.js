module.exports = {
    add: function(price, value) {
        return parseInt((price * 100) + (value * 100)) / 100;
    } ,
    multiply: function(price, value) {
        return parseInt((price * 100) * value) / 100;
    }
};

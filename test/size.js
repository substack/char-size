var test = require('tape');
var charSize = require('../');

test('character sizes', function (t) {
    t.plan(5);
    var size = charSize(document.body);
    t.equal(typeof size.width, 'number');
    t.equal(typeof size.height, 'number');
    t.ok(size.width > 4);
    t.ok(size.height > 10);
    t.ok(size.width < size.height);
});

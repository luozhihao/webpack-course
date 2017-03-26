var $ = require('jquery');
var str = require('./hello.js');

function main() {
    $('body').html(str);
}

main();
const fs = require('fs');
const done = require('./done');

module.exports = function (fileName) {
    fs.readFile('./' + fileName, 'utf8', function (err, data) {
        if (err) {
            done(err);
        } else {
            done(data);
        }
    })
}
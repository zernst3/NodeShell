const fs = require('fs');
const done = require('./done');

module.exports = function () {
    fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
            done(err);
        } else {
            done(files.join('\n'));
        }
    })
}
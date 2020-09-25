const pwdFunc = require('./pwd.js'),
lsFunc        = require('./fs'),
catFunc       = require('./cat');

// Output a prompt
process.stdout.write('prompt > ');

function pwd () {
    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim();
    
        process.stdout.write('You typed: ' + cmd + '\n');
        if (cmd === 'pwd') {
            pwdFunc();
        } else if (cmd === 'ls') {
            lsFunc();
        } else if (cmd.includes('cat')) {
            catFunc(cmd.substring(4));
        }
        process.stdout.write('\nprompt > ');
    });
}

pwd();
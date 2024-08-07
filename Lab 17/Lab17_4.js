const child_process = require('child_process');
const { stdout, stdin } = require('process');

child_process.exec('dir', (err, stdout, stdin)=> {
    console.log(stdout);
})

//Create new directory
child_process.exec('mkdir hello', (err, stdout, stdin)=> {
    console.log(stdout);
})
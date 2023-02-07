const user = require('./infomation');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `${user.name} ${user.campus}`
}));
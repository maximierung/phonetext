const num_table = ["7777", "9999", "222", "333", "444", "555", "666", "777", "888", "999", "22", "33", "44", "55", "66", "77", "88", "99", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const char_table = ["s", "z", "c", "f", "i", "l", "o", "r", "v", "y", "b", "e", "h", "k", "n", "q", "u", "x", "a", "d", "g", "j", "m", "p", "t", "w", " "];

function read(args) {
    if (typeof args !== 'string') throw new TypeError('Error: The first parameter has to be a string.');
    let string = args;
    for (let i = 0; i < num_table.length; i++) {
        string = string.replace(new RegExp(num_table[i], "g"), char_table[i]);
    }
    return string;
}

function write(args) {
    if (typeof args !== 'string') throw new TypeError('Error: The first parameter has to be a string.');
    let string = args.toLowerCase();
    for (let i = 0; i < num_table.length; i++) {
        string = string.replace(new RegExp(char_table[i], "g"), num_table[i]);
    }
    return string;
}
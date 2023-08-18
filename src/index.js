const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let array = [];

    for (let i = 0; i < expr.length; i += 10) {
        array.push(expr.slice(i, i + 10));
    }

    let arrayMorse = array.map((string) => {
        return string.replace(/^0+/, '').replace(/10/g, '.').replace(/11/g, '-');
    });

    let arrayLetter = arrayMorse.map((string) => {
        if (string === '**********') {
            return ' ';
        }
        return MORSE_TABLE[string]
    });

    return arrayLetter.join('').replace(/undefined/g, ' ');
}

module.exports = {
    decode
}
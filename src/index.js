const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exprArray = [];
    for (let i = 0; i < expr.length/10; i++) {
        exprArray[i] = (expr.substring(i*10, (i+1)*10));
    }
    let exprArrayWithoutZero = exprArray.map((item) => {
        let i = 0;
        let zeroCount = 0;
        while (item[i] === "0") {
            zeroCount++;
            i++;
        }
        return item.slice(zeroCount);
    });

    let morseArray = [];
    exprArrayWithoutZero.forEach((item) => {
        let morseLetter = '';
        if (item[0] === '*') {
            morseArray.push(' ');
        } else {
            for (i = 1; i < item.length; i = i + 2) {
                if (item[i] === '0') {
                    morseLetter = morseLetter + '.';
                } else {
                    morseLetter = morseLetter + '-';
                }
            }
            morseArray.push(morseLetter);
        }
    });
    
    let str = '';
    for (let i = 0; i < morseArray.length; i++) {
        if (morseArray[i] === ' ') {
            str = str + ' ';
        } else {
            str = str + MORSE_TABLE[morseArray[i]];
        }
    }
    return str;
}

module.exports = {
    decode
}
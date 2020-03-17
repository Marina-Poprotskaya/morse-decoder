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
    let subArr = [];
    for (let i = 0; i< expr.length; i= i + 10) {
        subArr.push(expr.slice(i, i+10))
    }
     console.log(subArr);
    
    let newArr=[];
    for (let i=0; i<subArr.length; i++) {
        if (subArr[i]== '**********') {
            subArr[i]=subArr[i].replace(subArr[i], ' ');
        }
        newArr.push(subArr[i].replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-'));
    }
    
    
    let result = '';
    for (let i = 0; i < newArr.length; i++) {
        if (!MORSE_TABLE[newArr[i]]) {
            result+=' ';
            continue;
        } 
        result+=MORSE_TABLE[newArr[i]];
    }
    return result;
}

module.exports = {
    decode
}

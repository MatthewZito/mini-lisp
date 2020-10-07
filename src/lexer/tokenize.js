const {
    isLetter,
    isWhitespace,
    isNumber,
    isParenthesis,
    isQuote
} = require("../utils/identifyTokens.js");

const tokenize = input => {
    let cursor = 0;
    const tokens = [];

    while (cursor < input.length) {
        const char = input[cursor];

        if (isParenthesis(char)) {
            tokens.push({
                type: "Parenthesis",
                value: char
            });
            cursor++;
            continue;
        } 

        if (isWhitespace(char)) {
            cursor++;
            continue;
        }
        
        if (isNumber(char)) {
            tokens.push({
                type: "Number",
                value: parseInt(char, 10)
            });
            cursor++
            continue;
        }

        if (isLetter(char)) {
            tokens.push({
                type: "Letter",
                value: char
            });
            cursor++;
            continue;
        }
    }

    return tokens;
};

module.exports = { 
    tokenize
};
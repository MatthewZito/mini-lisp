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
        cursor++;
    }

    return tokens;
}

module.exports = { 
    tokenize
};
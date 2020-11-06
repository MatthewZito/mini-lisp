const { pipe } = require("./builders");
const {
    isLetter,
    isWhitespace,
    isNumber,
    isOpenParenthesis,
    isCloseParenthesis,
    isParenthesis,
    isQuote,
    isOperator
} = require("./identifyChar");

const { peek, pop } = require("./navigate");

module.exports = {
    pipe,
    isLetter,
    isWhitespace,
    isNumber,
    isOpenParenthesis,
    isCloseParenthesis,
    isParenthesis,
    isQuote,
    isOperator,
    peek,
    pop
};

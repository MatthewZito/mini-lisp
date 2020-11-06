const { tokenize } = require("../lexer");
const { parse } = require("../parser");
const { evaluate } = require("../environment");
const { pipe } = require("../utils");

module.exports = {
    parseEval: pipe(tokenize, parse, evaluate)
};

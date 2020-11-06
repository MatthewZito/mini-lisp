const { TYPES } = require("../constants");

const {
    isOpenParenthesis,
    isCloseParenthesis,
    peek,
    pop
} = require("../utils");

const encapsulate = tokens => {
    const token = pop(tokens);

    if (isOpenParenthesis(token.value)) {
        const expression = [];

        while (!isCloseParenthesis(peek(tokens).value)) {
            expression.push(encapsulate(tokens));
        }
        pop(tokens);
        return expression;
    }
    return token;
};

const parse = tokens => {
    // if Array, evaluate expression
    if (Array.isArray(tokens)) {
        const [first, ...rest] = tokens;
        return {
            type: "CallExpression",
            name: first.value,
            arguments: rest.map(parse)
        };
    }

    const token = tokens;

    switch (token.type) {
        case TYPES.NUMBER:
            return {
                type: "NumericLiteral",
                value: token.value
            };
        case TYPES.STRING:
            return {
                type: "StringValue",
                value: token.value
            };
        case TYPES.NAME:
            return {
                type: "Identifier",
                value: token.value
            };
    }
};

module.exports = {
    parse: tokens => parse(encapsulate(tokens))
};

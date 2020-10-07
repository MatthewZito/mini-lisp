const { tokenize } = require("../src/lexer/tokenize.js");

describe('Evaluation of lexer', () => {
    describe('Evaluation of tokenization', () => {
        it('should properly tokenize parentheses', () => {
            const input = "()";
            const result = [
                { type: 'Parenthesis', value: "("},
                { type: 'Parenthesis', value: ")"}
            ];
            expect(tokenize(input)).toEqual(result);
        });
    });
});

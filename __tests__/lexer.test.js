const { tokenize } = require("../src/lexer/tokenize.js");

describe("Evaluation of lexer", () => {
    describe("Evaluation of tokenization", () => {
        it("should tokenize parentheses", () => {
            const input = "()";
            const result = [
                { type: "Parenthesis", value: "("},
                { type: "Parenthesis", value: ")"}
            ];
            expect(tokenize(input)).toEqual(result);
        });

        it("should skip whitespace", () => {
            const input = " ";
            expect(tokenize(input)).toEqual([]);
        });

        it("should tokenize a given digit", () => {
            const input = "9";
            const result = [
                { type: "Number", value: 9 }
            ];
            expect(tokenize(input)).toEqual(result);
        });

        it("should tokenize digits in an expression discretely", () => {
            const input = "(1 9)";
            const result = [
                { type: "Parenthesis", value: "("},
                { type: "Number", value: 1 },
                { type: "Number", value: 9 },
                { type: "Parenthesis", value: ")"}
            ];
            expect(tokenize(input)).toEqual(result);
        });

        it("should tokenize letters in an expression discretely", () => {
            const input = "(x y)";
            const result = [
                { type: "Parenthesis", value: "("},
                { type: "Letter", value: "x" },
                { type: "Letter", value: "y" },
                { type: "Parenthesis", value: ")"}
            ];
            expect(tokenize(input)).toEqual(result);
        });
    });
});

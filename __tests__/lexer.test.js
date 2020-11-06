const { tokenize } = require("../src/lexer");

describe("Evaluation of lexer", () => {
    describe("Evaluation of tokenization", () => {
        it("should tokenize parentheses", () => {
            const input = "()";
            const result = [
                { type: "Parenthesis", value: "(" },
                { type: "Parenthesis", value: ")" }
            ];
            expect(tokenize(input)).toEqual(result);
        });

        it("should skip whitespace", () => {
            const input = " ";
            expect(tokenize(input)).toEqual([]);
        });

        it("should tokenize a given digit", () => {
            const input = "9";
            const result = [{ type: "Number", value: 9 }];
            expect(tokenize(input)).toEqual(result);
        });

        it("should tokenize digits in an expression discretely", () => {
            const input = "(1 9)";
            const result = [
                { type: "Parenthesis", value: "(" },
                { type: "Number", value: 1 },
                { type: "Number", value: 9 },
                { type: "Parenthesis", value: ")" }
            ];
            expect(tokenize(input)).toEqual(result);
        });

        it("should tokenize letters in an expression discretely", () => {
            const input = "(x y)";
            const result = [
                { type: "Parenthesis", value: "(" },
                { type: "Name", value: "x" },
                { type: "Name", value: "y" },
                { type: "Parenthesis", value: ")" }
            ];
            expect(tokenize(input)).toEqual(result);
        });

        it("should tokenize a two-digit number", () => {
            const input = "99";
            const result = [{ type: "Number", value: 99 }];
            expect(tokenize(input)).toEqual(result);
        });

        it("should tokenize a multi-symbol name", () => {
            const input = "Name ";
            const result = [{ type: "Name", value: "Name" }];
            expect(tokenize(input)).toEqual(result);
        });

        it("should tokenize a string", () => {
            const input = '"VGhpc0lzQUJhc2U2NFN0cmluZwo="';
            const result = [
                { type: "String", value: "VGhpc0lzQUJhc2U2NFN0cmluZwo=" }
            ];
            expect(tokenize(input)).toEqual(result);
        });

        it("should tokenize an expression", () => {
            const input = "(add 9 9)";
            const result = [
                { type: "Parenthesis", value: "(" },
                { type: "Name", value: "add" },
                { type: "Number", value: 9 },
                { type: "Number", value: 9 },
                { type: "Parenthesis", value: ")" }
            ];
            expect(tokenize(input)).toEqual(result);
        });
    });
});

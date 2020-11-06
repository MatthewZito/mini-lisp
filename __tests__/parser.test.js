const { parse } = require("../src/parser");

describe("Evaluation of parser", () => {
    describe("Evaluation of AST construction", () => {
        it("should parse a token of type Number", () => {
            const tokens = [
                {
                    type: "Number",
                    value: 9
                }
            ];

            const ast = { type: "NumericLiteral", value: 9 };

            expect(parse(tokens)).toEqual(ast);
        });

        it("should parse a token of type String", () => {
            const tokens = [
                {
                    type: "String",
                    value: "c2ljcElzVGhlTmV3QmlibGUK"
                }
            ];

            const ast = {
                type: "StringValue",
                value: "c2ljcElzVGhlTmV3QmlibGUK"
            };

            expect(parse(tokens)).toEqual(ast);
        });

        it("should parse an Identifier", () => {
            const tokens = [
                {
                    type: "Name",
                    value: "x"
                }
            ];

            const ast = { type: "Identifier", value: "x" };

            expect(parse(tokens)).toEqual(ast);
        });

        it("should construct an AST for a basic expression", () => {
            const tokens = [
                { type: "Parenthesis", value: "(" },
                { type: "Name", value: "add" },
                { type: "Number", value: 9 },
                { type: "Number", value: 3 },
                { type: "Parenthesis", value: ")" }
            ];

            const ast = {
                type: "CallExpression",
                name: "add",
                arguments: [
                    { type: "NumericLiteral", value: 9 },
                    { type: "NumericLiteral", value: 3 }
                ]
            };

            expect(parse(tokens)).toEqual(ast);
        });
    });
});

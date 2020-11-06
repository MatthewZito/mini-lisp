const { evaluate } = require("../src/environment");

describe("Evaluation of repl environment", () => {
    describe("Evaluation of applied recursion", () => {
        it("should resort to returning a primitive numeric", () => {
            const value = 2;
            const ast = { type: "NumericLiteral", value };

            expect(evaluate(ast)).toBe(value);
        });

        it("should resort to returning a primitive string", () => {
            const value = "LaFleur";
            const ast = { type: "StringValue", value };

            expect(evaluate(ast)).toBe(value);
        });

        it("should evaluate simple expressions", () => {
            const ast = {
                type: "CallExpression",
                name: "add",
                arguments: [
                    { type: "NumericLiteral", value: 2 },
                    { type: "NumericLiteral", value: 7 }
                ]
            };

            expect(evaluate(ast)).toBe(9);
        });

        it("should evaluate nested expressions", () => {
            const ast = {
                type: "CallExpression",
                name: "add",
                arguments: [
                    { type: "NumericLiteral", value: 2 },
                    { type: "NumericLiteral", value: 7 },
                    {
                        type: "CallExpression",
                        name: "subtract",
                        arguments: [
                            { type: "NumericLiteral", value: 9 },
                            { type: "NumericLiteral", value: 3 }
                        ]
                    }
                ]
            };

            expect(evaluate(ast)).toBe(15);
        });
    });

    describe("Evaluation of standard library applications", () => {
        it("should perform identifier lookups via the environment", () => {
            const ast = { type: "Identifier", name: "pi" };
            expect(evaluate(ast)).toBe(Math.PI);
        });

        it("should find the largest number in a given range", () => {
            const ast = {
                type: "CallExpression",
                name: "max",
                arguments: [
                    { type: "NumericLiteral", value: 6 },
                    { type: "NumericLiteral", value: 3 },
                    { type: "NumericLiteral", value: 9 },
                    { type: "NumericLiteral", value: 2 }
                ]
            };
            expect(evaluate(ast)).toBe(9);
        });

        it("should find the smallest number in a given range", () => {
            const ast = {
                type: "CallExpression",
                name: "min",
                arguments: [
                    { type: "NumericLiteral", value: 6 },
                    { type: "NumericLiteral", value: 3 },
                    { type: "NumericLiteral", value: 9 },
                    { type: "NumericLiteral", value: 2 }
                ]
            };
            expect(evaluate(ast)).toBe(2);
        });
    });
});

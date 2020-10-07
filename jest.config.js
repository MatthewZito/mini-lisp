module.exports = {
    coverageDirectory: "./coverage",
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.js"
    ],
    coverageThreshold: {
        global: {
            branches: 95,
            functions: 100,
            lines: 100,
            statements: 100
        }
    }
};
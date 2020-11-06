const { prompt } = require("inquirer");
const chalk = require("chalk");

const { parseEval } = require("./compose");

const config = () => {
    const questions = [
        { name: "COMMAND", type: "input", message: chalk.blue(">") }
    ];
    return prompt(questions);
};

const repl = async () => {
    try {
        const answers = await config();
        const { COMMAND } = answers;

        if (COMMAND.trim()) {
            console.log(chalk.yellow(parseEval(COMMAND)));
        }
    } catch (err) {
        console.error(err);
    }
    repl();
};

if (require.main === module) {
    console.log(chalk.green("[+] Environment mounted."));
    repl();
}

module.exports = {
    repl
};

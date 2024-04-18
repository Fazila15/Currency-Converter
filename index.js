import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    EUR: 0.94,
    PKR: 279,
    INR: 84,
    GBP: 0.80,
};
let condition = true;
while (condition) {
    let usrAnswer = await inquirer.prompt([
        {
            name: "from",
            message: `${chalk.green.bold("Enter currency you want to convert: ")}`,
            type: "list",
            choices: ["USD", "EUR", "PKR", "INR", "GBP"]
        },
        {
            name: "to",
            message: `${chalk.green.bold("Enter currency you want to convert in: ")}`,
            type: "list",
            choices: ["USD", "EUR", "PKR", "INR", "GBP"]
        },
        {
            name: "amount",
            message: `${chalk.green.bold("How much amount you want to convert: ")}`,
            type: "number"
        }
    ]);
    let toAmount = currency[usrAnswer.to];
    let fromAmount = currency[usrAnswer.from];
    let amount = usrAnswer.amount;
    let conversionAmount = amount / fromAmount;
    let convertedAmount = conversionAmount * toAmount;
    console.log(chalk.cyan.bold.italic(convertedAmount));
    let ConvertAgain = await inquirer.prompt({
        name: "Again",
        message: `${chalk.yellow.bold("Do you want to convert currency again? ")}`,
        type: "confirm",
        default: "true",
    });
    condition = ConvertAgain.Again;
}
;

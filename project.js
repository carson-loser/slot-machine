// 1. deposit money
// 2. Dtermine number of lines to bet on
// 3. collect a bet amount
// 4. spin slot machine
// 5. check if user won
// 6. give user winnings
// 7. play agin

// function deposit() {
//     return 1;
// }

const prompt = require("prompt-sync")();


const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("invalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("invalid number of lines, try again.");
        } else {
            return numberOfLines;
        }
    }
};

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();
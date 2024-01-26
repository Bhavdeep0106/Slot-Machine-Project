//1.dposit money
//2.determine no of lines to bet on
//3.collect bet
//4.spin the slot
//5.check if the user won 
//6. give the user their winnings
//7.play again

const prompt =require("prompt-sync")();

const deposit = () =>{
    while(true){
        const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepositAmount =parseFloat(depositAmount);

        if(isNaN(numberDepositAmount)||numberDepositAmount <= 0){
        console.log("Invalid deposit amount,try again.")
        }else{
            return numberDepositAmount;
        }

    }
};
const depositAmount = deposit();
console.log(depositAmount);
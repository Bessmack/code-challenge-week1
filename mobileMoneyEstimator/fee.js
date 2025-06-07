const customerInput = prompt("Enter the amount of money you wish to send")
//Prompts the user to enter the amount of cups of Chai Bora the would like
const amount = Math.abs(Number(customerInput));
//Ensure the amount entered is a number, and is always positive
function estimateTransactionFee(amount){
    let transactionFee = (1.5/100 )* amount ;
    //declaring all necessary variables

    if (transactionFee < 10) {
        //declaring all necessary variables
        transactionFee = 10;
        const amountDebited = amount + transactionFee;
        //output will be as instructed below
        console.log(`Sending KES ${amount}:`);
        console.log(`Calculated Transaction Fee: KES 10`);
        console.log(`Total amount to be debited: KES ${amountDebited}`);
        console.log(`\nSend Money Securely!`);
    }else if (transactionFee > 70){
        //declaring all necessary variables
        transactionFee = 70;
        const amountDebited = amount + transactionFee;
        //output will be as instructed below
        console.log(`Sending KES ${amount}:`);
        console.log(`Calculated Transaction Fee: KES 70`);
        console.log(`Total amount to be debited: KES ${amountDebited}`);
        console.log(`\nSend Money Securely!`);
    }else{
        //declaring all necessary variables
        const amountDebited = amount + transactionFee;
        //output will be as instructed below
        console.log(`Sending KES ${amount}:`);
        console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
        console.log(`Total amount to be debited: KES ${amountDebited}`);
        console.log(`\nSend Money Securely!`);
    }
}

//Using an if-else statement for efficiency
if (amount){
    estimateTransactionFee(amount);
}else{
    console.log(`Please enter a valid value!`);
}

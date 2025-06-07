const customerInput = prompt("Karibu! How many cups of Chai Bora would you like to make?")
//Prompts the user to enter the amount of cups of Chai Bora the would like
const numberOfCups = Math.abs(Number(customerInput));
//Ensure the input presented is a number and, is always positive

function calculateChaiIngredients(numberOfCups){
    //declaring all necessary variables
    const a = numberOfCups;
    const water = 200 * a;
    const milk = 50 * a;
    const teaLeaves = 1 * a;
    const sugar = 2 * a;
    //output will be as instructed below
    console.log(`To make ${a} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons(Optional)`);
    console.log("\nEnjoy your Chai Bora!");
}

//Using an if-else statement for efficiency
if(numberOfCups){
    calculateChaiIngredients(numberOfCups);
}else{
    console.log("Please enter a valid number.");
}

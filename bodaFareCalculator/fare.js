const customerInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
//Prompts the user to enter the distance they would like to be transported
const distanceInKm = Math.abs(Number(customerInput));
//Ensure the input presented is a number and, is always positive

function calculateBodaFare(distanceInKm){
    //declaring all necessary variables
    const chargePerKm = 15;
    const baseFare = 50;
    const distanceFare = distanceInKm * chargePerKm;
    const totalFare = baseFare + (distanceInKm * chargePerKm);
    //output will be as calculated and instructed below
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES 50`);
    console.log(`Mpaka Uko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare} `);
    console.log(`Panda Pikipiki!`);
}

//Using an if-else statement for efficiency
if (distanceInKm){
    calculateBodaFare(distanceInKm);
}else{
    console.log("Please enter a valid distance");
}

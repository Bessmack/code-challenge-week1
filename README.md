# code-challenge-week1
code challenge: Solving challenges using javascript

## Challenge 1: Chai Bora Ingredient Calculator ☕

This is a simple calculator to determine the basic ingredients needed to make a specific number of cups of Kenyan chai.

This calculator:

1. Prompts the user to enter the number of chai cups they want to make (e.g., using prompt()). Remember to convert the input to a number.
2. Takes the numberOfCups (as a number) as an argument.
3. Calculates the required amount for each ingredient (water, milk, tea leaves, sugar) based on the numberOfCups.
4. Prints the results to the console in a clear, readable format.

### Example Interaction (for an input of 3 cups):
-User enters: 3
-Console Output:

To make 3 cups of Kenyan Chai, you will need:
Water: 600 ml
Milk: 150 ml
Tea Leaves (Majani): 3 tablespoons
Sugar (Sukari): 6 teaspoons

Enjoy your Chai Bora!


## Challenge 2: Boda Boda Ride Fare Estimator 🛵

This challenge is to create a simple program to estimate the fare for a boda boda ride that :

1. Prompts the user to enter the distance of their trip in kilometers. Convert this input to a number.
2. Takes the distanceInKm (as a number) as an argument.
3. Calculates the total estimated fare using the formula: totalFare = baseFare + (distanceInKm * chargePerKm)
4. Prints the result to the console in a user-friendly format.

### Example Interaction (for a trip of 5 km):
-User is prompted: Unafika wapi Mkubwa? Kilometer ngapi?:
-User enters: 5
-Console Output:

Uko kwote? Io ni 5 km:
Ukikalia Pikipiki: KES 50
Mpaka Uko: KES 75
Total: KES 125

Panda Pikipiki!


## Challenge 3: Simplified Mobile Money Transaction Fee Estimator 📱

### 📘 Description
This is a simple transaction fee calculator that:

1. Prompts the user to enter the amount of money they wish to send. Convert this input to a number.
2. Takes the amountToSend (as a number) as an argument.
3. Calculates the transaction fee based on the 1.5% rule, ensuring it adheres to the minimum (KES 10) and maximum (KES 70) fee limits.
4. Displays:
   - The original amount
   - The calculated (or capped) transaction fee
   - The total amount that will be debited from the sender

---

### 📋 Example
 Console Output:

Sending KES 500:
Calculated Transaction Fee: KES 10
Total amount to be debited: KES 510

Send Money Securely!

### ⚙️ Project Setup

1. Clone the Repository

```bash
git clone https://github.com/Bessmack/code-challenge-week1
cd code-challenge-week1

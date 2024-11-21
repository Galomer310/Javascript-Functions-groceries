let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(item => {
        console.log(item);
    });    
}

const cloneGroceries = () => {
    let user = client;
    client = 'Betty';

    let shopping = groceries;
    shopping.totalPrice = "35$"
    shopping.paid = false;

    console.log(shopping);
}

cloneGroceries();
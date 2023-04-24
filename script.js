function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven(
    "deep dish",
    "traditional",
    ["mozzarella"],
    ["pepperoni", "sausage"]
);
console.log(pizza1);
var pizza2 = pizzaOven(
    "hand tossed",
    "marinara",
    ["mozzarella", "feta"],
    ["mushrooms", "olives", "onions"]
);
console.log(pizza2);
var pizza3 = pizzaOven(
    "hand tossed",
    "marinara",
    ["mozzarella"],
    ["pepperoni", "sausage", "onions", "mushrooms"]
);
console.log(pizza3);
var pizza4 = pizzaOven(
    "hand tossed",
    "marinara",
    ["mozzarella", "feta"],
    ["pepperoni", "sausage", "onions", "mushrooms"]
);
console.log(pizza4);

function randomPizza() {
    var crustTypes = ["deep dish", "traditional"];
    var sauceTypes = ["marinara", "alfredo"];
    var cheeseTypes = ["mozzarella", "cheddar", "parmesan"];
    var toppingTypes = [
        "pepperoni",
        "sausage",
        "mushrooms",
        "onions",
        "peppers",
    ];

    var pizza = {};
    pizza.crustType = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    pizza.sauceType = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    pizza.cheeses = [
        cheeseTypes[Math.floor(Math.random() * cheeseTypes.length)],
    ];
    pizza.toppings = [
        toppingTypes[Math.floor(Math.random() * toppingTypes.length)],
        toppingTypes[Math.floor(Math.random() * toppingTypes.length)],
    ];
    return pizza;
}

console.log(randomPizza());

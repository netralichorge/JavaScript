function add(...a)
{
    let sum=0;
    for(let i of a)
    {
        sum = sum + i
    }
    return sum;
}

console.log(add(1,2,3,7,9,7))

console.log("======================================")

const products=
[
    {
        id:1,
        name:"laptop",
        price:999.99,
        category:"Electronics",
        inStock:true

    },

    {
        id:2,
        name:"Smartphone",
        price:499.99,
        category:"Electronics",
        inStock:false
    },

    {
        id:3,
        name:"Headphones",
        price:79.99,
        category:"Accessories",
        inStock:true
    }
    
];

for(let key in products[0])
{
    console.log(key,products[0][key])
}

for(let key in products[1])
{
    console.log(key,products[1][key])
}

for(let key in products[2])
    {
        console.log(key,products[2][key])
    }
    
console.log("==============================================================")


for (let product of products)
{
    for (let key in product)
    {
        console.log(key,product[key])
    }

    console.log("=======================")
}


console.log("===============================================")

const cars = [
    {
        brand: "Tesla",
        model: "Model S",
        year: 2023,
        color: "Red",
        price: 79999
    },
    {
        brand: "Ford",
        model: "Mustang",
        year: 2021,
        color: "Blue",
        price: 55995
    },
    {
        brand: "BMW",
        model: "X5",
        year: 2022,
        color: "Black",
        price: 65900
    },
    {
        brand: "Audi",
        model: "A4",
        year: 2020,
        color: "White",
        price: 43990
    }
];


for (let car of cars)
{
    for (let key in car)
    {
        console.log(key,car[key])
    }

    console.log("========================")
}
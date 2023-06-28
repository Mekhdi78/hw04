let products = [
    {
        name: "yogurt",
        type: "milk",
        price: 8000
    },
    {
        name: "apple",
        type: "fruit",
        price: 10000
    },
    {
        name: "vodka",
        type: "alcohol",
        price: 74000
    },
    {
        name: "tvorog",
        type: "milk",
        price: 12000
    },
    {
        name: "smetana",
        type: "milk",
        price: 10000
    },
    {
        name: "banana",
        type: "fruit",
        price: 28000
    },
    {
        name: "juice",
        type: "fruit",
        price: 15000
    },
    {
        name: "konyak",
        type: "alcohol",
        price: 100000
    }
]


let categories = [
    {
        type: "milk",
        count: 0,
        arr: []
    },
    {
        type: "fruit",
        count: 0,
        arr: []
    },
    {
        type: "alcohol",
        count: 0,
        arr: []
    }
]
// create new key (total) and summorize all prices of this type product

let discount = +prompt('1 - 100%')

for (let item of categories) {
    item.total = 0
    item.saleTotal = 0
}

for (let product of products) {
    for (let category of categories) {
        if (product.type === category.type) {
            category.count++
            category.arr.push(product.name)
            category.total += product.price
            category.saleTotal = category.total - (discount * category.total / 100)
        }
    }
}

console.table(
    categories
);
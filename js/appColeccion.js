const products = new Collection([
    { name: 'Cocacola', price: 800 },
    { name: 'Playadito', price: 1800 },
    { name: 'Fideos', price: 500 }
]);

products.insert({ name: 'Sprite', price: 1200 });
console.log([...products.array]);

const cheapProducts = products.deleteByCriteria(x => x.price > 1000);
console.log(cheapProducts);

const expensiveProducts = products.findByCriteria(x => x.price > 1000);
console.log(expensiveProducts);

const coca = products.findOne(x => x.name == 'Cocacola');
console.log(coca);

const total = products.reduce((acc, el) => {
    return acc + el.price;
}, 0);
console.log(total);

const sortByName = products.sort((a, b) => {
    if (a.name > b.name) return 1;
    else if (a.name < b.name) return -1;
    else return 0;
});

console.log(sortByName);

const sortByPrice = products.sort((a, b) => {
    return a.price - b.price;
});

console.log(sortByPrice);
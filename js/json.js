const user = {
    id: 1,
    name: 'sudipta',
    address: 'malibagh',
}
const stringify = JSON.stringify(user);
// console.log(stringify);
// console.log(user)


const shop = {
    owner: 'Alia',
    address: {
        country: 'bangladesh',
        city: 'Dhaka',
        area: 'Dhanmondi',
        street: 'free school street',
    },
    product: ['laptop', 'phone', 'ac', 'freeze'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}

console.log(shop)

const shopJson = JSON.stringify(shop);
console.log(shopJson)

const shopObj = JSON.parse(shopJson);
console.log(shopObj);
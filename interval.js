console.log(1)
console.log(2)

setTimeout(() => {
    console.log(3)
}, 4000)

console.log(4)
console.log(5)


let num = 0;
const clockId = setInterval(() => {
    num++;
    if (num > 6) {

        clearInterval(clockId);
    }
    console.log(clockId, num);
    console.log('i m u 6')
}, 2000)

console.log(7)
console.log(1);

console.log(2);
console.log(3);
console.log(4);


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));



setTimeout(()=>{
    doSomthing();
},4000);

setTimeout(()=>{
    console.log('HOLA')
},5000)
console.log(6);
console.log(7);
console.log(8);


function doSomthing() {
    console.log(5);
}

function a() {
    console.log('a');
    b();
    console.log('aaa')
}
function b() {
    console.log('b')
    d();
    console.log('bbb')
}

function d() {
    console.log('d')
    console.log('ddd')
}

function x() {
    console.log('x');
    y();
    console.log('xaa')
}
function y() {
    console.log('y')
    z();
    console.log('ybb')
}

function z() {
    console.log('z')
    console.log('zdd')
}

setTimeout(() => {
    console.log('inside timeOut');
}, 4000)


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

a();
x();
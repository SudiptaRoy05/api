function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

async function loadUserAsync() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log(data);
}

const arrowAsync = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log(data);
}

const tryCatch = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    }
    catch (error) {

    }

}
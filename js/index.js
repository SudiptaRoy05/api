function usersLoding() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function displayUsers(users) {
    const ul = document.getElementById('userList');
    for (const user of users) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}


// ul.innerHTML += `
// <li>${user.name}</li>
// `
function post() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(posts){

    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML =`
        <h4>Id:${post.userId}</h4>
        <h4>Title:${post.title}</h4>
        <p>Post Description : ${post.body}</p>
        
        `;
        postContainer.appendChild(div);
    }
}


post();



// function post() {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//         .then(res => res.json())
//         .then(data => displayPost(data))
// }

// function displayPost(posts){

//     const postContainer = document.getElementById('post-container');
//     for (const post of posts) {
//         const div = document.createElement('div');
//         div.classList.add('post')
//         div.innerHTML =`
//         <h4>Id:${post.id}</h4>
//         <h4>Title:${post.title}</h4>
//         <img src="${post.url}" alt="">
//         <p>Post Description : ${post.body}</p>
        
//         `;
//         postContainer.appendChild(div);
//     }
// }


// post();
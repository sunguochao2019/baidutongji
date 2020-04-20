const fetch = require("fq-fetch")

//console.log(fetch)

//get
// fetch.get('https://jsonplaceholder.typicode.com/posts/1/comments').then(users => {
//     console.log(users)
// })

//post
// fetch.post('https://jsonplaceholder.typicode.com/posts/1/comments',
//     {
//         "postId": 12,
//         "id": 2,
//         "name": "id labore ex et quam laborum",
//         "email": "Eliseo@gardner.biz",
//         "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//     }
// ).then(users => {
//     console.log(users);
// })

//添加 json

// fetch.put('https://jsonplaceholder.typicode.com/posts/1',
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     }
// ).then(users => {
//     console.log(users);
// })

//delete
fetch.deltet('https://jsonplaceholder.typicode.com/posts/1').then(res => {
    console.log(res)
})
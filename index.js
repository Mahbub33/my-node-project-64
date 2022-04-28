const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // that means if there is any port in process.env then use that or use 5000
const cors =require('cors')

app.use(cors())
app.use(express.json())

const users = [
    {id:1, name: 'Sabana', email:'sabana@gmail.com', phone:'01788888888'},
    {id:2, name: 'Sahbnoor', email:'Sahbnoor@gmail.com', phone:'01788888888'},
    {id:3, name: 'Suchorita', email:'Suchorita@gmail.com', phone:'01788888888'},
    {id:4, name: 'suchonda', email:'suchonda@gmail.com', phone:'01788888888'},
    {id:5, name: 'srabonti', email:'srabonti@gmail.com', phone:'01788888888'},
    {id:6, name: 'sabila', email:'sabila@gmail.com', phone:'01788888888'},
    {id:7, name: 'sohana', email:'sohana@gmail.com', phone:'01788888888'}
]

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

app.get('/users', (req, res) => {
    //filter by search query parameter
    if(req.query.name) {    
        const search =req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else {

    }
    res.send(users) //(before) console.log('query', req.query)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id); // this req actually coming from client, that means this way we can send request id to the server to retrieve the id data
    const user = users.find(u => u.id === id)
    res.send(user)
})

app.post('/user', (req, res) => {
    // console.log(req.body)    // we will try to receive the data
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})





app.get('/fruits', (req, res) => {
    res.send(['mango','apple', 'orange'])
})

app.listen(port, () => {
     console.log('Listening to port', port);
})

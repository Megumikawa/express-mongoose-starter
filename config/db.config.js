const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/todos', { useNewUrlParser: true,
useUnifiedTopology: true,})
    .then((self) => {
        console.log('Yayyy Database is connected');
    })
    .catch(() => {
        console.log('Something went wrong with db connection!');
    })


    
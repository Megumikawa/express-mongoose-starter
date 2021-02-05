const mongoose = require('mongoose')

//first check if our db is connectied
require('../config/db.config.js')

//const { Mongoose } = require('mongoose')
//require the model

let TodoModel = require('../models/Todo.model.js')

//insert into the model
//inserting many document
TodoModel.insertMany([
  {name: 'Groceries', description: 'Get groceries for today'},
  {name: 'Module2', description: 'Teach Express, Handlerbars'}
])

  .then(() => {
    console.log('Data seeded')
    //always close the connection after seeding
    //please make sure your require mongoose at top of the file
    mongoose.connection.close()
  })
  .catch(() => {
    console.log('Data seeding went wrong!')
  })


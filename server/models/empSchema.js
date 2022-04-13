const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

var empSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    position:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    }
})

var Employees = Mongoose.model('employee', empSchema)

module.exports = Employees
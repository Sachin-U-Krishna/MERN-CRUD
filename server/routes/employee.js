var express = require('express');
var empRouter = express.Router();
const Employees = require('../models/empSchema')
const bodyParser = require('body-parser')

empRouter.use(bodyParser.json());


empRouter.route('/')
    .get((req, res, next) => {
        Employees.find({})
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        })
        .catch((err) => next(err))
    })
    .post((req,res,next) => {
        Employees.create(req.body)
        .then((resp)=>{
            console.log('Employee created', resp)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        })
        .catch((err) => next(err))
    })

module.exports = empRouter;

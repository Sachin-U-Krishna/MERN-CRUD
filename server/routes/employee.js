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
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /employee');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('Forbidden action on /employee');
    })

empRouter.route('/:id')
    .get((req,res,next) => {
        Employees.findById(req.params.id)
        .then((emp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(emp);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /employee/'+ req.params.id);
    })
    .put((req, res, next) => {
        Employees.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        .then((emp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(emp);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        Employees.findByIdAndRemove(req.params.id)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });


module.exports = empRouter;

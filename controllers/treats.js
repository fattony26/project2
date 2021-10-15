import mongoose from 'mongoose'
import { Treat } from './../models/treat.js';

function newTreat(req, res) {
    res.render('treats/new')
}
function create(req, res) {
    Treat.create(req.body, function(error, treat){
        res.redirect('/treats')
    })
}
function index(req, res) {
    Treat.find({}, function(error, treats){
        res.render('treats/index', {
            treats
        })
    })
}

export{
    newTreat as new,
    create,
    index
}
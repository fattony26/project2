import mongoose from 'mongoose'
import { Treat } from '../models/treat.js';

function index(req, res) {
    Treat.find({}, function(error, treats){
        res.render('treats/index', {
            treats
        })
    })
}

function newTreat(req, res) {
    res.render('treats/new')
}

function create(req, res) {
    Treat.create(req.body, function(error, treat) {
        console.log(req.body)
        res.redirect('/treats')
    })
}

function deleteTreat(req, res) {
    Treat.findByIdAndDelete(req.params.id, function(err, treat) {
      res.redirect('/treats')
    })
}

function edit(req, res) {
    Treat.findById(req.params.id, function(err, treat) {
      res.render('treats/edit', {
        treat,
        err,
        title: "Edit Treat"
      })
    })
}

export {
    index,
    newTreat as new,
    create,
    deleteTreat as delete,
    edit
}
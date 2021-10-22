import mongoose from 'mongoose'
import { Treat } from '../models/treat.js';

function index(req, res) {
    Treat.find({}, function(error, treats){
        res.render('treats/index', {
            treats,
            user: req.user
        })
    })
}

function newTreat(req, res) {
    res.render('treats/new', {
        user: req.user
    })
}

function create(req, res) {
    Treat.create(req.body, function(error, treat) {
        res.redirect('/treats', {
            user: req.user
        })
    })
}

function deleteTreat(req, res) {
    Treat.findByIdAndDelete(req.params.id, function(err, treat) {
      res.redirect('/treats', {
        user: req.user
      })
    })
}

function edit(req, res) {
    Treat.findById(req.params.id, function(err, treat) {
      res.render('treats/edit', {
       treat,
       user: req.user
      })
    })
}

function update(req, res) {
    Treat.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(result => {
            res.redirect('/treats', {
                user: req.user
            });
        })
    .catch(error => console.log(error))
}

export {
    index,
    newTreat as new,
    create,
    deleteTreat as delete,
    edit,
    update
}
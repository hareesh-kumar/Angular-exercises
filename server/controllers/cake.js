const db = require('../models/cake');

var Cake = db.model

module.exports = {
    findAll: findAll,
    findOne: findOne,
    addnew: addnew,
    findUpdate: findUpdate,
    findDelete: findDelete,
    addComment: addComment
}

function findAll(req, res) {
    Cake.find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}
function findOne(req, res) {
    Cake.findById(req.params.cakeid)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}
function addnew(req, res) {
    Cake.create(req.body)
        .then((data) => res.json({ message: 'success', data: data }))
        .catch((err) => res.json(err));
}
function findUpdate(req, res) {
    Cake.findByIdAndUpdate(req.params.cakeid, req.body, { new: true, runValidators: true })
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}
function addComment(req, res) {
    Cake.findByIdAndUpdate(req.params.cakeid, { $push: {comments : req.body} }, { new: true, runValidators: true })
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}
function findDelete(req, res) {
    Cake.findByIdAndRemove(req.params.cakeid)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}
const db = require('../models/product');

var Product = db.model

module.exports = {
    findAll: findAll,
    findOne: findOne,
    addnew: addnew,
    findUpdate: findUpdate,
    findDelete: findDelete,
    addComment: addComment
}

function findAll(req, res) {
    Product.find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}
function findOne(req, res) {
    Product.findById(req.params.productid)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}
function addnew(req, res) {
    Product.create(req.body)
        .then((data) => res.json({ message: 'success', data: data }))
        .catch((err) => res.json(err));
}
function findUpdate(req, res) {
    Product.findByIdAndUpdate(req.params.productid, req.body, { new: true, runValidators: true })
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}
function addComment(req, res) {
    Product.findByIdAndUpdate(req.params.productid, { $push: {comments : req.body} }, { new: true, runValidators: true })
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}
function findDelete(req, res) {
    Product.findByIdAndRemove(req.params.productid)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}
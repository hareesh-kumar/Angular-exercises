const db = require('../models/quote');

var Author = db.model

module.exports = {
    findAll: findAll,
    findOne: findOne,
    addnew: addnew,
    findUpdate: findUpdate,
    findDelete: findDelete,
    addQuote: addQuote,
    findAllQuotes: findAllQuotes,
    findOneQuote: findOneQuote,
    findDeleteQuote: findDeleteQuote,
    findUpdateQuote: findUpdateQuote
}

function findAll(req, res) {
    Author.find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}
function findOne(req, res) {
    Author.findById(req.params.authorid)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}
function findAllQuotes(req, res) {
    Author.findById(req.params.authorid)
        .then((data) => res.json(data['quotes']))
        .catch((err) => res.json(err));
}
function findOneQuote(req, res) {
    Author.findById(req.params.authorid )
        .then((data) => res.json(data.quotes.id(req.params.quoteid)))
        .catch((err) => res.json(err));
}
function addnew(req, res) {
    Author.create(req.body)
        .then((data) => res.json({ message: 'success', data: data }))
        .catch((err) => res.json(err));
}
function findUpdate(req, res) {
    console.log(req.params.authorid)
    Author.findOneAndUpdate({"_id": req.params.authorid}, req.body, { runValidators: true , context: "query" })
        .then((data) => { console.log(data); res.json(data);})
        .catch((err) => res.json(err));
}
function findUpdateQuote(req, res) {
    Author.findOneAndUpdate({"_id" : req.params.authorid, "quotes._id": req.params.quoteid},{ "$inc" : { "quotes.$.votes" : req.body.vote }})
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}
function addQuote(req, res) {
    Author.findByIdAndUpdate(req.params.authorid, { $push: {quotes : req.body} }, { new: true, runValidators: true })
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}
function findDelete(req, res) {
    Author.findByIdAndRemove(req.params.authorid)
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}
function findDeleteQuote(req, res) {
    Author.findOneAndUpdate({ "_id": req.params.authorid}, { "$pull": { quotes : { "_id": req.params.quoteid } } })
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}
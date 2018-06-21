const db = require('mongoose');

db.connect('mongodb://localhost/my_first_db');

var CommentSchema = new db.Schema({
    comment: { type: String, required: true, minlength: [10, 'Comment should be atleast 10 characters'] },
    rating: { type: Number, required: true, min: [0, 'Rating can be only between 0 and 5stars'] , max: [5, 'Rating can be only between 0 and 5stars']}
}, { timestamps: true});

var CakeSchema = new db.Schema({
    baker: { type: String, required: true, minlength: [3, 'Baker name should be atleast 3 characters'] },
    imageurl: { type: String, required: true, minlength: [8, 'Image URL should be atleast 8 characters'] },
    avgrating: { type: Number},
    comments: [CommentSchema]
}, { timestamps: true });

db.model('Cake', CakeSchema);

module.exports = {
    model: db.model('Cake')
}
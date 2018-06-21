const db = require('mongoose');

db.connect('mongodb://localhost/my_first_db');

var CommentSchema = new db.Schema({
    comment: { type: String, required: true, minlength: [10, 'Comment should be atleast 10 characters'] },
    rating: { type: Number, required: true, min: [0, 'Rating can be only between 0 and 5stars'] , max: [5, 'Rating can be only between 0 and 5stars']}
}, { timestamps: true});

var ProductSchema = new db.Schema({
    title: { type: String, required: true, minlength: [4, 'Title should be atleast 4 characters'] },
    price: { type: Number, required: [true, 'Price is required'] },
    imageurl: { type: String },
    comments: [CommentSchema]
}, { timestamps: true });

db.model('Product', ProductSchema);

module.exports = {
    model: db.model('Product')
}
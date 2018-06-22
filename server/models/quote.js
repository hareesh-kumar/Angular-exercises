const db = require('mongoose');

db.connect('mongodb://localhost/my_first_db');

var QuoteSchema = new db.Schema({
    quote: { type: String, required: true, minlength: [5, 'Quote should be atleast 5 characters'] },
    votes: { type: Number }
}, { timestamps: true});

var AuthorSchema = new db.Schema({
    name: { type: String, required: [true,'Name is required'], minlength: [4, 'Name should be atleast 4 characters'] },
    email: { type: String, required: [true, 'Email is required'] },
    quotes: [QuoteSchema]
}, { timestamps: true });

AuthorSchema.path('email').validate({
    isAsync: true,
    validator: function (value, respond) {
        console.log(this._conditions._id);
/*         if(this.op == "update"){
            console.log('1');
            return true;
        } */
        db.model('Author').findOne({email : value }, function (err, author ) {
            if (author) {
                respond(false , value +' already exists');
            } else {
                respond(true);
            }
        });
    },
    message: 'This email address already exists'
});

AuthorSchema.path('email').validate({
    validator: function (value) {
        return /\S+@\S+\.\S+/.test(value);
    },
    message: '{VALUE} is not a valid email'
});

db.model('Author', AuthorSchema);

module.exports = {
    model: db.model('Author')
}
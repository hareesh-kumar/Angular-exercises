const Handler = require('../controllers/product');

module.exports = {
    Routify: function (app) {
        app.get('/prods', (req, res) => Handler.findAll(req, res));
        app.get('/prods/:productid', (req, res) => Handler.findOne(req, res));
        app.post('/prods', (req, res) => Handler.addnew(req, res));
        app.post('/prods/comment/:productid', (req, res) => Handler.addComment(req, res));
        app.put('/prods/:productid', (req, res) => Handler.findUpdate(req, res));
        app.delete('/prods/:productid', (req, res) => Handler.findDelete(req, res));
        app.all('*', (req, res) => res.sendFile((__dirname).slice(0, -14) + '/exercises/dist/exercises/index.html'))
        return app
    }
}
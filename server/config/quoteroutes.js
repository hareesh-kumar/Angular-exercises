const Handler = require('../controllers/quote');

module.exports = {
    Routify: function (app) {
        app.get('/api/authors', (req, res) => Handler.findAll(req, res));
        app.get('/api/authors/:authorid', (req, res) => Handler.findOne(req, res));
        app.get('/api/authors/:authorid/quotes', (req, res) => Handler.findAllQuotes(req, res));
        app.get('/api/authors/:authorid/quotes/:quoteid', (req, res) => Handler.findOneQuote(req, res));
        app.post('/api/authors', (req, res) => Handler.addnew(req, res));
        app.post('/api/authors/:authorid/quotes', (req, res) => Handler.addQuote(req, res));
        app.put('/api/authors/:authorid', (req, res) => Handler.findUpdate(req, res));
        app.put('/api/authors/:authorid/quotes/:quoteid', (req, res) => Handler.findUpdateQuote(req, res));
        app.delete('/api/authors/:authorid', (req, res) => Handler.findDelete(req, res));
        app.delete('/api/authors/:authorid/quotes/:quoteid', (req, res) => Handler.findDeleteQuote(req, res));
        app.all('*', (req, res) => res.sendFile((__dirname).slice(0, -14) + '/exercises/dist/exercises/index.html'))
        return app
    }
}
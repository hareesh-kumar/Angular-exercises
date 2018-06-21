const Handler = require('../controllers/cake');

module.exports = {
    Routify: function (app) {
        app.get('/cakes', (req, res) => Handler.findAll(req, res));
        app.get('/cakes/:cakeid', (req, res) => Handler.findOne(req, res));
        app.post('/cakes', (req, res) => Handler.addnew(req, res));
        app.post('/cakes/comment/:cakeid', (req, res) => Handler.addComment(req, res));
        app.put('/cakes/:cakeid', (req, res) => Handler.findUpdate(req, res));
        app.delete('/cakes/:cakeid', (req, res) => Handler.findDelete(req, res));
        app.all('*', (req, res) => res.sendFile((__dirname).slice(0, -14) + '/exercises/dist/exercises/index.html'))
        return app
    }
}
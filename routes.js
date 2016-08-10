'use strict'
var express = require('express');
var routes = express.Router();
var blog = require('./database.js').blog;

routes.get('/', function(req, res) {
    console.log('get request received');
    blog.find({}, function(err, data) {
        if (err) console.error('error occured')
        if (!data.length) console.log("Nothing was found")
        else {
            res.json(data)
        }
    });



});

routes.post('/', function(req, res) {
    console.log(req.body)
    var blogName = req.body
    blog.create(blogName, function(err, data) {
        if (err) console.err(err.message);
        res.json({
            created: 'succesfully',
            data: data
        });

    });
});

routes.delete("/:id", function(req, res) {
    console.log("delete request has been received!");
    var id_delete = req.params.id;
    blog.remove({
        _id: id_delete
    }, function(err) {
        if (err) res.json({
            error: err.message
        });
    });
    res.json()
});




module.exports = routes;

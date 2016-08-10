'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;


//Schema for the blog post
var blogSchema = new Schema({
    title: String,
    body: String
});




//Creating model
var blog = mongoose.model("Blog", blogSchema);



module.exports.blog = blog;

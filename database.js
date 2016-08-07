'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;


//Schema for the blog post
var blogSchema = new Schema({
    title: String,
    body: String
});


//Mock data for our database
var randomBlog = {
    title: "New blog",
    body: "Bacon ipsum dolor amet jerky ham hock capicola turkey cupim bresaola t-bone short ribs biltong rump salami pork belly pork chop. Picanha kevin pig cow sausage shank fatback meatloaf brisket flank short loin boudin andouille. Ground round porchetta andouille kevin. T-bone turducken meatball rump. Kielbasa frankfurter jowl swine, doner ground round ball tip sausage tenderloin bresaola pork capicola chicken meatloaf.\
Short ribs jowl turducken boudin ground round pancetta, drumstick bacon filet mignon spare ribs alcatra turkey. Sausage meatball hamburger bacon boudin sirloin turkey. Bresaola hamburger t-bone pork pancetta tenderloin cupim capicola pork chop sausage bacon pork belly picanha. Corned beef flank beef, turducken short loin jerky fatback chicken picanha shankle brisket kielbasa sirloin frankfurter.\
Ground round bresaola boudin fatback drumstick ham hamburger beef ribs. Brisket meatball pork belly jowl chuck strip steak turkey pork loin. Ball tip andouille cupim hamburger, ground round shank drumstick pork leberkas bresaola ribeye spare ribs bacon chuck. Pancetta pork belly cupim meatball jowl, venison frankfurter brisket fatback pork loin turkey corned beef.\
Landjaeger cupim shankle, prosciutto andouille meatball frankfurter biltong pork loin pastrami. Chuck pig sirloin andouille biltong pancetta. Biltong bresaola alcatra ham pork chop tenderloin t-bone beef bacon filet mignon. Kevin andouille ground round drumstick, filet mignon porchetta pork chop salami swine chuck landjaeger leberkas. Landjaeger flank filet mignon pork, ground round pastrami ribeye frankfurter beef ribs chicken pork loin ham capicola. Bacon filet mignon short ribs pork loin tail capicola meatball.\
Shank salami pig, capicola alcatra bacon rump chicken pastrami ham boudin ball tip meatloaf cow. Salami spare ribs rump meatball shoulder alcatra porchetta, leberkas sausage bacon jerky swine. Venison pork belly ground round hamburger drumstick t-bone. Andouille hamburger bresaola doner beef drumstick pork loin salami shoulder t-bone brisket tail cow jerky. Prosciutto turducken shank alcatra. Strip steak spare ribs biltong pork loin.\
Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!"

};

//Creating model
var blog = mongoose.model("Blog", blogSchema);
//create, display, remove documents from the collection
// blog.create(randomBlog, function(err, data){
//   if(err) console.error(err.message);
//   else{
//     console.log("Succesful!");
//     blog.find({title:"Ne blog"},function(err, data){
//       if(err){console.log("???")}
//       if (!data.length){console.log("Nothing was found")}
//       data.forEach(function(data){
//         console.log(data.body)
//       })
//       blog.remove(function(){
//         console.log('removed');
//       })
//     })
//
// }
// })
//






module.exports.blog = blog;

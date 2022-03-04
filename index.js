const express = require('express');
const app = express();

const port = '4000';
const allBooks = function(req,res,next){
    console.log('Fetching all books');
    next();
}
app.get('/books',allBooks,(req,res) => {
    res.send('/books');
});

const singleBook = function(req,res,next){
    req.name = req.params.name;
    next();
}
app.get('/book/:name',singleBook,(req,res) => {
    res.json({bookName: req.name});
})

app.listen(port,() => { console.log(`listening on ${port}`)})


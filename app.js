const express = require('express');
const path = require('path');
const request = require('request');

const port = 2222;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/results', (req, res)=>{
    
    let query = req.query.search;

    request('https://api.themoviedb.org/3/search/movie?api_key=4522208f3671172e960d09695d85924d&query='+query, (error, response, body)=>{
        if(error){

        }

        let data = JSON.parse(body);
        res.render('results', {data: data, searchQuery: query});
    });

    
});

app.get('/search', (req, res)=>{
    res.render('search');
});

app.listen(port, ()=>{
    console.log(`Server has started on port ${port}`);
});
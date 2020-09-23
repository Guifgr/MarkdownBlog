const express = require ('express');
const mongoose = require ('mongoose');
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost/blog',{ useNewUrlParser:true, useUnifiedTopology: true  })

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) =>{ 
    const articles = [{
        title: 'Title',
        createdAt: new Date(),
        description: 'Article description'
    },
    {
        title: 'Title2',
        createdAt: new Date(),
        description: 'Article description2'
    }]
    res.render('articles/index', {articles: articles})
})

app.listen(5000)
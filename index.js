const express = require('express')
const bodyParser = require("body-parser");
const Sequelize = require('sequelize')
const { Post } = require('./models')
const path = require('path')
const PORT = process.env.PORT || 5000
const es6Renderer = require('express-es6-template-engine');


express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json())
  .use(express.json())
  .use(express.urlencoded())
  .set('views', path.join(__dirname, 'views'))
  .engine('html', es6Renderer)
  .set('views', 'views')
  .set('view engine', 'html')
  //read
  .get('/', (req, res) => {
    res.render('pages/index', {
      locals: {
        title: "Hire Me Please"
      },
      partials: {
        head: "/partials/head"
      }
    })
  })
  .get('/posts', async (req,res) => {
    const post = await Post.findAll();
    res.send(post);
  })
  .post('/', async (req, res) =>{
    const newEntry = await Post.create(req.body);
    res.render('pages/index', {
      locals: {
        title: "Hire Me Please"
      },
      partials: {
        head: "/partials/head"
      }
    })
    // res.send(x)

  
  
  })
  //create

  //delete


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


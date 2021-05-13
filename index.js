const express = require('express')
const bodyParser = require("body-parser");
const Sequelize = require('sequelize')
const { Post } = require('./models')
const path = require('path')
const PORT = process.env.PORT || 5000
const es6Renderer = require('express-es6-template-engine');
const { get } = require('http');


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
        head: "/partials/head",
        header: "/partials/header"
      }
    })
  })

  .get('/posts/all', async (req,res) => {
    const path = req.path
    const posts = await Post.findAll();
    res.render('pages/search', {
      locals: {
        title: "Posts",
        posts,
        path

      },
      partials: {
        head: "/partials/head",
        header: "/partials/header"
      }
    })
  })

  .get('/posts/search', async (req, res) => {
    const searchQuery = req.query.bio
    if (searchQuery) {
      const posts = await Post.findAll({
        where: {
          bio: {
            [Sequelize.Op.iLike]: `%${searchQuery}%`
          }
        }
      });
      res.render('pages/search', {
        locals: {
          title: "Posts",
          posts
  
        },
        partials: {
          head: "/partials/head",
          header: "/partials/header"
        }
      })
    } else {
      res.send('404')
    }
    
  })

  .get('/posts/create', (req, res) => {
    res.render('pages/newPost', {
      locals: {
        title: "Make a Post"
      },
      partials: {
        head: "/partials/head",
        header: "/partials/header"
      }
    })
  })

  .get('/posts/:id', async (req, res) => {
    const userID = req.params.id;
    const profile = await Post.findAll({
      where: {
        id: userID
      }
    });
    res.render('pages/profile', {
      locals:{
        title: `${profile[0].name}'s Page`,
        post: profile[0]
      },
      partials:{
        head: "partials/head",
        header: "/partials/header"
      }
    })
  })
  .get('/posts/:id/delete', async (req, res) => {
    const userID = req.params.id;
    const profile = await Post.destroy({
      where: {
        id: userID
      }
    });
    res.redirect('/posts/all');
  })

  .post('/posts/create', async (req, res) =>{
    const newEntry = await Post.create(req.body);
    res.redirect('/')
    // res.send(x)

  
  
  })
  //create

  //delete


  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


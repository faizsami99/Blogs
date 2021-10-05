
const express = require('express');;
const Blog = require('../model/model');


const router = express.Router();

router.get('/', (req, res) => {

    Blog.find({}).then((user) => {
        res.render('publicDashboard', {
            user
        });
        console.log('hello');
    }).catch((data) => {
        console.log(data);
        res.send('Hello i am user dash board');
    });
});



router.get('/:id', (req, res) => {
    const id = req.params.id;
    Blog.find({_id:id}).then((user)=>{;
        res.render('blog', {
            user
        });
    })
})

module.exports = router;

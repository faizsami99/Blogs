
const md5 = require("md5");
const multer = require('multer');
const Blog = require('../model/model');


exports.loginPage = (req, res) => {
    res.render('loginpanel')
}

exports.login = (req, res) => {
    const data = req.body;
    console.log(data);
    console.log(md5(data.password));
    if(data.email === process.env.EMAIL && process.env.PASSWORD === md5(data.password)){
        req.session.email = data.email;
        res.send(req.body);
    }
    else{
        res.redirect("/panel");
    }
}

exports.adminDash = (req, res) => {
    if(req.session.email){
        res.render('adminDashBoard');
    }
    else{
        res.redirect('/panel');
    }
}

exports.add = (req, res) => {
    if(req.session.email){
        res.render('add');
    }
    else{
        res.redirect('/panel');
    }
}

exports.addNew = (req, res) => {
    // image upload

    if(req.session.email){
        let image = Date.now() + "";
        const name = req.body.name;
        const title = req.body.title;
        const category = req.body.category;
        const blog = req.body.blog;



        const storage = multer.diskStorage({
        destination : (req, file, cab) => {
            cab(null, '../uploadImages/uploadedImages');
        },
        filename: (req, file, cab) => {
            cab(null, image + path.extname(file.originalname));
            image = image + path.extname(file.originalname);
        }
        });

        const upload = multer({storage: storage});
        upload.single('image');
        const data = {
            name,
            title,
            category,
            image,
            blog
        }

        console.log(data);

        const obj = new Blog(data);

        res.send(obj);

        obj.save().then((user) => {
            console.log("updated");
        }).catch((err) => {
            console.log("something went wrong " + err);
        });
    }
    else{
        res.redirect('/panel');
    }

}
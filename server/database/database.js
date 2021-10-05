
const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/blogs";

mongoose.connect(url, {useNewUrlParser:true})
    .then(() => console.log("mongoose connected"))
    .catch(err => {
        console.log("mongoose fails");
});

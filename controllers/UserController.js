const router = require('express').Router();
const User = require('../models/User');
const UserModel = require('../models/User');


router.get('/', (req, res) => {
    UserModel.find().then(async (data) => {
        users = data;
        return res.render('users/index',{
            users:users
        });
    })
});

router.get('/create', (req, res) => {
    return res.render('users/form')
});

router.post('/store', (req, res) => {
    let user = new UserModel({
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
    });

    user.save();
    res.redirect('/users');
})

router.get('/edit/:id', (req, res) => {
    let userId = req.params.id;
    UserModel.findOne({_id:userId}).then(data => {
        return res.render('users/_form',{
            user:data
        });
    })
});

router.post('/update/:id', (req, res) => {
    let userId = req.params.id;
    UserModel.updateOne({_id:userId},{$set:{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
    }}).then(result => {
        return res.redirect('/users');
    });
});

router.get('/delete/:id', (req, res) => {
    let userId = req.params.id;
    UserModel.deleteOne({_id:userId}).then(result => {
        res.redirect('/users');
    })
});

module.exports = router;
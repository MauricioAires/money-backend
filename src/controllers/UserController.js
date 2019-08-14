const User = require('../models/User');

class UserController{
    async store(req, res){
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,

        })

        return res.json(user);
    }

    async show(req,res){
        const user = await User.findById(req.params.id).populate({
            path: "despesas",
            options:{ sort: { createdAt : -1 } } 
        }).populate({
            path: "receitas",
            options:{ sort: { createdAt : -1 } } 
        });

        return res.json(user)
    }
}

module.exports = new UserController();
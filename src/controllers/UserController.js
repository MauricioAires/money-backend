const User = require('../models/User');

class UserController {
    async store(req, res) {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,

        })

        return res.json(user);
    }

    async login(req,res){
        const login = await User.find({email : req.params.email , password: req.params.password});
        
        return res.json(login);
    }

    async show(req, res) {
    
        const user = await User.findById(req.params.id).populate({
            path: "despesas",
        }).populate({
            path: "receitas",
        });

        return res.json(user)
    }

   
}

module.exports = new UserController();
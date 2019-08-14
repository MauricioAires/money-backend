const Receita = require('../models/Receita');
const User = require('../models/User');

class ReceitaController{
    async store(req, res){

        const users = await User.findById(req.params.id);

        const receita = await Receita.create({
            description: req.body.description,
            value: req.body.value,
        })

        users.receitas.push(receita);
    
        await users.save();

        return res.json(receita);
    }
}

module.exports = new ReceitaController();
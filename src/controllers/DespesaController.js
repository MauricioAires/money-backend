const Despesa = require('../models/Despesa');
const User = require('../models/User');
class DespesaController {

    async store(req, res) {

        const users = await User.findById(req.params.id);

        const despesa = await Despesa.create({
            description: req.body.description,
            value: req.body.value,
            status: false
        });

        users.despesas.push(despesa);
    
        await users.save();

        req.io.sockets.in(users._id).emit('despesas', despesa);

        return res.json(despesa)
    }
}

module.exports = new DespesaController();
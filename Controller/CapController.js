const Cap = require ("../models/Cap");

module.exports = {
    async store(req, res) {
        const { name, cpf } = req.body;
    
        const cap = await Cap.create({ name, cpf });
    
        return res.json(cap);
      },
      async index(req, res) {
        const cap = await Cap.findAll();
    
        return res.json(cap);
      },

    async put (req, res) {
        const {name, cpf} = req.body;
        await Cap.update (
            {name, cpf},
            {
                where: {
                    id: req.params.id,
                },
            },
        );
        return res.send("Capitão atualizado seu corno")
    },

    async delete (req, res) {
        await Cap.destroy (
            {
                where: {
                    id: req.params.id,
                },
            },
        );
        return res.send("Capitão eliminado seu corno")
    }

};
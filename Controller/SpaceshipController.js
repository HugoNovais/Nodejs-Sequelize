const Spaceship = require ("../models/Spaceship");

module.exports = {
    async store (req, res) {
        const { name, serial_number, capacity } = req.body;

        const spaceship = await Spaceship.create({ name, serial_number, capacity });
        return res.json(spaceship);
    },

    async index(req, res) {
        const spaceships = await Spaceship.findAll();

        return res.json(spaceships);
    },

    async put (req, res) {
        const {name, serial_number, capacity } = req.body;
        await Spaceship.update (
            {name, serial_number, capacity },
            {
                where: {
                    id: req.params.id,
                },
            },
        );
        return res.send("Nave atualizada seu corno")
    },

    async delete (req, res) {
        await Spaceship.destroy (
            {
                where: {
                    id: req.params.id,
                },
            },
        );
        return res.send("Nave eliminada seu corno")
    }

};
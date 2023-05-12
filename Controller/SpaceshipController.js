const Spaceship = require("../models/Spaceship");
const Cap = require("../models/Cap");

module.exports = {
  async store(req, res) {
    const { capId } = req.params;
    const { name, serial_number, capacity } = req.body;

    const cap = await Cap.findByPk(capId);

    if (!cap) {
      res.send("Error, this cap does not exist!");
    }

    const [spaceships] = await Spaceship.findOrCreate({
      where: { name, serial_number, capacity },
    });

    await caps.addSpaceship(spaceships);

    return res.json(spaceships);
  },
  async index(req, res) {
    const { capId } = req.params;

    const cap = await Cap.findByPk(capId, {
      include: { association: "spaceships" },
    });

    return res.json(cap);
  },
};
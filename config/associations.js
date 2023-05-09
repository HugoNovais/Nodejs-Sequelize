const Planet = require ("../models/Planet");
const Satellite = require ("../models/Satellite");

const Cap = require("../models/Cap");
const Spaceship = require("../models/Spaceship");
const CapSpace = require("../models/CapSpace");

Planet.hasMany(Satellite, {onDelete: "CASCADE", onUpdate: "CASCADE"});
Satellite.belongsTo(Planet, {foreingKey: "planetId", as: "planet"});


Cap.belongsToMany(Spaceship, {
        foreingKey: "capsId",
        through: "CapSpace",
        as: "spaceships",
});


Spaceship.belongsToMany(Cap, {
    foreingKey: "spaceshipsId",
    through: "CapSpace",
    as: "caps"
});

module.exports = {Planet, Satellite, Cap, Spaceship, CapSpace};
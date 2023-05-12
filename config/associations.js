const Planet = require ("../models/Planet");
const Satellite = require ("../models/Satellite");

const Cap = require("../models/Cap");
const Spaceship = require("../models/Spaceship");


Planet.hasMany(Satellite, {onDelete: "CASCADE", onUpdate: "CASCADE"});
Satellite.belongsTo(Planet, {foreingKey: "planetId", as: "planet"});


Cap.belongsToMany(Spaceship, {
        foreingKey: "capId",
        through: "capSpaceship",
        as: "spaceships",
});


Spaceship.belongsToMany(Cap, {
    foreingKey: "spaceshipId",
    through: "capSpaceship",
    as: "caps"
});

module.exports = {Planet, Satellite, Cap, Spaceship};
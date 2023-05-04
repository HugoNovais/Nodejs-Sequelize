(async () => {
    const Planet = require ('./models/Planet');
/*
    const newPlanet = await Planet.create({
        name: "Saturno",
        position: 6,
    });
*/

//const seePlanets = await Planet.findByPk(2);


/*const updatePlanets = await Planet.findByPk(2);
  updatePlanets.name = "Saturno";
  await updatePlanets.save();
*/

const deletePlanets = await Planet.findByPk(2);
  await deletePlanets.destroy();

    console.log(deletePlanets);
})();


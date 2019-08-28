exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "WAUCVAFD1BN083729",
          make: "Ford",
          model: "Torus",
          mileage: 157824,
          transmission: "auto"
        },
        {
          VIN: "1GBHC29U25E261379",
          make: "Dodge",
          model: "Challenger",
          mileage: 20414,
          transmission: "manual"
        },
        {
          VIN: "1HGCG1650WA018438",
          make: "Audi",
          model: "R8",
          mileage: 14523,
          transmission: "manual",
          title: "clean"
        }
      ]);
    });
};

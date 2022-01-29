const Location = require("./Location");
const Traveller = require("./Traveller");
const Trip = require("./Trip");

// Travellers have many Locations
Traveller.hasMany(Trip, {
    onDelete: 'CASCADE'
})

// Locations have many travellers through trips
Location.hasMany(Trip, {
    // as: 'product_tags',
    onDelete: 'CASCADE',
  });

Trip.belongsTo(Traveller, {
    foreignKey: "traveller_id",
})

Trip.belongsTo(Location, {
    foreignKey: 'location_id',
})

module.exports={
    Location,
    Traveller,
    Trip
};
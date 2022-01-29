const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}
Trip.init({
    trip_budget: {
        type: DataTypes.DECIMAL
    },
    traveller_amount: {
        type: DataTypes.INTEGER
    },
    traveller_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'traveller',
            key: 'id',
        },
    },
    location_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        references: {
            model: 'location',
            key: 'id',
        },
    }
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip',
});

module.exports=Trip
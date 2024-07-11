const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        logging: false,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }
)


const db = {}



db.Sequelize = Sequelize
db.sequelize = sequelize

db.Users = require('./UserModel.js')(sequelize, DataTypes)
db.Profile = require('./ProfileModel.js')(sequelize, DataTypes)


// One-To-One
db.Users.hasOne(db.Profile, {
    foreignKey: 'Users_id',
    as: 'profile'
});
db.Profile.belongsTo(db.Users, {
    foreignKey: 'Users_id',
    as: 'user'
});

module.exports = db
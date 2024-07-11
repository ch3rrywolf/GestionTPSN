module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
      matricule: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    }, {
        tableName: 'users'
    });

    Users.associate = (models) => {
      Users.hasOne(models.Profile, {
        foreignKey: 'Users_id',
        as: 'profile'
      });
    };
  
    return Users;
  };
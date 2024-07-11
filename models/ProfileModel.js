module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      datedenaissance: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      numerotelephone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      localisation: {
      type: DataTypes.STRING,
      allowNull: true,
      }
    }, {
        tableName: 'profiles'
    });
  
    Profile.associate = (models) => {
      Profile.belongsTo(models.Users, {
        foreignKey: 'Users_id',
        as: 'user'
      });
    };

    return Profile;
  };
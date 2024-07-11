module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      datedenaissance: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
      },
      numerotelephone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      localisation: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
      }
    }, {
        tableName: 'profiles'
    });
  
    return Profile;
  };
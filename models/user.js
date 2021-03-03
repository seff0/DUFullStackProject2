module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
      name: DataTypes.STRING,
      fav_locs: DataTypes.STRING, //use location ids separated by commas
      current_trip: DataTypes.STRING //use location ids separated by commas
    })
    return user;
};

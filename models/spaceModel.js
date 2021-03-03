module.exports = (sequelize, DataTypes) => {
    const destination = sequelize.define('Destination', {
      name: DataTypes.STRING,
      img_link: DataTypes.STRING,
      distance: DataTypes.DECIMAL,
      right_asc_h: DataTypes.INTEGER,
      right_asc_m: DataTypes.INTEGER,
      right_asc_s: DataTypes.DECIMAL,
      declination_d: DataTypes.INTEGER,
      declination_m: DataTypes.INTEGER,
      declination_s: DataTypes.DECIMAL,
      radius: DataTypes.BIGINT,
      description: DataTypes.TEXT
    })
    return destination;
};

module.exports = (sequelize, DataTypes) => {
    const destination = sequelize.define('Destination', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: DataTypes.STRING,
      img_link: DataTypes.STRING,
      distance: DataTypes.DOUBLE,
      right_asc_h: DataTypes.INTEGER,
      right_asc_m: DataTypes.INTEGER,
      right_asc_s: DataTypes.FLOAT,
      declination_d: DataTypes.INTEGER,
      declination_m: DataTypes.INTEGER,
      declination_s: DataTypes.FLOAT,
      radius: DataTypes.BIGINT,
      description: DataTypes.TEXT
    })
    return destination;
};

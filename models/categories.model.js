module.exports = (Sequelize, DataTypes) => {
  const Category = Sequelize.define('Category', {
    name: DataTypes.STRING,
  });
return Category;
};
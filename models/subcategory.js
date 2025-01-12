'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class SubCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SubCategory.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  }
  SubCategory.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: uuidv4,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    categoryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Categories', // Table name for Category model
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'SubCategory',
  });
  return SubCategory;
};
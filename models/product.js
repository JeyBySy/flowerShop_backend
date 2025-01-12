'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // A product belongs to a category
      Product.belongsTo(models.Category, { foreignKey: 'categoryId' });

      // A product may belong to a subcategory (optional)
      Product.belongsTo(models.SubCategory, { foreignKey: 'subCategoryId', allowNull: true });
    }
  }
  Product.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: uuidv4, // Automatically generate UUID for the primary key
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Categories', // Reference to the Categories table
        key: 'id', // The id column in the Category model
      },
      onDelete: 'CASCADE', // When a category is deleted, delete the related products
    },
    subCategoryId: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'SubCategories', // Reference to the SubCategories table
        key: 'id', // The id column in the SubCategory model
      },
      onDelete: 'SET NULL', // If a subcategory is deleted, set the subCategoryId to NULL
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
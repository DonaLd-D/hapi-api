'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable(
      'shops',
      {
        id:{
          type:Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true,
        },
        name:{
          type:Sequelize.STRING,
          allowNull:false,
        },
        thumb_url:Sequelize.STRING,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE,
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('shops')
  }
};

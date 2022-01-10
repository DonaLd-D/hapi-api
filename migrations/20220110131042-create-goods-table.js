'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable(
      'goods',
      {
        id:{
          type:Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true,
        },
        shop_id:{
          type:Sequelize.INTEGER,
          allowNull:false,
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
    queryInterface.dropTable('goods')
  }
};

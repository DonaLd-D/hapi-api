module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable(
      'users',
      {
        id:{
          type:Sequelize.INTEGER,
          aotoIncrement:true,
          primaryKey:true,
        },
        nick_name:Sequelize.STRING,
        avatar_url:Sequelize.STRING,
        gender:Sequelize.STRING,
        open_id:Sequelize.STRING,
        session_key:Sequelize.STRING,
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE,
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users')
  }
};

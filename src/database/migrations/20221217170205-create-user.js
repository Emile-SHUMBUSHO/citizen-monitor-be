'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: 'Email address is already in use!',
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('active', 'inactive'),
        allowNull: false,
        defaultValue: 'active'
      },
      role: {
        type: Sequelize.ENUM('admin','normal','chef'),
        allowNull: false,
        defaultValue: 'normal',
      },
      verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: 
        Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: 
        Sequelize.DATE,
      },
    }, 
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users', null, {});
  }
};

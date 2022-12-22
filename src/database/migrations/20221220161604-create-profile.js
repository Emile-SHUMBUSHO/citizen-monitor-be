export default {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: 
        Sequelize.UUID,
        defaultValue: 
        Sequelize.UUIDV4,
      },
      userId: {
        type: 
        Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      firstName: {
        type: 
        Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: 
        Sequelize.STRING,
        allowNull: false,
      },
      ID: {
        type: 
        Sequelize.STRING,
        allowNull: true,
      },
      phoneNumber: {
        type: 
        Sequelize.STRING,
        allowNull: false,
      },
      province: {
        type: 
        Sequelize.STRING,
        allowNull: false,
      },
      district: {
        type: 
        Sequelize.STRING,
        allowNull: false,
      },
      sector: {
        type: 
        Sequelize.STRING,
        allowNull: false,
      },
      cell: {
        type: 
        Sequelize.STRING,
        allowNull: false,
      },
      photo: {
        type: 
        Sequelize.STRING,
        allowNull: true,
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
    }),
  down: (queryInterface) => queryInterface.dropTable('Profiles'),
};

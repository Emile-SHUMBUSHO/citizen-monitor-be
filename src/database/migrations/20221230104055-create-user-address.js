export default {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('UserAddresses', {
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
      village: {
        type: 
        Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: 
          Sequelize.ENUM('pending', 'approved'),
        defaultValue: 'pending',  
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
  down: (queryInterface) => queryInterface.dropTable('UserAddresses'),
};

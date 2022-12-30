export default {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('DisplacementHistories', {
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
      starting: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      from: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      to: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      status: {
        type: 
          Sequelize.ENUM('pending', 'approved'),
        defaultValue: 'pending',  
      },
      date: {
        allowNull: false,
        type: 
        Sequelize.DATE,
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
  down: (queryInterface) => queryInterface.dropTable('DisplacementHistories'),
};

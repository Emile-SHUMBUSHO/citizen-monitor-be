export default (sequelize, DataTypes) => {
  const DisplacementHistory = sequelize.define(
    'DisplacementHistory',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: 
        DataTypes.UUID,
        defaultValue: 
        DataTypes.UUIDV4,
      },
      userId: {
        type: 
        DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      starting: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      from: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      to: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      status: {
        type: 
          DataTypes.ENUM('pending', 'approved'),
        defaultValue: 'pending',  
      },
      date: {
        allowNull: false,
        type: 
        DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {}
  );
  DisplacementHistory.associate = (models) => {
    DisplacementHistory.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'address'
    });
  };
  return DisplacementHistory;
};

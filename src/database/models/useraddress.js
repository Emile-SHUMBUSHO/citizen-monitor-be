export default (sequelize, DataTypes) => {
  const UserAddress = sequelize.define(
    'UserAddress',
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
      province: {
        type: 
        DataTypes.STRING,
        allowNull: false,
      },
      district: {
        type: 
        DataTypes.STRING,
        allowNull: false,
      },
      sector: {
        type: 
        DataTypes.STRING,
        allowNull: false,
      },
      cell: {
        type: 
        DataTypes.STRING,
        allowNull: false,
      },
      village: {
        type: 
        DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: 
          DataTypes.ENUM('pending', 'approved'),
        defaultValue: 'pending',  
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
  UserAddress.associate = (models) => {
    UserAddress.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'useraddr'
    });
  };
  return UserAddress;
};

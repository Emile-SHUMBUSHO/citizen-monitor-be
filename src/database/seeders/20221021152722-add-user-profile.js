'use strict';
import { v4 as uuidv4 } from 'uuid'
import db from '../models';

function createUserProfile(userId) {
  return [
    {
      id: uuidv4(),
      userId,
      firstName: 'Admin',
      lastName: 'Admin',
      phoneNumber: '0780000000',
      province:'south',
      district: 'kamonyi',
      sector: 'runda',
      cell: 'gihara',
      village: 'kamuhanda',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]
}

module.exports = {
  up: async (queryInterface) => {
    const user = await db['User'].findOne({
      where: {
        email: process.env.ADMIN_EMAIL,
        role: 'admin',
        status: 'active',
        verified: true,
      },
      raw: true,
    });

    queryInterface.bulkInsert('Profiles', createUserProfile(user.id), {})
  },

  down: (queryInterface) => {
    queryInterface.bulkDelete('Profiles', null, {})
  }
};

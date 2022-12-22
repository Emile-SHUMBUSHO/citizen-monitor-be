import { v4 as uuidv4 } from 'uuid'
import * as helper from './../../helpers'

import dotenv from 'dotenv'
dotenv.config()

console.log('pw', process.env.ADMIN_PASSWORD)
console.log('e', process.env.ADMIN_EMAIL)
console.log('e', helper.password.hash(process.env.ADMIN_PASSWORD))

const stations = [
  {
    id: uuidv4(),
    email: process.env.ADMIN_EMAIL,
    password: helper.password.hash(process.env.ADMIN_PASSWORD),
    status: 'active',
    role: 'admin',
    verified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export default {
  up: (queryInterface) => queryInterface.bulkInsert('Users', stations, {}),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
}

import db from '../models'
import { Op } from 'sequelize'
/**
 * @param {object} modal
 * @returns {object} an object containing the information of the user or null
 */

export default async (
  Model,
  condition = {},
  include = null,
  limit,
  offset,
  order
) => {
  const meta = {}
  order = order || [['createdAt', 'DESC']]
  try {
    const response = await db[Model].findAndCountAll(
      {
        where: condition,
        include,
        order,
        limit,
        offset,
      },
      { logging: false, raw: true }
    )
    return { response: response.rows, meta: { count: response.count || null } }
  } catch (error) {
    return error
  }
}

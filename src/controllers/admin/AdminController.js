import { FindAll, FindOne } from '../../database/queries'
import {User} from '../../database/models'

export default class AdminController {
    static async getAllCitizens(req, res){
        try {
            const {province, district, sector,cell, village}= req.query

            const condition ={
                province,
                district,
                sector,
                cell,
                village,
                status: "approved"
            }

            const citizens = await FindAll('UserAddress', condition)
            return res.status(200).json({
                citizens
            })
            
        } catch (error) {
            console.log(error)
        }
        
    }

    static async updateUserRole(req, res) {
        const { userId, newRole } = req.body;
      
        // validate the newRole to ensure it is one of the allowed values
        const allowedRoles = ['admin', 'normal', 'chef'];
        if (!allowedRoles.includes(newRole)) {
          return res.status(400).json({ error: `Invalid role: ${newRole}` });
        }
      
        try {
          // Find the user and update their role
          const user = await User.findByPk(userId);
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }

          await user.update({ role: newRole});
          return res.json({ message: 'User role updated successfully' });
        } catch (err) {
          return res.status(500).json({ error: 'Error updating user role', message:err });
        }
      }
      
    static async changeRoleToLeader(req, res){
        try {
            const {id} = req.params
            const response = await FindOne('User', {id})

            if(Object.keys(response).length === 0) {
                return res.status(404).json({
                    message: 'User not found'
                })
            }
            else if(response.role === 'chef'){
                return res.status(409).json({
                    message: 'User already is leader'
                })
            }else{
                response.role = 'chef'
               const saved = await response.save()

                return res.status(200).json({
                    saved: saved,
                    message: 'role updated successfully'
                })
            }
        } catch (error) {
            console.log(error)
        }

    }

    static async changeRoleToCitizen(req, res){
      try {
          const {id} = req.params
          const response = await FindOne('User', {id})

          if(Object.keys(response).length === 0) {
              return res.status(404).json({
                  message: 'User not found'
              })
          }
          else if(response.role === 'normal'){
              return res.status(409).json({
                  message: 'User already is a citizen'
              })
          }else{
              const saved = await response.update({role: 'normal'})
              return res.status(200).json({
                  saved: saved,
                  message: 'role updated successfully to normal'
              })
          }
      } catch (error) {
          console.log(error)
      }

  }
            
}
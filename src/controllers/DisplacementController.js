import db from '../database/models';
import { Create, FindOne, Delete, FindAll } from '../database/queries'


export default class DisplacementController {
    static async requestToLeaveVillage(req, res) {
        const {id} = req.user;
    
        const data = req.body
            data.userId = id
            data.status = 'pending'

        const condition = {
            userId: id,
            status: 'approved'
        }
        const response = await FindOne('UserAddress', condition)

        if(Object.keys(response).length === 0) {
            return res.status(404).json({
                message: 'Address of user not Found!'
            })
        }

         // Archiving in history
        const hstr = await Create('DisplacementHistory', {
            userId: id,
            from: [
                response.province,
                response.district,
                response.sector,
                response.cell,
                response.village,
            ],
            to: [
                data.province,
                data.district,
                data.sector,
                data.cell,
                data.village,
            ],
            status: 'pending',
            date: Date.now()

        })
        // updating address of user
        const displacing= await response.update({ 
            ...data
         })
        return res.status(200).json({
            message: 'You request to left village received',
            response: displacing,
        })
    }

    static async approveLeaving(req, res) {
        const {userId} = req.params;

        const condition = {
            userId,
            status: 'pending'
        }
        const response = await FindOne('UserAddress', condition)

        if(Object.keys(response).length === 0) {
            return res.status(404).json({
                message: 'Address of user not Found or You have already approved!'
            })
        }

        const approvedAddress = await response.update({ status: 'approved' })

        // Archiving in history
        await Create('DisplacementHistory', {
            userId,
            to: [
                approvedAddress.province,
                approvedAddress.district,
                approvedAddress.sector,
                approvedAddress.cell,
                approvedAddress.village,
            ],
            status: 'approved',
            date: Date.now()

        })

        return res.status(200).json({
            message: 'Successfully citizen address approved!',
            response: approvedAddress,
        })
    }

    static async getHistory(req, res){
        const {id} = req.user;

        const response = await FindAll('DisplacementHistory', {userId: id})

        return res.status(200).json({
            message: 'Displacement history retrieved successfully',
            response
        })
    }

    static async getDisplacementRequests(req, res){
        // console.log('cheffff', req.user.profile)
        // 1. check if user is leader
        if(req.user.role === 'chef'){
            const {user} = req.user
            console.log('ttttt', user.district)
            const condition ={
                status: 'pending',
                province: user.province,
                district: user.district,
                sector: user.sector,
                cell: user.cell,
                village: user.village
            }
            const include = [
                {
                    model: db.User,
                    as: 'useraddr',
                    include: [
                        {
                            model: db.Profile,
                            as: 'user'
                        }
                    ]
                }
            ]
            const response = await FindAll('UserAddress', condition, include)
            return res.status(200).json({
                message: 'Retrieved successfully',
                response
            })
        }else{
            return res.status(403).send({
                message: 'You are not leader!'
            })

        }
        
    }
}

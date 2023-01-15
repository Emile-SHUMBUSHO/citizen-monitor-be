import { FindAll, FindOne } from '../database/queries'

export default class CitizenController {
    static async ListCitizens(req, res){
        try {
            const {province, district, sector,cell, village}= req.query
            const {user} = req.user

            const condition ={
                status: 'approved',
                province: user.province && province,
                district: user.district && district,
                sector: user.sector && sector,
                cell: user.cell && cell,
                village: user.village && village
            }
            const citizens = await FindAll('UserAddress', condition)
            return res.status(200).json({
                citizens
            })
            
        } catch (error) {
            console.log(error)
        }
        
    }
            
}
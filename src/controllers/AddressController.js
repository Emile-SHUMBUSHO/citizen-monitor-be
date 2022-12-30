import { Create, FindOne, Delete } from '../database/queries'


export default class AddressController {
    static async approveAddress(req, res) {
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
            starting: [
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
            message: 'Address of user approved',
            response: approvedAddress,
        })
    }
}

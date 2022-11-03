const user = require('../models/user.js')

const userController = {
    showUser: async function (req, res, next) {
        try {
            const userData = await user.all()
            res.json({
                code: 200,
                message: '操作成功',
                data: userData
            })
        } catch (e) {
            res.json({ code: 0, message: '操作失败', data: e })
        }
    },
    addUser: async function (req, res, next) {
        try {
            const userData = await user.insert()
            res.json({
                code: 200,
                message: '操作成功',
            })
        } catch (error) {
            res.json({ code: 0, message: '操作失败', data: e })
        }
    }
}
module.exports = userController;
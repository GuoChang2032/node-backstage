const user = require('../models/user.js')
const url = require('url')
const querystring = require('querystring')
const userController = {
    showUser: async function (req, res, next) {
        try {
            const userData = await user.all()
            res.json({
                code: 200,
                message: '操作成功',
                data: userData,
                success: true
            })
        } catch (e) {
            res.json({ code: 0, message: '操作失败', data: e })
        }
    },
    addUser: async function (req, res, next) {
        try {
            await user.insert(req.body)
            res.json({
                code: 200,
                message: '操作成功',
                success: true
            })
        } catch (error) {
            res.json({ code: 0, message: '操作失败', data: error })
        }
    },
    deleteUser: async function (req, res, next) {
        try {
            console.log('res', req)
            let arg = url.parse(req.url).query;
            let params = querystring.parse(arg)
            await user.delete(params.id)
            res.json({
                code: 200,
                message: '操作成功',
                success: true
            })
        } catch (error) {
            res.json({ code: 0, message: '操作失败', data: error })
        }
    },
    updateUser: async function (req, res, next) {
        try {
            let id = req.body.id
            let p = { name: req.body.name, age: req.body.age, gender: req.body.gender }
            await user.update(id, p)
            res.json({
                code: 200,
                message: '操作成功',
                success: true
            })
        } catch (error) {
            res.json({ code: 0, message: '操作失败', data: error })
        }
    },
}
module.exports = userController;
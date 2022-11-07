const user = require('../models/user.js')
const utils = require('../utils/utils.js')
const md5 = require('md5')

const loginController = {
    // 登录
    enter: async function (req, res, next) {
        try {
            const p = req.body
            if (!p.account || !p.password) {
                res.json(utils.fail('账号或密码为空'))
                return
            }
            const result = await user.queryUser(p)
            if (!result || result.length <= 0) {
                res.json(utils.fail('该账号不存在'))
                return
            }
            p.password = md5(p.password)
            const isRight = await user.userLogin(p)
            console.log('zzz',isRight)
            if (isRight && isRight.length > 0) {
                res.json(utils.success(null, '登录成功'))
                
            } else {
                res.json(utils.fail(null, '账号或密码错误'))
            }
        } catch (error) {
            res.json(utils.fail(error))
        }
    },

    createUser: async function (req, res, next) {
        try {
            const p = req.body
            if (!p.userName) {
                res.json(utils.fail('用户名不能为空'))
                return
            } else if (!p.account) {
                res.json(utils.fail('登录账号不能为空'))
                return
            } else if (!p.phone) {
                res.json(utils.fail('手机号不能为空'))
                return
            } else if (!p.password) {
                res.json(utils.fail('密码不能为空'))
                return
            }
            // 查询是否有重复
            const r = await user.queryIsRepeatUser(p)
            if (r && r.length > 0) {
                res.json(utils.fail('重复的账号或手机号'))
                return
            }
            p.password = md5(p.password)
            await user.insert(p)
            res.json(utils.success(null, '新增成功'))
        } catch (error) {
            res.json(utils.fail(error))
        }
    },

    deleteUser: async function (req, res, next) {
        try {
            const result = await user.queryUser(req.body)

            if (!result || result.length <= 0) {
                res.json(utils.fail('该账号不存在'))
                return
            }

            await user.delete(req.body.id)
            res.json(utils.success(null, '删除成功'))

        } catch (error) {
            res.json(utils.fail(error))
        }
    }


}

module.exports = loginController
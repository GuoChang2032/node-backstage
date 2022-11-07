const knex = require('../models/knex')

class Base {
    constructor(props) {
        this.table = props
    }

    // 查询所有
    all() {
        return knex(this.table).select()
    }

    // 插入数据
    insert(params) {
        return knex(this.table).insert(params)
    }

    // 更新数据
    update(id, params) {
        return knex(this.table).where('id', '=', id).update(params)
    }
    // 删除数据
    delete(id) {
        return knex(this.table).where('id', '=', id).del()
    }

    // 条件查询用户
    queryUser(params) {
        if (params.account) {
            return knex(this.table).select().where('account', '=', params.account)
        } else if (params.id) {
            return knex(this.table).select().where('id', '=', params.id)

        }
    }

    // 查询是否重复用户
    queryIsRepeatUser(p) {
        return knex(this.table).select().where('phone', '=', p.phone, 'or', 'account', '=', p.account)
    }
    // 用户登录
    userLogin(p) {
        return knex(this.table).select().where('account', '=', p.account).where('password', '=', p.password)
    }
}

module.exports = Base; 
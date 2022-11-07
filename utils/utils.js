const utils = {
    fail: function (err = null, code = 0) {
        return { code, message: err, success: false }
    },
    success: function (data = null, str = '操作成功', code = 200) {
        return { code, message: str, data, success: true }
    }
}

module.exports = utils
const configs = {
    mysql:{
        host:'127.0.0.1',
        port:'3306',
        user:'root',
        password:'guochang123',
        database:'test'
    },
    log:{
        error(message){
            console.log('db error:',message)
        }
    }
}


module.exports = configs
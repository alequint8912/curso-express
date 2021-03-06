
//Sequelize
const SequelizeLib = require('../lib/sequelize')

//Models
const User = require('../models/user.model')

class UserService {
    constructor(){

        this.orm = new SequelizeLib()
        this.orm.connect()        
    }

    getUser({ tags }) {
        return User.findAll()
    }

    getUserById({ userId }) {
        return User.findAll({
            where: {
                id: parseInt(userId)
            }
        })
    }

    createUser({ user }) {        
        
        const userInstance = User.build(user)
        return userInstance.save()        

    }

    updateUser({ userId, user }) {
       
        return User.update({ ...user }, {
            where: { id: parseInt(userId) }
        })
    }

    deleteUser({ userId }) {
        return User.destroy({
            where: {
                id: parseInt(userId)
            }
        })
    }
}

module.exports = UserService
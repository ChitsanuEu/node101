// const User = require('./model')


const getUsers = async () => {

    try {
        
        //          fetch from database model
        let users = require('./../utils/mock/dataUser')
        return users;

    } catch (err) {
        throw Error('Error : ' + err.message)
    }

}

const deleteUser = async (userId) => {

    try {
        let users = require('./../utils/mock/dataUser')
        users = users.filter(user => user.id != userId)
        return users;
    } catch (err) {
        throw Error('Error : ' + err.message)
    }

}



module.exports = {
    getUsers,
    deleteUser
}
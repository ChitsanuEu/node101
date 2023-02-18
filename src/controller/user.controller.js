const UserService = require('./../services/user.services')


const getUser = async (req, res, next) => {
    try {
        const users = await UserService.getUsers()
        return res.send(JSON.stringify(users))
    } catch (err) {
        return res.send('error' + err.message) 
    }
}


const deleteUser = async (req, res, next) => {
    try {
        const user = await UserService.deleteUser(req.params.id)
        return res.status(200).send(JSON.stringify(user))
    } catch (err) {
        return res.send('error', err.message)
    }
}


module.exports = {
    getUser,
    deleteUser
}
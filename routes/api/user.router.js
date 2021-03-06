//Express
const express = require('express')
const router = express.Router()

const UserService = require('../../services/user.service')

const userService = new UserService()

router.get('/', async (req, res, next) => {
    
    const { tags } = req.query

    try {
        const users = await userService.getUser({ tags })
    
        res.status(200).json({
            data: users,
            message: 'Users listed'
        })
        
    } catch (error) {
        next(error)
    }
    
})

router.get('/:userId', async (req, res, next) => {

    const { userId } = req.params 
    
    try {
        const user = await userService.getUserById({ userId })
    
        res.status(200).json({
            data: user,
            message: 'User retrieved'
        })
        
    } catch (error) {
        next(error)
    }
    
})


router.post('/', async (req, res, next) => {

    const { body: user } = req

    try {
        const userId = await userService.createUser({ user })
        console.log('User was saved to the database!');
        console.log('PRODUCTO CREADO ------ '+userId);
    
        res.status(201).json({
            data: userId,
            message: 'User added'
        })
        
    } catch (error) {
        next(error)
    }

})

router.put('/:userId', async (req, res, next) => {

    const { userId } = req.params
    const { body: user } = req
    console.log(req.params);
    console.log(req.body);

    try {
        const userUpdated = await userService.updateUser({ userId, user })
        
        res.status(200).json({
            data: userUpdated,
            message: 'User updated'
        })
        
    } catch (error) {
        next(error)
    }

})

router.delete('/:userId', async (req, res, next) => {

    const { userId } = req.params

    try {
        const deletedUserId = await userService.deleteUser({ userId }) 
        
        res.status(200).json({
            data: deletedUserId,
            message: 'User deleted'
        })
        
    } catch (error) {
        next(error)
    }

})

module.exports = router
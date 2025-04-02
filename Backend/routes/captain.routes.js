const express = require('express')
const captainController = require('../controllers/captain.controller')

const router = express.Router()
const { body } = require('express-validator')

router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleast 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Vehicle color is required'),
    body('vehicle.plate').isLength({ min: 3}).withMessage('Vehicle plate is required'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Vehicle capacity must be a number'),
    body('vehicle.vehicleType').isIn(['car','motorcycle', 'auto']).withMessage('Vehicle type is invalid'),
    
],
captainController.registerCaptain)

module.exports = router
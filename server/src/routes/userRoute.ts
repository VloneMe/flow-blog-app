import { Router, Request, Response } from 'express';
const router = Router();

const { 
    postUser
} = require('../controllers/usersController')



router.post('/sign-up', postUser);


module.exports = router
// external imports
import { Router } from "express";


// internal imports
import register from "../controller/auth/register";
import send_otp from "../controller/auth/send_otp";

import registerValidation from '../middleware/validation/register'


// global variables
const router = Router()


// setup all router
router.post('/register', registerValidation, register)
router.get('/send-otp', send_otp)


export default router
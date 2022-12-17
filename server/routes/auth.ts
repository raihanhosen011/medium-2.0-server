// external imports
import { Router } from "express";


// internal imports
import register from "../controller/auth/register";
import send_otp from "../controller/auth/send_otp";
import active from "../controller/auth/active";
import login from "../controller/auth/login";
import logout from "../controller/auth/logout";
import refreshToken from "../controller/auth/refreshToken";

import registerValidation from '../middleware/validation/register'


// global variables
const router = Router()


// setup all router
router.post('/register', registerValidation, register)
router.post('/login', login)

router.get('/active/:id', active)
router.get('/logout', logout)
router.get('/refresh_token', refreshToken)
router.get('/send-otp', send_otp)


export default router
// external imports
import { Request, Response } from "express";
import bcrypt from 'bcrypt'

// internal imports
import Users from '../../models/user'
import { generateActiveToken } from "../../config/genarateToken";
import sendMail from "../../config/sendMail";
import { OTP, verifyOtp } from "../../config/OTP";

const CLIENT_URL = process.env.BASE_URL

// do register
export default async (req: Request, res: Response) => {
    try {
        // extract all data from "request body"
        const { name, account, password, type } = req.body

        // find a user who has this email/username
        const user = await Users.findOne({account})

        if(user){
           return res.status(400).json({ msg: 'Email or Phone number already exists.', success: false }) 
        }else{
           // normal password to hashed password 
           const hashed_password =  await bcrypt.hash(password, 12)

           const new_user = { name, account, password : hashed_password } 
           
           // check how user wants to register .. by "CODE" or "VERIFY LINK"
           if(type === 'verify_link'){
               // genarate JWT tokens
               const active_token: string = generateActiveToken({ new_user })
               const url = `${CLIENT_URL}/active/${active_token}`

               // send mail to user with active token
               await sendMail(account, url, "check", 'send_mail', '')

               res
                  .status(200)
                  .json({ msg: 'Please check your email', success: true })              
           }else if(type === 'verify_code'){
               const otp = req.body.otp

               if(otp){
                  // verify the provided OTP
                  const matched = await verifyOtp(otp._id, otp.code)

                  if(matched){
                     // save user
                     const registred = new Users(new_user).save()

                     res
                     .status(200)
                     .json({ msg: 'Successfully registred', success: true, user : registred })   
                                          
                  }else{
                     res
                       .status(400)
                       .json({ msg: 'Incorrect OTP', success: false })
                  }
               }
           } 


        }

    } catch (e) {
       return res.status(500).json({ msg : (e as Error).message, success : false }) 
    }
}
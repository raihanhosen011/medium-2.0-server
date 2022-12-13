// external imports
import { Request, Response } from "express";
import Validator from "validator";
import isEmpty from "is-empty";


// internal imports
import { OTP } from "../../config/OTP";


// send otp
export default async (req: Request, res: Response) => {
    try {
       const data = req.body

       // check mail
       data.email = !isEmpty(data.email) ? data.email : "";

       if(Validator.isEmpty(data.email)){
         return res.status(400).json({ success: false, msg: "Please add your email." })
       }else if(!Validator.isEmail(data.email)){
         return res.status(400).json({ success: false, msg: "Email format is incorrect." })
       }

       // send OTP
       const otp_id = OTP(data.email)
       
       res.status(202).json({ success : true, msg : "Please check your email", otp_id })

    } catch (e) {
       return res.status(500).json({ msg : (e as Error).message, success : false }) 
    }
}
// external imports
import Validator from "validator"
import bcrypt from 'bcrypt';

// internal imports
import sendMail from "./sendMail";
import OTP_MODEL from "../models/otp";
import { isAsyncFunction } from "util/types";


// By using "OTP" function i will genarate OTP, send OTP to mail and save this OTP to Database
export const OTP = async (mail: string) => {

    // check provided mail
    if(mail.length == 0 && !Validator.isEmail(mail)){
       console.error("Please provide a valid mail")  
    }else{
       // getnarate 5 digit OTP code
       const code = Math.floor(Math.random()*90000) + 10000; 

       // send code to user mail
       sendMail(mail, '', '', 'send_code', code.toString())

       // save code to database
       const hashed_code = await bcrypt.hash(`${code}`, 12)
       const saved_otp = new OTP_MODEL({ code : hashed_code }).save()

       console.log(saved_otp)

       return (await saved_otp)._id
    }

}

// By using "verifyOtp" function i will find otp with provided "otp_id"
export const verifyOtp = async (otp_id: string, otp: string) => {
   // check is provided otp_id ok?
   const finded_otp = await OTP_MODEL.findOne({ _id : otp_id })

   if(finded_otp){
      // check is OTP matched
      const matched = await bcrypt.compare(otp, `${finded_otp.code}`)
      return matched
      
   }else{
     console.error('invalid otp_id provied')
   }
}
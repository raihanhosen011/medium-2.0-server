// external imports
import { Request, Response } from "express";
import jwt from 'jsonwebtoken'

// internal imports
import { IToken } from "../../config/interface";
import user from "../../models/user";


export default async (req: Request, res: Response) => {
    try {
      const { active_token } = req.body
      
      // verify active token -
      const { new_user } = <IToken>await jwt.verify(active_token, `${process.env.ACTIVE_TOKEN_SECRET}`)
      
      // save data from active token
      const registred = new user(new_user).save()

      if(!registred){
        res.status(200).json({ success : false, msg : "Authentication failed. Please do registation again" })  
      }else{
        res.status(200).json({ success : true, msg : "Account successfully activate!" })  
      }

    } catch (e) {
       return res.status(500).json({ msg : (e as Error).message, success : false }) 
    }
}
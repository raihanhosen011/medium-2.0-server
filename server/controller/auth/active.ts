// external imports
import { Request, Response } from "express";
import jwt from 'jsonwebtoken'

// internal imports
import { IToken } from "../../config/interface";
import user from "../../models/user";


// do active account
export default async (req: Request, res: Response) => {
    try {
      const { active_token } = req.body
      
      // verify active token -
      const { new_user } = <IToken>await jwt.verify(active_token, `${process.env.ACTIVE_TOKEN_SECRET}`)
      
      // save data from active token
      new user(new_user).save()

      res.status(200).json({ success : true, msg : "Account successfully activate!" })  

    } catch (e) {
       return res.status(500).json({ msg : "Please do registation again", success : false }) 
    }
}
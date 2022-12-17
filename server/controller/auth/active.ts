// external imports
import { Request, Response } from "express";
import jwt from 'jsonwebtoken'

// internal imports
import { IDecoded } from "../../config/interface";
import user from "../../models/user";


export default async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      
      // verify active token -
      const { new_user } = <IDecoded>await jwt.verify(id, `${process.env.ACTIVE_TOKEN_SECRET}`)
      
      if(new_user){
          // save data from active token
          new user(new_user).save()
          res.status(200).json({ success : true, msg : "Account successfully activate!" })  
      }else{
          res.status(200).json({ success : false, msg : "Authentication failed. Please do registation again" })  
      }
    } catch (e) {
       return res.status(500).json({ msg : (e as Error).message, success : false }) 
    }
}
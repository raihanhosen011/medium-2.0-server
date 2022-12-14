// external imports
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

// external imports
import { IDecoded, IUser } from './../../config/interface';
import User from "../../models/user";
import { generateAccessToken, generateRefreshToken } from "../../config/genarateToken";


export default async (req: Request, res: Response) => {
    try {      
       const rf_token = req.cookies.refreshtoken
       if(!rf_token) res.status(500).json({ msg : "Please login now!", success : false }) 

       const decoded = <IDecoded>await jwt.verify(rf_token, `${process.env.REFRESH_TOKEN_SECRET}`)
       if(!decoded.id) res.status(500).json({ msg : "Please login now!", success : false }) 

       const user = <IUser>await User.findById(decoded.id)
       if(!user) res.status(500).json({ msg : "Account does not exist!", success : false }) 

        
       const access_token = generateAccessToken({id: user._id})
       const refresh_token = generateRefreshToken({id: user._id}, res)

       await User.findOneAndUpdate({_id: user._id}, {
         rf_token: refresh_token
       })

       res.json({ success : true, access_token, user })

    } catch (e) {
       return res.status(500).json({ msg : (e as Error).message, success : false }) 
    }
}
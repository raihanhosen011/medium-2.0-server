// external imports
import { Request, Response } from "express";
import bcrypt from 'bcrypt'

// internal imports 
import { IUser } from "../../config/interface";
import { generateAccessToken, generateRefreshToken } from "../../config/genarateToken";
import User from "../../models/user";


export default async (req: Request, res: Response) => {
    try {
       const { account, password } = req.body 

       // check is account exist      
       const user = await User.findOne({ account })
       if(!user){
          return res.status(500).json({ msg : "Account does not exist.", success : false }) 
       } 

       // if user exist
       loginUser(user as IUser, password, res)

    } catch (e) {
       return res.status(500).json({ msg : (e as Error).message, success : false }) 
    }
}


// check login
const loginUser = async (user: IUser, password: string, res: Response) => {
    const isMatch = await bcrypt.compare(password, user.password)
  
    if(!isMatch) {
      return res.status(400).json({ success: false, msg: "Password is incorrect" })
    }
  
    const access_token = generateAccessToken({id: user._id})
    const refresh_token = generateRefreshToken({id: user._id}, res)
  
    await User.findOneAndUpdate({_id: user._id}, {
      rf_token:refresh_token
    })
  
    res.json({
      msg: 'Login Success!',
      access_token,
      user: { ...user._doc, password: '' }
    })
  
  }
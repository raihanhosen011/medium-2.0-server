// external imports
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
    try {      

      res.clearCookie("refreshtoken", { path: `${process.env.BASE_URL}/api/refresh_token` })  
      res.status(202).json({ msg : "Logged out!", success : true }) 

    } catch (e) {
       return res.status(500).json({ msg : (e as Error).message, success : false }) 
    }
}
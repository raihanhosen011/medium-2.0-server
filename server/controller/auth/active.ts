// external imports
import { Request, Response } from "express";

// do active account
export default async (req: Request, res: Response) => {
    try {
        
    } catch (e) {
       return res.status(500).json({ msg : (e as Error).message, success : false }) 
    }
}
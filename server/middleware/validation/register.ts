// external imports
import { Response, Request, NextFunction } from 'express';
import Validator from "validator";
import isEmpty from "is-empty";

// start validating
export default (req: Request, res: Response, next: NextFunction) => {
    const data = req.body

    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.account = !isEmpty(data.account) ? data.account : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    
    // check name
    if(Validator.isEmpty(data.name)){
       return res.status(400).json({ success: false, msg: "Please add your name." })
    }else if(!Validator.isLength(data.name, {min: 3, max: 20})){
       return res.status(400).json({ success: false, msg: "Name must be minimum 3 chars & maximum 20 chars" })
    }

    // check account
    if(Validator.isEmpty(data.account)){
       return res.status(400).json({ success: false, msg: "Please add your email or phone number." })
    }else if(!Validator.isMobilePhone(data.account) && !Validator.isEmail(data.account)){
       return res.status(400).json({ success: false, msg: "Email or phone number format is incorrect." })
    }

    // Password checks
    if(Validator.isEmpty(data.password)){
        return res.status(400).json({ success: false, msg: "Please enter password." })
    }else if(!Validator.isLength(data.password,{min:6,max:30})){
        return res.status(400).json({ success: false, msg: "Password must be at least 6 characters" })
    }

    // yahh,, everything is ok, now we can move
    next();
}
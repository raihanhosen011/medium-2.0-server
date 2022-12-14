import { Document } from "mongoose"


export interface IUser extends Document{
    name: string
    account: string
    password: string
    avatar: string
    role: string
    type: string
    rf_token?: string
    _doc: object
  }
  

export interface INewUser {
    name : string
    account : string
    password : string
}

export interface IDecoded extends INewUser {
    id ?: string
    new_user ?: INewUser
    iat: number
    exp: number
}
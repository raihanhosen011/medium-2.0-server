// external imports
import jwt from 'jsonwebtoken'
import { Response } from 'express'

// let's genarate active token
export const generateActiveToken = (payload: object) => {
  return jwt.sign(payload, `${process.env.ACTIVE_TOKEN_SECRET}`, {expiresIn: '30m'})
}

// let's genarate access token
export const generateAccessToken = (payload: object) => {
  return jwt.sign(payload, `${process.env.ACCESS_TOKEN_SECRET}`, {expiresIn: '15m'})
}

// let's genarate refresh token
export const generateRefreshToken = (payload: object, res: Response) => {
  const refresh_token = jwt.sign(payload, `${process.env.REFRESH_TOKEN_SECRET}`, {expiresIn: '30d'})

  res.cookie('refreshtoken', refresh_token, {
    httpOnly: true,
    path: `${process.env.BASE_URL}/api/refresh_token`,
    maxAge: 30*24*60*60*1000 // 30days
  })

  return refresh_token
}
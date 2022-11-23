// external imports
import jwt from 'jsonwebtoken'

// let's genarate active token
export const generateActiveToken = (payload: object) => {
  return jwt.sign(payload, `${process.env.ACTIVE_TOKEN_SECRET}`, {expiresIn: '5m'})
}

// let's genarate access token
export const generateAccessToken = (payload: object) => {
  return jwt.sign(payload, `${process.env.ACCESS_TOKEN_SECRET}`, {expiresIn: '15m'})
}

// let's genarate refresh token
export const generateRefreshToken = (payload: object) => {
  return jwt.sign(payload, `${process.env.REFRESH_TOKEN_SECRET}`, {expiresIn: '30d'})
}
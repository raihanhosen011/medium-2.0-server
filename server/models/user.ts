// external import
import mongoose from 'mongoose'

// internal imports
import { IUser } from '../config/interface'


// user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add your name"],
    trim: true,
    maxLength: [20, "Your name is up to 20 chars long."]
  },

  account: {
    type: String,
    required: [true, "Please add your email or phone"],
    trim: true,
    unique: true
  },

  password: {
    type: String,
    required: [true, "Please add your password"],
    trim: true,
    minLength : [6, "Password mush minium 6 cherecter"]
  },

  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
  },

  role: {
    type: String,
    default: 'user' // admin
  },
  
  type: {
    type: String,
    default: 'normal' // fast
  },

  rf_token: { type: String, select: false }
}, {
  timestamps: true
})


// user model
export default mongoose.model<IUser>('User', userSchema)
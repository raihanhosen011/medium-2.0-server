// external import
import mongoose from 'mongoose'
import ms from 'ms'

// otp schema
const otpSchema = new mongoose.Schema({
  code: {
    type: String,
    trim: true,
  },
  
  expireAt: {
    type: Date,
    default: Date.now,
    index: { expires: ms('3m') },
  }
}, {
  timestamps: true
})

// otp model
export default mongoose.model('Otp', otpSchema)
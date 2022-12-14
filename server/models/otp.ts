// external import
import mongoose from 'mongoose'

// otp schema
const otpSchema = new mongoose.Schema({
  code: {
    type: String,
    trim: true,
  }
}, {
  timestamps: true
})

otpSchema.index({"createdAt": 1 }, { expireAfterSeconds: 180 });


// otp model
export default mongoose.model('Otp', otpSchema)
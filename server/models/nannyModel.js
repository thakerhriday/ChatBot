import mongoose from 'mongoose';

const nannySchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    experience: { type: String, required: true },
    certifications: [String],
    profilePicture: { type: String },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true },
    address: { type: String },
  },
  { timestamps: true }
);

const Nanny = mongoose.model('Nanny', nannySchema);
export default Nanny;

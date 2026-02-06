import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    company: String,
    text: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    image: String
  },
  { timestamps: true }
);

testimonialSchema.index({ id: 1 }, { unique: true });

export default mongoose.model("Testimonial", testimonialSchema);

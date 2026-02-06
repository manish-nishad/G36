import Testimonial from "../models/Testimonial.js";
import Counter from "../models/Counter.js";
import { parseNumericId } from "../utils/parseId.js";

/* CREATE TESTIMONIAL */
export const createTestimonial = async (req, res) => {
  try {
    const counter = await Counter.findOneAndUpdate(
      { name: "testimonialId" },
      { $inc: { value: 1 } },
      { new: true, upsert: true }
    );

    const testimonial = await Testimonial.create({
      ...req.body,
      id: counter.value
    });

    res.status(201).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* GET ALL TESTIMONIALS */
export const getTestimonials = async (req, res) => {
  const testimonials = await Testimonial.find().sort({ id: -1 });
  res.json(testimonials);
};

/* GET ONE BY ID */
export const getTestimonialById = async (req, res) => {
  const tId = parseNumericId(req.params.id);

  if (!tId) {
    return res.status(400).json({ message: "Invalid testimonial id" });
  }

  const testimonial = await Testimonial.findOne({ id: tId });

  if (!testimonial) {
    return res.status(404).json({ message: "Testimonial not found" });
  }

  res.json(testimonial);
};

/* UPDATE */
export const updateTestimonial = async (req, res) => {
  const tId = parseNumericId(req.params.id);

  if (!tId) {
    return res.status(400).json({ message: "Invalid testimonial id" });
  }

  const testimonial = await Testimonial.findOneAndUpdate(
    { id: tId },
    req.body,
    { new: true }
  );

  if (!testimonial) {
    return res.status(404).json({ message: "Testimonial not found" });
  }

  res.json(testimonial);
};

/* DELETE */
export const deleteTestimonial = async (req, res) => {
  const tId = parseNumericId(req.params.id);

  if (!tId) {
    return res.status(400).json({ message: "Invalid testimonial id" });
  }

  const testimonial = await Testimonial.findOneAndDelete({ id: tId });

  if (!testimonial) {
    return res.status(404).json({ message: "Testimonial not found" });
  }

  res.json({ message: "Testimonial deleted successfully" });
};

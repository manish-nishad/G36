import { Box, Button, Input, Stack, Heading, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { createTestimonial } from "../services/testimonialServices";
import { useNavigate } from "react-router-dom";

const AddTestimonial = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    company: "",
    text: "",
    rating: 5,
    image: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    await createTestimonial(form);
    navigate("/admin/dashboard/testimonials");
  };

  return (
    <Box bg="white" p={6} rounded="lg" shadow="md">
      <Heading size="md" mb={4}>Add Testimonial</Heading>

      <Stack spacing={3}>
        <Input name="name" placeholder="Name" onChange={handleChange} />
        <Input name="company" placeholder="Company" onChange={handleChange} />
        <Input name="image" placeholder="Image URL" onChange={handleChange} />
        <Input
          name="rating"
          type="number"
          min="1"
          max="5"
          placeholder="Rating (1-5)"
          onChange={handleChange}
        />
        <Textarea name="text" placeholder="Testimonial Text" onChange={handleChange} />

        <Button onClick={handleSubmit}>Save</Button>
      </Stack>
    </Box>
  );
};

export default AddTestimonial;

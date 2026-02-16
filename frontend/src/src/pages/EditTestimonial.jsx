import { Box, Button, Input, Stack, Heading, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTestimonialById, updateTestimonial } from "../services/testimonialServices";

const EditTestimonial = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    company: "",
    text: "",
    rating: 5,
    image: "",
  });

  useEffect(() => {
    const fetchOne = async () => {
      const res = await getTestimonialById(id);
      setForm(res.data?.data || res.data);
    };
    fetchOne();
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async () => {
    await updateTestimonial(id, form);
    navigate("/admin/dashboard/testimonials");
  };

  return (
    <Box bg="white" p={6} rounded="lg" shadow="md">
      <Heading size="md" mb={4}>Edit Testimonial</Heading>

      <Stack spacing={3}>
        <Input name="name" value={form.name} onChange={handleChange} />
        <Input name="company" value={form.company} onChange={handleChange} />
        <Input name="image" value={form.image} onChange={handleChange} />
        <Input
          name="rating"
          type="number"
          min="1"
          max="5"
          value={form.rating}
          onChange={handleChange}
        />
        <Textarea name="text" value={form.text} onChange={handleChange} />

        <Button onClick={handleUpdate}>Update</Button>
      </Stack>
    </Box>
  );
};

export default EditTestimonial;

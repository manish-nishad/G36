import {
  Box,
  Button,
  Input,
  Stack,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { createBlog } from "../services/blogServices";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    excerpt: "",
    author: "",
    category: "",
    readTime: "",
    image: "",
    content: "",
  });

  const handleChange = (e) =>
    setBlog({ ...blog, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    await createBlog(blog);
    navigate("/admin/dashboard/blogs");
  };

  return (
    <Box bg="white" p={6} rounded="lg" shadow="md">
      <Heading size="md" mb={4}>
        Add Blog
      </Heading>

      <Stack spacing={3}>
        <Input name="title" placeholder="Title" onChange={handleChange} />
        <Input name="excerpt" placeholder="Excerpt" onChange={handleChange} />
        <Input name="author" placeholder="Author" onChange={handleChange} />
        <Input name="category" placeholder="Category" onChange={handleChange} />
        <Input name="readTime" placeholder="Read Time" onChange={handleChange} />
        <Input name="image" placeholder="Image URL" onChange={handleChange} />
        <Textarea
          name="content"
          placeholder="Content"
          rows={6}
          onChange={handleChange}
        />

        <Button colorScheme="blue" onClick={handleSubmit}>
          Publish
        </Button>
      </Stack>
    </Box>
  );
};

export default AddBlog;

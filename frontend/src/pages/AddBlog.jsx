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

        {/* ✅ AUTHOR DROPDOWN (native) */}
        <select
          name="author"
          onChange={handleChange}
          style={{ padding: "6px", border: "1px solid #d0d0d0", borderRadius: "6px" }}
        >
          <option value="">Select Author</option>
          <option value="Admin">Admin</option>
          <option value="Manish Nishad">Manish Nishad</option>
          <option value="Gurendra Ratrey">Gurendra Ratrey</option>
          <option value="Prafull Sahu">Prafull Sahu</option>
          <option value="Pranjal Patil">Pranjal Patil</option>
          <option value="Kishan Kumar">Kishan Kumar</option>
          <option value="Guest Author">Guest Author</option>
        </select>

        {/* ✅ CATEGORY DROPDOWN (native) */}
        <select
          name="category"
          onChange={handleChange}
          style={{ padding: "6px", border: "1px solid #d0d0d0", borderRadius: "6px" }}
        >
          <option value="">Select Category</option>
          <option value="AI & Web">AI & Technology</option>
          <option value="Web Development">Web Development</option>
          <option value="Artificial Intelligence">Cyber Security</option>
          <option value="Technology">Cloud Computing</option>
          <option value="Technology">Networking</option>
          <option value="Technology">Career & Training</option>
        </select>

        <Input name="readTime" placeholder="Read Time" onChange={handleChange} />
        <Input name="image" placeholder="Image URL" onChange={handleChange} />

        <Textarea name="content" rows={6} placeholder="Content" onChange={handleChange} />

        <Button colorScheme="blue" onClick={handleSubmit}>
          Publish
        </Button>
      </Stack>
    </Box>
  );
};

export default AddBlog;

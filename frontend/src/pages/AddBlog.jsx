import { Box, Button, Input, Stack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { createBlog } from "../services/blogServices";
import { useNavigate } from "react-router-dom";
import QuillEditor from "../components/ui/QuillEditor";

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

        {/* Author */}
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

        {/* Category */}
        <select
          name="category"
          onChange={handleChange}
          style={{ padding: "6px", border: "1px solid #d0d0d0", borderRadius: "6px" }}
        >
          <option value="">Select Category</option>
          <option value="Cyber Security">AI & Technology</option>
          <option value="Web Development">Web Development</option>
          <option value="Cloud Computing">Cloud Computing</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="Networking">Networking</option>
          <option value="Career & Training">Career & Training</option>
        </select>

        <Input name="readTime" placeholder="Read Time" onChange={handleChange} />
        <Input name="image" placeholder="Image URL" onChange={handleChange} />

        {/* 🔥 Reusable Quill Editor */}
        <QuillEditor
          value={blog.content}
          onChange={(html) =>
            setBlog((prev) => ({ ...prev, content: html }))
          }
        />

        <Button onClick={handleSubmit}>Publish</Button>
      </Stack>
    </Box>
  );
};

export default AddBlog;

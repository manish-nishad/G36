import {
  Box,
  Button,
  Input,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getBlogById,
  updateBlog,
} from "../services/blogServices";
import QuillEditor from "../components/ui/QuillEditor";

const EditBlog = () => {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await getBlogById(id);
      setBlog(res.data);
    };
    fetchBlog();
  }, [id]);

  const handleUpdate = async () => {
    await updateBlog(id, blog);
    navigate("/admin/dashboard/blogs");
  };

  return (
    <Box bg="white" p={6} rounded="lg" shadow="md">
      <Heading size="md" mb={4}>
        Edit Blog
      </Heading>

      <Stack spacing={3}>
        <Input
          name="title"
          value={blog.title}
          onChange={handleChange}
        />

        <Input
          name="excerpt"
          value={blog.excerpt}
          onChange={handleChange}
        />

        <select
          name="author"
          onChange={handleChange}
          style={{ padding: "6px", border: "1px solid #d0d0d0", borderRadius: "6px" }}
        >
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

        <Input
          name="readTime"
          value={blog.readTime}
          onChange={handleChange}
        />

        <Input
          name="image"
          value={blog.image}
          onChange={handleChange}
        />

        {/* 🔥 Same Editor Component */}
        <QuillEditor
          value={blog.content}
          onChange={(html) =>
            setBlog((prev) => ({ ...prev, content: html }))
          }
        />

        <Button onClick={handleUpdate}>
          Update Blog
        </Button>
      </Stack>
    </Box>
  );
};

export default EditBlog;

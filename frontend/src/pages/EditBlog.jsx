import {
  Box,
  Button,
  Input,
  Stack,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getBlogById, updateBlog } from "../services/blogServices";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await getBlogById(id);
      setBlog(res.data);
    };
    fetchBlog();
  }, [id]);

  const handleChange = (e) =>
    setBlog({ ...blog, [e.target.name]: e.target.value });

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
        <Input name="title" value={blog.title || ""} onChange={handleChange} />
        <Input
          name="excerpt"
          value={blog.excerpt || ""}
          onChange={handleChange}
        />
        <Input
          name="author"
          value={blog.author || ""}
          onChange={handleChange}
        />
        <Input
          name="category"
          value={blog.category || ""}
          onChange={handleChange}
        />
        <Input
          name="readTime"
          value={blog.readTime || ""}
          onChange={handleChange}
        />
        <Input
          name="image"
          value={blog.image || ""}
          onChange={handleChange}
        />
        <Textarea
          name="content"
          rows={6}
          value={blog.content || ""}
          onChange={handleChange}
        />

        <Button colorScheme="blue" onClick={handleUpdate}>
          Update
        </Button>
      </Stack>
    </Box>
  );
};

export default EditBlog;

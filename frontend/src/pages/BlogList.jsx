import {
  Box,
  Button,
  Heading,
  Table,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getBlogs, deleteBlog } from "../services/blogServices";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const res = await getBlogs();
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    await deleteBlog(id);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  return (
    <Box bg="white" p={6} rounded="lg" shadow="md" padding={10}>
      <Heading size="md" mb={4}>
        Blog List
      </Heading>

      <Table.Root size="md" variant="line">
        <Table.Caption>All Blogs</Table.Caption>

        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>ID</Table.ColumnHeader>
            <Table.ColumnHeader>Title</Table.ColumnHeader>
            <Table.ColumnHeader>Category</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">
              Actions
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {blogs.map((blog) => (
            <Table.Row key={blog._id}>
              <Table.Cell>{blog.id}</Table.Cell>
              <Table.Cell>{blog.title}</Table.Cell>
              <Table.Cell>{blog.category}</Table.Cell>
              <Table.Cell textAlign="end">
                <Button
                  size="sm"
                  mr={2}
                  onClick={() =>
                    navigate(`/admin/dashboard/edit-blog/${blog._id}`)
                  }
                >
                  Edit
                </Button>

                <Button
                  size="sm"
                  colorScheme="red"
                  onClick={() => handleDelete(blog._id)}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={4}>
              Total Blogs: {blogs.length}
            </Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table.Root>
    </Box>
  );
};

export default BlogList;

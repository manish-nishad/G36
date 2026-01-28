import { Box, VStack, Button, Heading } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { adminLogout } from "../../utils/auth";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    adminLogout();
    navigate("/admin");
  };

  return (
    <Box w="240px" bg="white" p={5} shadow="md" padding={10}>
      <Heading size="md" mb={6}>
        Admin Panel
      </Heading>

      <VStack spacing={3} align="stretch">
        <Button as={Link} to="/admin/dashboard" variant="ghost">
          Dashboard
        </Button>

        {/* Blog List */}
        <Button
          as={Link}
          to="/admin/dashboard/blogs"
          variant="ghost"
        >
          Blog List
        </Button>

        <Button as={Link} to="/admin/dashboard/add-blog" variant="ghost">
          Add Blog
        </Button>

        <Button
          colorScheme="red"
          variant="outline"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </VStack>
    </Box>
  );
};

export default AdminSidebar;

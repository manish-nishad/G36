import { Box, Flex, Heading } from "@chakra-ui/react";
import AdminSidebar from "../components/admin/AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <Flex minH="100vh" bg="gray.100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <Box flex="1" p={6}>
        <Heading as="h1" size="lg" mb={4} marginTop={20}>
          Admin Dashboard
        </Heading>


        {/* Nested pages */}
        <Outlet />
      </Box>
    </Flex>
  );
};

export default AdminDashboard;

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Username and Password required");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        { username, password }
      );

      console.log("Login success:", res.data);

      if (res.data?.token) {
        localStorage.setItem("adminToken", res.data.token);
      }

      navigate("/admin/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message || "Invalid username or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.100">
      <Box bg="white" p={8} rounded="xl" shadow="lg" w="400px">
        <Stack spacing={6}>
          <Heading textAlign="center" size="lg">
            Admin Login
          </Heading>

          <Input
            placeholder="Admin Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            colorScheme="blue"
            isLoading={loading}
            onClick={handleLogin}
          >
            Login
          </Button>

          <Text fontSize="sm" textAlign="center" color="gray.500">
            Authorized admins only
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Admin;

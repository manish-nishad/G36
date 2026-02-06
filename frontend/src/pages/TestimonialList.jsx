import { Box, Button, Heading, Table } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getTestimonials, deleteTestimonial } from "../services/testimonialServices";
import { useNavigate } from "react-router-dom";

const TestimonialList = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await getTestimonials();
    const data = Array.isArray(res.data) ? res.data : res.data?.data || [];
    setItems(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this testimonial?")) return;
    await deleteTestimonial(id);
    fetchData();
  };

  return (
    <Box bg="white" p={6} rounded="lg" shadow="md">
      <Heading size="md" mb={4}>Testimonials</Heading>

      <Button mb={4} onClick={() => navigate("/admin/dashboard/add-testimonial")}>
        Add Testimonial
      </Button>

      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Company</Table.ColumnHeader>
            <Table.ColumnHeader>Rating</Table.ColumnHeader>
            <Table.ColumnHeader>Actions</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items.map((t) => (
            <Table.Row key={t._id || t.id}>
              <Table.Cell>{t.name}</Table.Cell>
              <Table.Cell>{t.company}</Table.Cell>
              <Table.Cell>{t.rating}</Table.Cell>
              <Table.Cell>
                <Button
                  size="sm"
                  mr={2}
                  onClick={() =>
                    navigate(`/admin/dashboard/edit-testimonial/${t._id || t.id}`)
                  }
                >
                  Edit
                </Button>
                <Button size="sm" onClick={() => handleDelete(t._id || t.id)}>
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default TestimonialList;

"use client";

import {
  Box,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Button,
  Tr,
} from "@chakra-ui/react";
import Swal from "sweetalert2";

export default function WebhookList(props) {
  const { list, server } = props;
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {list.map((hook) => (
          <Tr key={hook.id}>
            <Td>
              <HStack spacing="3">
                <Box>
                  <Text fontWeight="medium">{hook.name}</Text>
                  <Text color="fg.muted">{hook.id}</Text>
                </Box>
              </HStack>
            </Td>
            <Td>
              <HStack spacing="1">
                <Button colorScheme="blue">Edit</Button>
                <Button
                  colorScheme="green"
                  onClick={() => {
                    fetch(
                      `https://disgithook-api.tomatenkuchen.com/servers/${server}/hooks/${hook.id}/regen`,
                      {
                        method: "POST",
                        credentials: "include",
                      }
                    )
                      .then((res) => res.json())
                      .then((d) => {
                        if (d.success) {
                          Swal.fire({
                            icon: "success",
                            title: "Success!",
                            text: "Webhook secret regenerated successfully!",
                            input: "text",
                            inputLabel: "New Secret",
                            inputValue: d.secret,
                          });
                        } else {
                          Swal.fire({
                            icon: "error",
                            title: "Error!",
                            text: "An error occured while regenerating the webhook secret!",
                          });
                        }
                      })
                      .catch((error) => {
                        router.push("/");
                      });
                  }}
                >
                  Regenerate Secret
                </Button>
                <Button colorScheme="red">Delete</Button>
              </HStack>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

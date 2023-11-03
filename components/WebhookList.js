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

export default function WebhookList(props) {
  const { list } = props;
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>URL</Th>
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
                <Button colorScheme="blue">Edit Webhook</Button>
                <Button colorScheme="red">Delete</Button>
              </HStack>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

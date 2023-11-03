"use client";

import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  HStack,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Button,
  Tr,
} from "@chakra-ui/react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { IoArrowDown } from "react-icons/io5";

export default function ServerList(props) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>
            <HStack spacing="3">
              <Checkbox />
              <HStack spacing="1">
                <Text>Name</Text>
                <Icon as={IoArrowDown} color="fg.muted" boxSize="4" />
              </HStack>
            </HStack>
          </Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <HStack spacing="3">
              <Checkbox />
              <Avatar name="NAME" src="ICON" boxSize="10" />
              <Box>
                <Text fontWeight="medium">NAME</Text>
                <Text color="fg.muted">ID</Text>
              </Box>
            </HStack>
          </Td>
          <Td>
            <HStack spacing="1">
              <Button colorScheme="blue">Manage Server</Button>
            </HStack>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <HStack spacing="3">
              <Checkbox />
              <Avatar name="NAME" src="ICON" boxSize="10" />
              <Box>
                <Text fontWeight="medium">NAME</Text>
                <Text color="fg.muted">ID</Text>
              </Box>
            </HStack>
          </Td>
          <Td>
            <Button colorScheme="pink">Invite Bot</Button>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

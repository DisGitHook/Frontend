"use client";

import {
  Avatar,
  Box,
  Checkbox,
  HStack,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Button,
  Tr,
} from "@chakra-ui/react";
import { IoArrowDown } from "react-icons/io5";

export default function ServerList(props) {
  const { list } = props;
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
        {list.map((server) => (
          <Tr key={server.id}>
            <Td>
              <HStack spacing="3">
                <Checkbox />
                <Avatar
                  name={server.name}
                  src={`https://cdn.discordapp.com/icons/${server.id}/${server.icon}`}
                  boxSize="10"
                />
                <Box>
                  <Text fontWeight="medium">{server.name}</Text>
                  <Text color="fg.muted">{server.id}</Text>
                </Box>
              </HStack>
            </Td>
            <Td>
              <HStack spacing="1">
                {server.active ? (
                  <Button colorScheme="blue">Manage Server</Button>
                ) : (
                  <Button colorScheme="pink">Invite Bot</Button>
                )}
              </HStack>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

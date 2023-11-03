"use client";

import {
  Avatar,
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
import Link from "next/link";

export default function ServerList(props) {
  const { list } = props;
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>
            <HStack spacing="3">
              <HStack spacing="1">
                <Text>Name</Text>
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
                  <Button
                    colorScheme="blue"
                    as={Link}
                    href={`/dashboard/${server.id}`}
                  >
                    Manage Server
                  </Button>
                ) : (
                  <Button
                    colorScheme="pink"
                    as={"a"}
                    href={`https://discord.com/api/oauth2/authorize?client_id=1168822115810672711&permissions=0&scope=bot&guild_id=${server.id}`}
                  >
                    Invite Bot
                  </Button>
                )}
              </HStack>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

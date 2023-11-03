"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const NavLink = (props) => {
  const { children, url } = props;
  return (
    <Box
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      as={Link}
      href={url}
    >
      <Text>{children}</Text>
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const avatarUrl = Cookies.get("avatar");

  const scope = ["identify", "guilds"].join(" ");

  const OAUTH_QS = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
    response_type: "code",
    scope,
  }).toString();

  const OAUTH_URI = `https://discord.com/api/oauth2/authorize?${OAUTH_QS}`;
  const redirectOAuth = () => {
    window.location.href = OAUTH_URI;
  };

  const logout = () => {
    fetch(`https://disgithook-api.tomatenkuchen.com/logout`, {
      credentials: "include",
    })
      .then((response) => {
        router.push("/");
      })
      .catch((error) => {});
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Text fontWeight="bold">DisGitHook</Text>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink url={"/"}>Home</NavLink>
              <NavLink url={"/privacy"}>Privacy</NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              {avatarUrl ? (
                <>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar size={"sm"} src={avatarUrl} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={Link} href={"/dashboard"}>
                      Dashboard
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={logout}>Logout</MenuItem>
                  </MenuList>
                </>
              ) : (
                <Button colorScheme="blue" onClick={redirectOAuth}>
                  Login with Discord
                </Button>
              )}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavLink url={"/"}>Home</NavLink>
              <NavLink url={"/privacy"}>Privacy</NavLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

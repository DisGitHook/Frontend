import Head from "next/head";
import Navbar from "../components/Navbar";
import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DisGitHook</title>
        <meta name="description" content="DisGitHook Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box position="relative" height={{ lg: "720px" }}>
        <Container py={{ base: "16", md: "24" }} height="full">
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: "16" }}
            align={{ lg: "center" }}
            height="full"
          >
            <Stack spacing={{ base: "8", md: "12" }}>
              <Stack spacing="4">
                <Badge
                  variant="pill"
                  colorScheme="teal"
                  alignSelf="start"
                  size={{ base: "md", md: "lg" }}
                >
                  DisGitHook
                </Badge>
                <Stack
                  spacing={{ base: "4", md: "6" }}
                  maxW={{ md: "xl", lg: "md", xl: "xl" }}
                >
                  <Heading size={{ base: "md", md: "xl" }}>TITLE</Heading>
                  <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} spacing="3">
                <Button size={{ base: "lg", md: "xl" }}>Dashboard</Button>
                <Button variant="secondary" size={{ base: "lg", md: "xl" }}>
                  Invite Bot
                </Button>
              </Stack>
            </Stack>
            <Box
              pos={{ lg: "absolute" }}
              right="0"
              bottom="0"
              w={{ base: "full", lg: "50%" }}
              height={{ base: "96", lg: "full" }}
              sx={{
                clipPath: { lg: "polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)" },
              }}
            >
              <Img
                boxSize="full"
                objectFit="cover"
                src="https://picsum.photos/1920/1080"
                alt="Lady at work"
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}

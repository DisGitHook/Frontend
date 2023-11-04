import Head from "next/head";
import Navbar from "../components/Navbar";
import { Box, Container, Stack, Heading, Text } from "@chakra-ui/react";

export default function Privacy() {
  return (
    <div>
      <Head>
        <title>DisGitHook | Privacy</title>
        <meta name="description" content="DisGitHook | Privacy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box as="section" py={{ base: "16", md: "24" }}>
        <Container>
          <Stack spacing={{ base: "8", md: "10" }} align="center">
            <Stack spacing={{ base: "4", md: "6" }} textAlign="center">
              <Stack spacing="3">
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="medium"
                  color="accent"
                >
                  Privacy
                </Text>
                <Heading size={{ base: "md", md: "lg" }} fontWeight="semibold">
                  Privacy Policy
                </Heading>
              </Stack>
              <Text
                color="fg.muted"
                fontSize={{ base: "lg", md: "xl" }}
                maxW="3xl"
              >
                Work in progress
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}

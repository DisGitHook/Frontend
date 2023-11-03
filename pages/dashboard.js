import Head from "next/head";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import ServerList from "../components/ServerList";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Dashboard() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      fetch(`https://disgithook-api.tomatenkuchen.com/login?code=${code}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const avatarCookie = Cookies.get("avatar");
      if (!avatarCookie) {
        router.push("/");
      }
    }
  }, [code]);

  return (
    <div>
      <Head>
        <title>DisGitHook | Dashboard</title>
        <meta name="description" content="DisGitHook | Dashboard" />
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
                  Dashboard
                </Text>
                <Heading size={{ base: "md", md: "lg" }} fontWeight="semibold">
                  Welcome to our dashboard
                </Heading>
              </Stack>
              <Text
                color="fg.muted"
                fontSize={{ base: "lg", md: "xl" }}
                maxW="3xl"
              >
                Select the server you want to manage
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container py={{ base: "4", md: "8" }} px={{ base: "0", md: 8 }}>
        <Box
          bg="bg.surface"
          boxShadow={{ base: "none", md: "sm" }}
          borderRadius={{ base: "none", md: "lg" }}
        >
          <Stack spacing="5">
            <Box px={{ base: "4", md: "6" }} pt="5">
              <Stack
                direction={{ base: "column", md: "row" }}
                justify="space-between"
              >
                <Text textStyle="lg" fontWeight="medium">
                  Server List
                </Text>
              </Stack>
            </Box>
            <Box overflowX="auto">
              <ServerList />
            </Box>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}

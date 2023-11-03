import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import WebhookList from "../../components/WebhookList";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    const avatarCookie = Cookies.get("avatar");
    if (!avatarCookie) {
      router.push("/");
    }
  });

  const [hooks, setHooks] = useState([]);

  useEffect(() => {
    fetch(
      `https://disgithook-api.tomatenkuchen.com/servers/${router.query.server}/hooks`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((d) => setHooks(d.hooks))
      .catch((error) => {
        router.push("/");
      });
  }, [router]);

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
          <Stack spacing={{ base: "8", md: "10" }}>
            <Stack spacing={{ base: "4", md: "6" }}>
              <Stack spacing="3">
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="medium"
                  color="accent"
                >
                  Dashboard
                </Text>
                <Heading size={{ base: "md", md: "lg" }} fontWeight="semibold">
                  Manage Server
                </Heading>
              </Stack>
              <Text
                color="fg.muted"
                fontSize={{ base: "lg", md: "xl" }}
                maxW="3xl"
              >
                Create, edit and delete webhooks for your server.
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
                  Webhook List
                </Text>
              </Stack>
            </Box>
            <Box overflowX="auto">
              <WebhookList list={hooks} server={router.query.server} />
            </Box>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}

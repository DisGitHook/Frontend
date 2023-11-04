import Head from "next/head";
import Navbar from "../../../components/Navbar";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Container,
  StackDivider,
  Text,
  FormLabel,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function CreateWebhook() {
  const router = useRouter();
  useEffect(() => {
    const avatarCookie = Cookies.get("avatar");
    if (!avatarCookie) {
      router.push("/");
    }
  });

  const [hook, setHook] = useState({
    name: "",
    message: "",
    filterEvent: "",
    filterAction: "",
  });
  useEffect(() => {
    if (!router.query.server) return;
    if (!router.query.hook) return;
    fetch(
      `https://disgithook-api.tomatenkuchen.com/servers/${router.query.server}/hooks`,
      {
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((d) => {
        const hook = d.hooks.find((hook) => hook.id === router.query.hook);
        if (!hook) {
          router.push("/");
        }
        setHook({
          name: hook.name,
          message: hook.message,
          filterEvent: hook.filterEvent,
          filterAction: hook.filterAction,
        });
      })
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
      <Container py={{ base: "4", md: "8" }}>
        <Stack spacing="5" divider={<StackDivider />}>
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: "5", lg: "8" }}
            justify="space-between"
          >
            <Box flexShrink={0}>
              <Text textStyle="lg" fontWeight="medium">
                Edit Webhook
              </Text>
              <Text color="fg.muted" textStyle="sm">
                Edit a webhook for your server
              </Text>
            </Box>
            <Box bg="bg.surface" boxShadow="sm" borderRadius="lg" flex="1">
              <Stack
                spacing="5"
                px={{ base: "4", md: "6" }}
                py={{ base: "5", md: "6" }}
              >
                <FormControl id="webhook_name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <InputGroup>
                    <Input value={hook.name} />
                  </InputGroup>
                </FormControl>
                <FormControl id="json_message">
                  <FormLabel>JSON Message</FormLabel>
                  <Textarea rows={3} resize="none" value={hook.message} />
                </FormControl>
                <FormControl id="event_filter">
                  <FormLabel>Event Filter</FormLabel>
                  <Textarea rows={3} resize="none" value={hook.filterEvent} />
                </FormControl>
                <FormControl id="action_filter">
                  <FormLabel>Action Filter</FormLabel>
                  <Textarea rows={3} resize="none" value={hook.filterAction} />
                </FormControl>
              </Stack>
              <Divider />
              <Flex direction="row-reverse" py="4" px={{ base: "4", md: "6" }}>
                <Button>Edit Webhook</Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    router.push(`/dashboard/${router.query.server}`);
                  }}
                  mr="4"
                >
                  Back
                </Button>
              </Flex>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

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
import { useEffect } from "react";
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
                Create Webhook
              </Text>
              <Text color="fg.muted" textStyle="sm">
                Create a new webhook for your server
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
                    <Input />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Type</FormLabel>
                  <RadioGroup defaultValue="channel" name="type">
                    <Stack direction="row">
                      <Radio value="channel">Channel</Radio>
                      <Radio value="webhook">Webhook</Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
                <FormControl id="value" isRequired>
                  <FormLabel>Channel ID / Webhook URL</FormLabel>
                  <InputGroup>
                    <Input />
                  </InputGroup>
                </FormControl>
                <FormControl id="json_message">
                  <FormLabel>JSON Message</FormLabel>
                  <Textarea rows={3} resize="none" />
                </FormControl>
                <FormControl id="event_filter">
                  <FormLabel>Event Filter</FormLabel>
                  <Textarea rows={3} resize="none" />
                </FormControl>
                <FormControl id="action_filter">
                  <FormLabel>Action Filter</FormLabel>
                  <Textarea rows={3} resize="none" />
                </FormControl>
              </Stack>
              <Divider />
              <Flex direction="row-reverse" py="4" px={{ base: "4", md: "6" }}>
                <Button
                  onClick={() => {
                    let name = document.getElementById("webhook_name").value;
                    let type = document.querySelector(
                      'input[name="type"]:checked'
                    ).value;
                    let value = document.getElementById("value").value;
                    let json_message =
                      document.getElementById("json_message").value || "";
                    let event_filter =
                      document.getElementById("event_filter").value || "";
                    let action_filter =
                      document.getElementById("action_filter").value || "";

                    if (!name || !type || !value) {
                      Swal.fire({
                        icon: "error",
                        title: "Error!",
                        text: "Please fill out all required fields!",
                      });
                      return;
                    }

                    let body = {
                      name,
                      message: json_message,
                      filterEvent: event_filter,
                      filterAction: action_filter,
                    };
                    if (type === "webhook") {
                      body.webhook = value;
                      body.channel = "";
                    } else if (type === "channel") {
                      body.channel = value;
                      body.webhook = "";
                    }

                    fetch(
                      `https://disgithook-api.tomatenkuchen.com/servers/${router.query.server}/hooks`,
                      {
                        method: "POST",
                        credentials: "include",
                        body: JSON.stringify(body),
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    )
                      .then((res) => res.json())
                      .then((d) => {
                        if (d.success) {
                          Swal.fire({
                            icon: "success",
                            title: "Success!",
                            text: "Webhook created successfully!",
                            html: `
                                <b>Full POST URL:</b>
                                <div style="text-align: left;">
                                    <code>https://disgithook-api.tomatenkuchen.com/hook/${d.id}/${d.secret}</code>
                                </div>
                                <hr>
                                <b>POST URL with secret in header:</b><br>
                                <div style="text-align: left;">
                                    <b>URL:</b>
                                    <code>https://disgithook-api.tomatenkuchen.com/hook/${d.id}</code><br>
                                    <b>Secret:</b> <code>${d.secret}</code>
                                </div>
                                `,
                          });
                        } else {
                          Swal.fire({
                            icon: "error",
                            title: "Error!",
                            text: "An error occured while creating the webhook!",
                          });
                        }
                      })
                      .catch((error) => {
                        router.push("/");
                      });
                  }}
                >
                  Create Webhook
                </Button>
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

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
  SimpleGrid,
  Square,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsStars } from "react-icons/bs";
import { IoRocketSharp } from "react-icons/io5";
import { FaPaintBrush } from "react-icons/fa";

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
                  DisGitHook v1.0.0
                </Badge>
                <Stack
                  spacing={{ base: "4", md: "6" }}
                  maxW={{ md: "xl", lg: "md", xl: "xl" }}
                >
                  <Heading size={{ base: "md", md: "xl" }}>DisGitHook</Heading>
                  <Text fontSize={{ base: "lg", md: "xl" }} color="fg.muted">
                    Start managing your github webhooks with ease.
                  </Text>
                </Stack>
              </Stack>
              <Stack direction={{ base: "column", md: "row" }} spacing="3">
                <Button
                  size={{ base: "lg", md: "xl" }}
                  as={Link}
                  href={"/dashboard"}
                >
                  Dashboard
                </Button>
                <Button
                  variant="secondary"
                  size={{ base: "lg", md: "xl" }}
                  as={"a"}
                  href={
                    "https://discord.com/api/oauth2/authorize?client_id=1168822115810672711&scope=bot"
                  }
                >
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
                src="https://i.imgur.com/MoAxv3O.png"
                alt="DisGitHook"
              />
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box as="section" bg="bg.surface">
        <Container
          py={{
            base: "16",
            md: "24",
          }}
        >
          <Stack
            spacing={{
              base: "12",
              md: "16",
            }}
          >
            <Stack
              spacing={{
                base: "4",
                md: "5",
              }}
              maxW="3xl"
            >
              <Stack spacing="3">
                <Text
                  fontSize={{
                    base: "sm",
                    md: "md",
                  }}
                  fontWeight="semibold"
                  color="accent"
                >
                  Features
                </Text>
                <Heading
                  size={{
                    base: "sm",
                    md: "md",
                  }}
                >
                  What can you expect?
                </Heading>
              </Stack>
              <Text
                color="fg.muted"
                fontSize={{
                  base: "lg",
                  md: "xl",
                }}
              >
                The most important features of our bot.
              </Text>
            </Stack>
            <SimpleGrid
              columns={{
                base: 1,
                md: 2,
                lg: 3,
              }}
              columnGap={8}
              rowGap={{
                base: 10,
                md: 16,
              }}
            >
              <Stack
                spacing={{
                  base: "4",
                  md: "5",
                }}
              >
                <Square
                  size={{
                    base: "10",
                    md: "12",
                  }}
                  bg="accent"
                  color="fg.inverted"
                  borderRadius="lg"
                >
                  <Icon
                    as={BsStars}
                    boxSize={{
                      base: "5",
                      md: "6",
                    }}
                  />
                </Square>
                <Stack
                  spacing={{
                    base: "1",
                    md: "2",
                  }}
                  flex="1"
                >
                  <Text
                    fontSize={{
                      base: "lg",
                      md: "xl",
                    }}
                    fontWeight="medium"
                  >
                    Customizable Webhooks
                  </Text>
                  <Text color="fg.muted">
                    Our bot allows you to create, configure, and customize
                    webhooks for your GitHub repositories effortlessly. Tailor
                    your notifications to suit your preferences.
                  </Text>
                </Stack>
              </Stack>
              <Stack
                spacing={{
                  base: "4",
                  md: "5",
                }}
              >
                <Square
                  size={{
                    base: "10",
                    md: "12",
                  }}
                  bg="accent"
                  color="fg.inverted"
                  borderRadius="lg"
                >
                  <Icon
                    as={IoRocketSharp}
                    boxSize={{
                      base: "5",
                      md: "6",
                    }}
                  />
                </Square>
                <Stack
                  spacing={{
                    base: "1",
                    md: "2",
                  }}
                  flex="1"
                >
                  <Text
                    fontSize={{
                      base: "lg",
                      md: "xl",
                    }}
                    fontWeight="medium"
                  >
                    Real-time Updates
                  </Text>
                  <Text color="fg.muted">
                    Stay in the loop with real-time notifications whenever there
                    are new commits, issues, pull requests, or any other GitHub
                    activity in your repositories.
                  </Text>
                </Stack>
              </Stack>
              <Stack
                spacing={{
                  base: "4",
                  md: "5",
                }}
              >
                <Square
                  size={{
                    base: "10",
                    md: "12",
                  }}
                  bg="accent"
                  color="fg.inverted"
                  borderRadius="lg"
                >
                  <Icon
                    as={FaPaintBrush}
                    boxSize={{
                      base: "5",
                      md: "6",
                    }}
                  />
                </Square>
                <Stack
                  spacing={{
                    base: "1",
                    md: "2",
                  }}
                  flex="1"
                >
                  <Text
                    fontSize={{
                      base: "lg",
                      md: "xl",
                    }}
                    fontWeight="medium"
                  >
                    Advanced Templates
                  </Text>
                  <Text color="fg.muted">
                    By default, our bot sends the messages using templates that
                    are similar to Discord. However, you can customize the
                    message per event-action combination to your liking.
                  </Text>
                </Stack>
              </Stack>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}

import { Card, Heading, Text, Link, Center } from "@chakra-ui/react";
import { IoMdBackspace } from "react-icons/io";
import LoginForm from "./loginForm";

export default function SignIn() {
  return (
    <>
      <Text></Text>
      <Card
        color="grey.200"
        bg="mainBg.200"
        py={6}
        px={24}
        my={20}
        borderRadius={10}
      >
        <Text fontSize={30} mt={-4} ml={-20}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <IoMdBackspace />
          </Link>
        </Text>
        <Center>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Heading>SpaceS</Heading>
          </Link>
        </Center>
        <Center>
          <Text>Log In to your account</Text>
        </Center>
        <LoginForm />
      </Card>
    </>
  );
}

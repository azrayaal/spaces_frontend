import { Card, Heading, Text, Center } from "@chakra-ui/react";
import { IoMdBackspace } from "react-icons/io";
import LoginForm from "./loginForm";
import { Link } from "react-router-dom";

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
          <Link to="/" style={{ textDecoration: "none" }}>
            <IoMdBackspace />
          </Link>
        </Text>
        <Center>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Heading>space</Heading>
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

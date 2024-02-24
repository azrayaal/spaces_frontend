import {
  Card,
  Heading,
  Text,
  Box,
  Stack,
  Input,
  Button,
  Link,
  Center,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { IoMdBackspace } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import LoginForm from "./loginForm";

export default function SignIn() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const toast = useToast();
  // const navigate = useNavigate();

  // const onSubmit = async () => {
  //   const data = {
  //     username,
  //     password,
  //   };
  //   if (data.username && data.password) {
  //     try {
  //       const response = await axios.post(
  //         `http://localhost:3000/api/v1/signIn`,
  //         data
  //       );

  //       // console.log("data data login", response.data);
  //       const { token } = response.data;
  //       const tokenBase64 = window.btoa(token);
  //       Cookies.set(
  //         "token",
  //         tokenBase64
  //         // , {
  //         //   expires: 1,
  //         // }
  //       );
  //       if (token) {
  //         toast({
  //           title: "Log in status",
  //           description: "Success!",
  //           position: "top-left",
  //           status: "success",
  //           duration: 9000,
  //           isClosable: true,
  //         });
  //         navigate("/");
  //       } else {
  //         toast({
  //           title: "Log in status",
  //           description: `${response.data}`,
  //           position: "top-left",
  //           status: "error",
  //           duration: 9000,
  //           isClosable: true,
  //         });
  //       }
  //     } catch (error) {
  //       console.log(`Login failed`, error);
  //     }
  //   } else {
  //     toast({
  //       title: "Log in status",
  //       description: "All data must be filled!",
  //       position: "top-left",
  //       status: "error",
  //       duration: 9000,
  //       isClosable: true,
  //     });
  //   }
  // };

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

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
} from "@chakra-ui/react";
import { useState } from "react";
import { IoMdBackspace } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [username, setUsername] = useState("");
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = () => {
    const data = {
      username,
      full_name,
      email,
      password,
    };
    const dataString = JSON.stringify(data);
    localStorage.setItem("DataRegister", dataString);
    navigate("/register-final");
  };

  return (
    <>
      <Card
        color="grey.200"
        bg="mainBg.200"
        py={6}
        px={24}
        my={20}
        borderRadius={10}
      >
        <Text fontSize={30} mt={-4} ml={-20}>
          <Link href="/signin" style={{ textDecoration: "none" }}>
            <IoMdBackspace />
          </Link>
        </Text>
        <Center>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Heading>SpaceS</Heading>
          </Link>
        </Center>
        <Center>
          <Text>Create your account</Text>
        </Center>
        <Box py={4}>
          <Stack spacing={3}>
            <Input
              borderRadius={10}
              placeholder="Email"
              type="email"
              w={300}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              borderRadius={10}
              placeholder="Full Name"
              w={300}
              value={full_name}
              onChange={(event) => setFull_name(event.target.value)}
            />
            <Input
              borderRadius={10}
              placeholder="Username"
              w={300}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Button onClick={onSubmit}>
              Register
              {/* Register */}
            </Button>
          </Stack>
        </Box>
      </Card>
    </>
  );
}

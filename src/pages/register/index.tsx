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

export default function Register() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
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
          <Link href="/" style={{ textDecoration: "none" }}>
            <IoMdBackspace />
          </Link>
        </Text>
        <Center>
          <Heading>SpaceS</Heading>
        </Center>
        <Center>
          <Text>Create your account</Text>
        </Center>
        <Box py={4}>
          <Stack spacing={3}>
            <Input
              //   focusBorderColor="lime"
              borderRadius={10}
              placeholder="Email"
              w={300}
            />
            <Input
              //   focusBorderColor="lime"
              borderRadius={10}
              placeholder="Full Name"
              w={300}
            />
            <Input
              //   focusBorderColor="lime"
              borderRadius={10}
              placeholder="Username"
              w={300}
            />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button>Register</Button>
          </Stack>
        </Box>
      </Card>
    </>
  );
}
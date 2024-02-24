import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onSubmitLogin } from "../../hooks";

export default function LoginForm() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const handleRegisterLink = () => {
    navigate("/register");
  };

  const { handleDataLogin, fetchLogin } = onSubmitLogin();

  return (
    <>
      <form onSubmit={(e) => fetchLogin(e)}>
        <Box py={4}>
          <Stack spacing={3}>
            <Input
              placeholder="Username"
              w={300}
              name="username"
              type={"username"}
              //   value={"username"}
              //   onChange={(event) => setUsername(event.target.value)}
              onChange={(e) => handleDataLogin(e)}
            />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                name="password"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                // value={"password"}
                //   onChange={(event) => setPassword(event.target.value)}
                onChange={(e) => handleDataLogin(e)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <a href="" onClick={handleRegisterLink}>
              <Text>Create account?</Text>
            </a>
            <Button type="submit">Log In</Button>
            {/* <Button onClick={onSubmit}>Log In</Button> */}
          </Stack>
        </Box>
      </form>
    </>
  );
}

import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
              onChange={(e) => handleDataLogin(e)}
            />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                name="password"
                type={show ? "text" : "password"}
                placeholder="Enter password"
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
          </Stack>
        </Box>
      </form>
    </>
  );
}

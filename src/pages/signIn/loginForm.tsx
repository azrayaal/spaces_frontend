import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import { onSubmitLogin } from "../../hooks";
import { Link } from "react-router-dom";
import { validationLogin } from "../../hooks/validation";
import { Controller } from "react-hook-form";

export default function LoginForm() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { control, handleSubmit } = validationLogin();

  const { fetchLogin } = onSubmitLogin();

  return (
    <>
      <form onSubmit={handleSubmit(fetchLogin)}>
        <Box py={4}>
          <Stack spacing={3}>
            <Controller
              name="username"
              control={control}
              render={({ field, fieldState }) => (
                <FormControl isInvalid={!!fieldState.error?.message}>
                  <FormLabel>Username</FormLabel>
                  <Input
                    placeholder="Username"
                    w={300}
                    name="username"
                    type={"username"}
                    onChange={field.onChange}
                    value={field.value}
                    onBlur={field.onBlur}

                    // onChange={(e) => handleDataLogin(e)}
                  />
                  {!!fieldState.error?.message ? (
                    <FormErrorMessage>
                      {fieldState.error.message}
                    </FormErrorMessage>
                  ) : (
                    <FormHelperText>
                      We'll never share your data.
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />

            <InputGroup size="md">
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <FormControl isInvalid={!!fieldState.error?.message}>
                    <Input
                      placeholder="Enter password"
                      w={300}
                      name="password"
                      type={show ? "text" : "password"}
                      onChange={field.onChange}
                      value={field.value}
                      onBlur={field.onBlur}
                      // onChange={(e) => handleDataLogin(e)}
                    />
                    {!!fieldState.error?.message && (
                      <FormErrorMessage>
                        {fieldState.error.message}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                )}
              />

              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Link to="/register">
              <Text>Create account?</Text>
            </Link>
            <Button type="submit">Log In</Button>
          </Stack>
        </Box>
      </form>
    </>
  );
}

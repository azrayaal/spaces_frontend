import {
  Card,
  Heading,
  Text,
  Box,
  Stack,
  Button,
  Center,
  InputGroup,
  InputRightElement,
  Image,
  Input,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdBackspace } from "react-icons/io";
import Registerform from "./components/registerform";
import { validationRegister } from "../../hooks/validation";
import { useOnsubmitRegister } from "../../hooks";

export default function Register() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { control, handleSubmit } = validationRegister();
  const { postRegister, handleDataRegister, imagePreview } =
    useOnsubmitRegister();

  return (
    <>
      <Card
        color="grey.200"
        bg="mainBg.200"
        py={6}
        px={10}
        my={10}
        borderRadius={10}
      >
        <Text fontSize={30} mt={-4} ml={-6}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <IoMdBackspace />
          </Link>
        </Text>
        <Center>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Heading>space</Heading>
          </Link>
        </Center>
        <Center>
          <Text>Create your account</Text>
        </Center>
        <Box py={4}>
          <Stack spacing={3}>
            <form
              onSubmit={handleSubmit(postRegister)}
              encType="multipart/form-data"
            >
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <GridItem w="100%">
                  <Registerform
                    control={control}
                    label={"Email"}
                    name={"email"}
                    placeholder={"email"}
                    type={"email"}
                    textHelper={""}
                    id={"email"}
                    accept={""}
                    formEncType={"text/plain"}
                    display={""}
                  />
                  <Registerform
                    control={control}
                    label={"Full Name"}
                    name={"full_name"}
                    placeholder={"full name"}
                    type={"text"}
                    textHelper={""}
                    id={"full_name"}
                    accept={""}
                    formEncType={"text/plain"}
                    display={""}
                  />
                  <Box pt={"0.70rem"}>
                    <InputGroup>
                      <Registerform
                        control={control}
                        label={"Password"}
                        name={"password"}
                        placeholder={"password"}
                        type={show ? "text" : "password"}
                        textHelper={""}
                        id={"password"}
                        accept={""}
                        formEncType={"text/plain"}
                        display={""}
                      />

                      <InputRightElement width="4.5rem" pt={"3.3rem"}>
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </Box>
                </GridItem>
                <GridItem w="100%">
                  {/* avatar */}
                  <label htmlFor="image">
                    {imagePreview ? (
                      <Center>
                        <Image
                          width={120}
                          height={120}
                          borderRadius={"100%"}
                          src={imagePreview}
                          className="img-upload"
                          alt="upload"
                        />
                      </Center>
                    ) : (
                      <Center>
                        <Image
                          borderRadius={"100%"}
                          src="/anonymous-avatar-icon-19.png"
                          width={120}
                          height={120}
                          className="img-upload"
                          alt="upload"
                        />
                      </Center>
                    )}
                  </label>
                  <InputGroup py={2}>
                    <Box className="input img">
                      <Box
                        w={300}
                        as="label"
                        htmlFor="profile_picture"
                        cursor="pointer"
                        display="inline-block"
                        margin="auto"
                      >
                        <Center>
                          <Button as="span">Avatar</Button>
                        </Center>
                      </Box>
                      <Input
                        type="file"
                        id="profile_picture"
                        accept="image/png, image/jpeg"
                        name="profile_picture"
                        formEncType="multipart/form-data"
                        onChange={handleDataRegister}
                        display={"none"}
                      />
                    </Box>
                  </InputGroup>
                  {/* end of avatar */}

                  <Registerform
                    control={control}
                    label={"username"}
                    name={"username"}
                    placeholder={"username"}
                    type={"text"}
                    textHelper={""}
                    id={"username"}
                    accept={""}
                    formEncType={"text/plain"}
                    display={""}
                  />
                </GridItem>
              </Grid>
              <Registerform
                control={control}
                label={"Bio"}
                name={"profile_description"}
                placeholder={"Bio"}
                type={"text"}
                textHelper={""}
                id={"profile_picture"}
                accept={"image/png, image/jpeg"}
                formEncType={"text/plain"}
                display={""}
              />
              <Flex justify="center" mt={4}>
                <Button type="submit">Register</Button>
              </Flex>
            </form>
          </Stack>
        </Box>
      </Card>
    </>
  );
}

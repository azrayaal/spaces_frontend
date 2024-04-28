import {
  Card,
  Heading,
  Text,
  Box,
  Stack,
  Input,
  Button,
  Center,
  Image,
  InputGroup,
} from "@chakra-ui/react";
import { IoMdBackspace } from "react-icons/io";
import { useOnsubmitRegister } from "../../hooks";
import { Link } from "react-router-dom";
import Registerform from "./components/registerform";
import { validationRegisterFinal } from "../../hooks/validation";

export default function RegisterFinal() {
  const { control, handleSubmit } = validationRegisterFinal();
  const { postRegister, handleDataRegister, imagePreview } =
    useOnsubmitRegister();

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
          <Link to="/register" style={{ textDecoration: "none" }}>
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
        <Box py={3}>
          <form
            encType="multipart/form-data"
            onSubmit={handleSubmit(postRegister)}
          >
            <Stack spacing={3}>
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
              <InputGroup py={5}>
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
              <Button type="submit">Register </Button>
            </Stack>
          </form>
        </Box>
      </Card>
    </>
  );
}

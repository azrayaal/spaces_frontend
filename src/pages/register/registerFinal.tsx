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
  Image,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { IoMdBackspace } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useOnsubmitRegister } from "../../hooks";

export default function RegisterFinal() {
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
        <Box py={3}>
          <form encType="multipart/form-data" onSubmit={(e) => postRegister(e)}>
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
              <Input
                borderRadius={10}
                placeholder="Bio"
                w={300}
                id="profile_description"
                name="profile_description"
                onChange={(e) => handleDataRegister(e)}
              />
              <Button type="submit">Register </Button>
            </Stack>
          </form>
        </Box>
      </Card>
    </>
  );
}

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
import API from "../../libs/api";

export default function RegisterFinal() {
  const [profile_picture, setProfile_picture] = useState<any>("");
  const [profile_description, setProfile_description] = useState("");
  // const [image, setImage] = ("");
  const [imagePreview, setImagePreview] = useState<any>(null);

  const toast = useToast();
  const navigate = useNavigate();

  const onSubmit = async () => {
    const storedData = localStorage.getItem("DataRegister");
    const headers = {
      "Content-type": "multipart/form-data",
    };
    if (storedData) {
      const storedDataObj = JSON.parse(storedData);
      console.log("data stored", profile_picture);

      const data = {
        profile_description,
        profile_picture,
        ...storedDataObj,
      };

      console.log("Merged data:", data);

      axios
        .post(`http://localhost:3000/api/v1/register`, data, {
          headers,
        })
        .then((response) => {
          console.log("register", response.data);
          console.log("register", response);
          if (response.status === 200) {
            toast({
              title: "Register status: ",
              description: `${response.data.message}`,
              position: "top-left",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          } else {
            toast({
              title: "Register status: ",
              description: "Failed!",
              position: "top-left",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
          localStorage.clear();
          navigate("/signin");
        })
        .catch((error) => {
          console.error("Error registering:", error);
        });
    } else {
      console.log("No data found in local storage.");
    }
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
        <Box py={3}>
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
                  htmlFor="profile_description"
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
                  id="profile_description"
                  accept="image/png, image/jpeg"
                  name="profile_description"
                  formEncType="multipart/form-data"
                  onChange={(event) => {
                    // console.log(event.target.files);
                    const img = event.target.files![0];
                    setImagePreview(URL.createObjectURL(img));
                    return setProfile_picture(img);
                  }}
                  display={"none"}
                />
                {/* <InputRightElement width="4.5rem" left={0}>
                  
                </InputRightElement> */}
              </Box>
            </InputGroup>
            <Input
              borderRadius={10}
              placeholder="Bio"
              w={300}
              value={profile_description}
              onChange={(event) => setProfile_description(event.target.value)}
            />
            <Button onClick={onSubmit}>Register </Button>
          </Stack>
        </Box>
      </Card>
    </>
  );
}

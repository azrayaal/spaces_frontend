import {
  Card,
  Box,
  Heading,
  Image,
  Center,
  Button,
  Flex,
  Text,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiImageAddFill } from "react-icons/ri";

export default function EditProfile() {
  const [editFull_name, setEditFullName] = useState<string>("");
  const [editusername, setEditUsername] = useState<string>("");
  const [editbio, setEditBio] = useState<string>("");
  const [editProfilePicture, setEditProfilePicture] = useState<any>();
  const [profilePreview, setProfilePreview] = useState<any>(null);
  const [editHeader, setEditHeader] = useState<any>();
  const [headerPreview, setHeaderPreview] = useState<any>(null);

  console.log(profilePreview);
  console.log(editFull_name);
  console.log(editProfilePicture);

  return (
    // <Box pb={4}>
    <Box bg="mainBg.200" borderRadius="lg">
      {/* end of input Header */}
      <Box className="input header">
        <Box
          as="label"
          htmlFor="header"
          cursor="pointer"
          display="inline-block"
          margin="auto"
          position={"absolute"}
          zIndex={4}
          right={"55%"}
          top={"15%"}
        >
          <Center>
            <Text color={"black"} fontSize={52}>
              <RiImageAddFill />
            </Text>
          </Center>
        </Box>
        <Input
          type="file"
          id="header"
          accept="image/png, image/jpeg"
          name="header"
          formEncType="multipart/form-data"
          onChange={(event) => {
            const img = event.target.files![0];
            setHeaderPreview(URL.createObjectURL(img));
            return setEditHeader(img);
          }}
          display={"none"}
        />
      </Box>
      {/* end of input Header */}
      <label htmlFor="header">
        {headerPreview ? (
          <>
            <Image
              mt={4}
              zIndex={6}
              borderColor="gray.200"
              objectFit="cover"
              borderTopRadius={"md"}
              h={200}
              w="100%"
              src={headerPreview}
              alt="Caffe Latte"
            />
          </>
        ) : (
          <>
            <Image
              mt={4}
              zIndex={1}
              borderColor="gray.200"
              objectFit="cover"
              borderTopRadius={"md"}
              h={200}
              w="100%"
              src="https://source.unsplash.com/EvZZ_68sQwM"
              alt="Caffe Latte"
              filter="grayscale(80%)"
            />
          </>
        )}
      </label>

      <Box m={4} color="gray.100">
        <Box my={3} mb={6} position="relative">
          <Center>
            {/* input image avatar */}
            <Box className="input img">
              <Box
                as="label"
                htmlFor="profile_picture"
                cursor="pointer"
                display="inline-block"
                margin="auto"
                position={"absolute"}
                zIndex={4}
                left={100}
                top={6}
              >
                <Center>
                  <Text color={"teal"} fontSize={32}>
                    <RiImageAddFill />
                  </Text>
                </Center>
              </Box>
              <Input
                type="file"
                id="profile_picture"
                accept="image/png, image/jpeg"
                name="profile_picture"
                formEncType="multipart/form-data"
                onChange={(event) => {
                  const img = event.target.files![0];
                  setProfilePreview(URL.createObjectURL(img));
                  return setEditProfilePicture(img);
                }}
                display={"none"}
              />
            </Box>
            {/* end ofinput image avatar */}
            <label htmlFor="image">
              {profilePreview ? (
                <>
                  <Box
                    as="label"
                    htmlFor="profile_picture"
                    cursor="pointer"
                    display="inline-block"
                    margin="auto"
                    position={"absolute"}
                    zIndex={5}
                    left={100}
                    top={6}
                  >
                    <Center>
                      <Text color={"teal"} fontSize={32}>
                        <RiImageAddFill />
                      </Text>
                    </Center>
                  </Box>
                  <Image
                    position="absolute"
                    zIndex={4}
                    top={-14}
                    border="4px"
                    borderColor="mainBg.200"
                    borderRadius="100%"
                    objectFit="cover"
                    h={28}
                    w={28}
                    left={2}
                    maxW={{ base: "100%", sm: "200px" }}
                    src={profilePreview}
                    className="profile_picture-upload"
                    alt="upload"
                  />
                </>
              ) : (
                <></>
              )}
            </label>
            <Image
              position="absolute"
              zIndex={2}
              border="4px"
              borderColor="mainBg.200"
              borderRadius="100%"
              objectFit="cover"
              h={28}
              w={28}
              left={2}
              maxW={{ base: "100%", sm: "200px" }}
              // src={`${profilePict}.jpg`}
              filter="grayscale(80%)"
              src={`https://source.unsplash.com/EvZZ_68sQwM`}
              alt="Caffe Latte"
            />
          </Center>
          <Box pt={0}>
            <Button
              colorScheme="teal"
              size="md"
              borderRadius="md"
              float={"right"}
            >
              Save Profile
            </Button>
          </Box>
        </Box>

        <textarea
          id="myTextarea"
          style={{
            color: "#CBD5E0",
            backgroundColor: "#262626",
            width: "100%",
            fontSize: "1.1rem",
            lineHeight: "1.5",
            resize: "none",
            outline: "none",
            marginTop: "24px",
          }}
          rows={1}
          placeholder="Full Name"
          value={editFull_name}
          onChange={(event) => setEditFullName(event.target.value)}
        />
        <textarea
          id="myTextarea"
          style={{
            color: "#CBD5E0",
            backgroundColor: "#262626",
            width: "100%",
            fontSize: "1rem",
            lineHeight: "1.5",
            resize: "none",
            outline: "none",
            // marginTop: "24px",
          }}
          rows={1}
          placeholder="@username"
          value={editusername}
          onChange={(event) => setEditUsername(event.target.value)}
        />
        <textarea
          id="myTextarea"
          style={{
            color: "#CBD5E0",
            backgroundColor: "#262626",
            width: "100%",
            fontSize: "1rem",
            lineHeight: "1.5",
            resize: "none",
            outline: "none",
            marginTop: "8px",
            marginBottom: "8px",
          }}
          rows={1}
          placeholder="BIO"
          value={editbio}
          onChange={(event) => setEditBio(event.target.value)}
        />
        <Text fontSize="md" color={"gray.400"} pb={4}>
          Joined may 2020
        </Text>
      </Box>
    </Box>
    // </Box>
  );
}

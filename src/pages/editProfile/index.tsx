import { Box, Image, Center, Button, Text, Input } from "@chakra-ui/react";
import { useState } from "react";
import { RiImageAddFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { RootState } from "../../datas/data-types";
import { useImgUrl } from "../../hooks";

export default function EditProfile() {
  const [editFull_name, setEditFullName] = useState<string>("");
  const [editusername, setEditUsername] = useState<string>("");
  const [editbio, setEditBio] = useState<string>("");
  const [editProfilePicture, setEditProfilePicture] = useState<any>();
  const [profilePreview, setProfilePreview] = useState<any>(null);
  const [editHeader, setEditHeader] = useState<any>();
  const [headerPreview, setHeaderPreview] = useState<any>(null);

  const detailUser = useSelector(
    (state: RootState) => state.userDetail.userDetail
  );
  const { imageUrl } = useImgUrl();

  console.log(imageUrl);

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
          top={"11%"}
          border="4px"
          borderColor="mainBg.200"
          borderRadius="100%"
        >
          <Box bg={"gray.100"} h={20} w={20} borderRadius={"100%"}>
            <Center>
              <Text color={"teal"} fontSize={52} pt={3.5}>
                <RiImageAddFill />
              </Text>
            </Center>
          </Box>
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
              src={`${imageUrl}${detailUser.header}.jpg`}
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
                zIndex={6}
                left={20}
                top={5}
                border="4px"
                borderColor="mainBg.200"
                borderRadius="100%"
              >
                <Box bg={"gray.100"} h={8} w={8} borderRadius={"100%"}>
                  <Center>
                    <Text color={"teal"} fontSize={20} pt={1.5}>
                      <RiImageAddFill />
                    </Text>
                  </Center>
                </Box>
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
              src={`${imageUrl}${detailUser.profile_picture}.jpg`}
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
          placeholder={detailUser.full_name}
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
          placeholder={`@${detailUser.username}`}
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
          placeholder={detailUser.profile_description}
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

import {
  Box,
  Heading,
  Button,
  UnorderedList,
  Center,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Link,
} from "@chakra-ui/react";
import Cookies from "js-cookie";

import ListItemSIdeBar from "../../../components/atoms/listItemSIdeBar";
import PostInput from "../../../components/postInput";

import { dataSidebarLogIn } from "../../../datas/data-dummy";
import { useEffect, useState } from "react";

export default function SideNavbar() {
  const [isLogin, setIsLogIn] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const checkLogin = () => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogIn(true);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <>
      <Box m={4}>
        <Heading>SpaceS</Heading>
        {isLogin ? (
          <UnorderedList my={6} py={2}>
            {dataSidebarLogIn.map((data, index) => (
              <ListItemSIdeBar
                key={index}
                link={data.link}
                logo={data.logo}
                name={data.name}
              />
            ))}
          </UnorderedList>
        ) : (
          <UnorderedList my={6} py={2}>
            {/* {dataSidebarNotLogIn.map((data, index) => (
              <ListItemSIdeBar
                key={index}
                link={data.link}
                logo={data.logo}
                name={data.name}
              />
            ))} */}
          </UnorderedList>
        )}
      </Box>

      {/* create */}

      {isLogin ? (
        <Center>
          <Button w={"100%"} mx={4} onClick={onOpen}>
            Create Post
          </Button>
        </Center>
      ) : (
        <Center>
          <Link href="/signin">
            <Button w={200} mx={4}>
              Log In
            </Button>
          </Link>
        </Center>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"mainBg.200"} minW="650px">
          <PostInput />
        </ModalContent>
      </Modal>
    </>
  );
}

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
} from "@chakra-ui/react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import ListItemSIdeBar from "../../../components/atoms/listItemSIdeBar";
import PostInput from "../../../components/postInput";

import { dataSidebarLogIn } from "../../../datas/data-dummy";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUserDetail } from "../../../store";

export default function SideNavbar() {
  const [isLogin, setIsLogIn] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const checkLogin = () => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogIn(true);
    }
  };
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const onLogout = () => {
    Cookies.remove("token");
    dispatch(removeUserDetail());
    navigate("/login");
    // window.location.reload();
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      <Box m={4}>
        <Heading>space</Heading>
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
        <>
          <Center>
            <Button w={"100%"} mx={4} onClick={onOpen}>
              Create Post
            </Button>
          </Center>
          <Center>
            <Button
              colorScheme="red"
              // size="xs"
              position={"absolute"}
              top={540}
              w={"90%"}
              mx={4}
              borderRadius="md"
              onClick={onLogout}
            >
              logout
            </Button>
          </Center>
        </>
      ) : (
        <Center>
          <Link to="/login">
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

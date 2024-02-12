import { Box, Card, Heading } from "@chakra-ui/react";
import Suggestions from "../../../components/suggestion";
import SideProfile from "../../../components/sideProfile";
import Cookies from "js-cookie";
import { suggestDummy } from "../../../datas/data-dummy";
import { useEffect, useState } from "react";
import SideProfileNotLogin from "../../../components/sideProfileNotLogin";

export default function ProfileNSuggest() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const checkLogin = () => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogin(true);
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <>
      {isLogin ? (
        <>
          <SideProfile />
          <Box m={4}>
            <Card color="gray.100" bg="mainBg.200">
              <Heading size="sm" mt={3} ml={3}>
                Suggested for you
              </Heading>

              {suggestDummy.map((suggest, index) => (
                <Suggestions
                  key={index}
                  avatar={suggest.avatar}
                  profileName={suggest.profileName}
                  userName={suggest.userName}
                />
              ))}
            </Card>
          </Box>
        </>
      ) : (
        <Box>
          <SideProfileNotLogin />
        </Box>
      )}
    </>
  );
}

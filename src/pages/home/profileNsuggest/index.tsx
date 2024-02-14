import { Box, Card, Heading } from "@chakra-ui/react";
import Suggestions from "../../../components/suggestion";
import SideProfile from "../../../components/sideProfile";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import SideProfileNotLogin from "../../../components/sideProfileNotLogin";
import API from "../../../libs/api";
import { SuggestionTypes } from "../../../datas/data-types";

export default function ProfileNSuggest() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [suggestData, setSuggestData] = useState([]);

  const checkLogin = () => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogin(true);
    }
  };

  const suggestAPI = async () => {
    try {
      const response = await API.get("user");
      // console.log(response.data);
      setSuggestData(response.data);
    } catch (error) {
      console.log(
        `Ooops something went error during API suggest, please see this ==>> ${error}`
      );
    }
  };
  useEffect(() => {
    suggestAPI();
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

              {suggestData.map((suggest: SuggestionTypes) => (
                <Suggestions
                  key={suggest.id}
                  avatar={suggest.profile_picture}
                  profileName={suggest.full_name}
                  userName={suggest.username}
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

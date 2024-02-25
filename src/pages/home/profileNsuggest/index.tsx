import { Box, Card, Heading } from "@chakra-ui/react";
import Suggestions from "../../../components/suggestion";
import SideProfile from "../../../components/sideProfile";
import { useEffect, useState } from "react";
import SideProfileNotLogin from "../../../components/sideProfileNotLogin";
import { API } from "../../../libs/api";
import { SuggestionTypes, UserFromPayload } from "../../../datas/data-types";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export default function ProfileNSuggest() {
  const [dataUserLogin, setDataUserLogin] = useState<any>();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [suggestData, setSuggestData] = useState([]);

  const suggestAPI = async () => {
    try {
      const response = await API.get("user");
      setSuggestData(response.data);
    } catch (error) {
      console.log(
        `Ooops something went error during API suggest, please see this ==>> ${error}`
      );
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");
    const checkLogin = () => {
      if (token) {
        setIsLogin(true);
      }
    };
    if (token) {
      const jwtToken = atob(token);
      const payload: UserFromPayload = jwtDecode(jwtToken);
      setDataUserLogin(payload.user);
    }

    checkLogin();
    suggestAPI();
  }, []);
  return (
    <>
      {isLogin ? (
        <>
          <SideProfile
            full_name={dataUserLogin?.full_name}
            username={dataUserLogin?.username}
            profile_description={dataUserLogin?.profile_description}
            profile_picture={dataUserLogin?.profile_picture}
            id={dataUserLogin?.id}
          />
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

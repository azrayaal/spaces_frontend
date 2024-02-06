import { Box, Card, Heading } from "@chakra-ui/react";
import Suggestions from "../../../components/suggestion";
import SideProfile from "../../../components/sideProfile";

const suggestDummy = [
  {
    avatar: "https://source.unsplash.com/CXhRVSqBwe0",
    profileName: "Calliope",
    userName: "callio",
  },
  {
    avatar: "https://source.unsplash.com/dZqgoqa1css",
    profileName: "Gura",
    userName: "gawrgurrrr",
  },
  {
    avatar: "https://source.unsplash.com/NxOQWmoYr9k",
    profileName: "WATSON?!",
    userName: "watsonemi",
  },
];

export default function ProfileNSuggest() {
  return (
    <>
      <SideProfile />
      {/* suggestion */}
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
  );
}

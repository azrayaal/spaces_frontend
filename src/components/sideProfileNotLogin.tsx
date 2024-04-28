import { Box, Button, Center, Card } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function SideProfileNotLogin() {
  return (
    <Box m={4}>
      <Card bg="mainBg.200" borderRadius="lg" h={200} w={380}>
        <Box m={"auto"} color="gray.100">
          <Center>
            <Link to="/login">
              <Button w={250}>Log In</Button>
            </Link>
          </Center>
        </Box>
      </Card>
    </Box>
  );
}

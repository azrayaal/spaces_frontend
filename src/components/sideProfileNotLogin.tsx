import { Box, Button, Center, Link, Card } from "@chakra-ui/react";

export default function SideProfileNotLogin() {
  return (
    <Box m={4}>
      <Card bg="mainBg.200" borderRadius="lg" h={200} w={380}>
        <Box m={"auto"} color="gray.100">
          <Center>
            <Link href="/signin">
              <Button w={250}>Log In</Button>
            </Link>
          </Center>
        </Box>
      </Card>
    </Box>
  );
}

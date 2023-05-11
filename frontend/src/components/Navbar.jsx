import {
  Box,
  Container,
  Flex,
  IconButton,
  Text,
  Spacer,
  Button,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Box bg="#DBB489" h="56px" p="10px">
      <Container maxW="80em">
        <Flex alignItems="center" justify="space-between" gap="10px">
          <IconButton
            icon={<HamburgerIcon />}
            sx={{ background: "none", fontSize: "18px" }}
          />
          <Text fontSize="20px" color="black" as="b">
            LOGO
          </Text>

          <Spacer />
          <Flex alignItems="center" display={{ base: "block", md: "flex" }}>
            <Button colorScheme="orange">Log in</Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

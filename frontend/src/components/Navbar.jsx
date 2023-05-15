import {
  Box,
  Container,
  Flex,
  IconButton,
  Text,
  Spacer,
  Image,
  
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Box bg="#DBB489" h="57px" p="10px">
      <Container maxW="80em">
        <Flex alignItems="center" justify="space-between" gap="10px">
          <Image 
          src='\imagenes\1362534.png'
          boxSize='40px'
          />
          <Text fontSize="20px" color="black" as="b">
            Nilearn
          </Text>

          <Spacer />
          
        </Flex>
      </Container>
    </Box>
  );
}

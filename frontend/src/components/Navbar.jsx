import { Box,
         Container, 
         Flex,
         IconButton,
         Text,
         Spacer,
         Button} from "@chakra-ui/react"

import { HamburgerIcon } from '@chakra-ui/icons'

export default function Navbar() {
    return (

        <Box bg="blue.300" h="56px" p="10px"> 
           <Container maxW="80em">
              <Flex alignItems='center' gap='2'>
                 <IconButton colorScheme='blue' icon={<HamburgerIcon/>} />
                 <Text fontSize='20px' color='white' as="b">
                   LOGO
                 </Text>
                 <Spacer />
                 <Button colorScheme='blue'>Log in</Button>
              </Flex>   
           </Container>
        </Box>
     
    )
}

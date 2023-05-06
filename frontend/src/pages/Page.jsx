import { Box,
  Container, 
  Flex,
  Center,
  Stack} from "@chakra-ui/react"

export default function Page() {
    return (
      <Stack direction={['column']}>
         <Center bg='teal' h='100px' color='white' gap="10px">
          This is the Center
         </Center>
         <Center bg='teal' h='100px' color='white' gap="10px">
          This is the Center
         </Center>
      </Stack>
      
    )
  }
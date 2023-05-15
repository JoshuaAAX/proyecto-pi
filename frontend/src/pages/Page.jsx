import { Center, Stack, Button,Box,Text,Image } from "@chakra-ui/react";
import About from "../components/About";
import Canvas from "../components/Canvas";


export default function Page() {
  return (
    <>
    <Box sx={styles.pagina}>
    </Box>
    <Box>
    <Image src='\imagenes\1362534.png' sx={styles.imagen}/>
    </Box>
    <Box>
    <Text sx={styles.texto}>¡Donde aprender sobre la cultura Egipcia
      es fácil y divertido!</Text>
    </Box>
    <Stack  direction={["column"]} mt={200} ml={700} mr={300}>
     
      
    <Center   h="100px"  gap="10px" as="b" >
      <Button bg="#DBB489" color="white" width="1000px" >Registrarse</Button>
    </Center>
    <Center   h="2px"  as="b">
      <Button bg="#DBB489" color="white" width="1000px" >Ya tengo una cuenta</Button>
    </Center>
    </Stack>
    
  </>
    

  
    
  );
}
const styles = {
  texto: {
      
      position: "fixed",
      top:180,
      right: 170,
      fontFamily: "Montserrat",
      fontSize: 25,
  },
  imagen:{
    position: "fixed",
    top: 70,
  },
  pagina:{
    backgroundColor: "rgba(247, 237, 212, 1)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    top: 57,
    left: 0,
    height: 740,
    width:1540,
  },
  
}

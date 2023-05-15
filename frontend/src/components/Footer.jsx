import { Box,Container,Flex,Spacer,Text,Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    
 
    
   
    <Box bg="#DBB489" w="100%"h="57px" p="0px" sx={styles.footer}>
    <Container maxW="80em">
      <Flex alignItems="center" justify="space-between" gap="17rem">
        
        <Text fontSize="10px" color="black" as="b">
          Contacto
        </Text>

        <Spacer />
        <Text fontSize="10px" color="black" as="b">
          Terminos y Condiciones
        </Text>

        <Spacer />
        <Text fontSize="10px" color="black" as="b">
          Politicas de Privacidad
        </Text>

        <Spacer />
      </Flex>
    </Container>
  </Box>
      
      
  );
};

export default Footer;

const styles = {
  footer: {
      
      position: "fixed",
      bottom: 0,
      maxwidth:"800px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
  },
}
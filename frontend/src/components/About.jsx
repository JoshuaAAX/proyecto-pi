import { Flex } from "@chakra-ui/react";

const About = () => {
  return (
    //made an centered div with bgcolor blue
    <Flex
      sx={{
        backgroundColor: "red",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
      as="b"
    >
      About
    </Flex>
  );
};

export default About;

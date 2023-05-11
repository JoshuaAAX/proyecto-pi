import { Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      h={100}
      sx={{
        backgroundColor: "green",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
      as="b"
    >
      Footer
    </Flex>
  );
};

export default Footer;
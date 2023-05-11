import { Flex } from "@chakra-ui/react";

const Canvas = () => {
  return (
    <Flex
      h={100}
      sx={{
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 1px black",
      }}
      as="b"
    >
      Canvas
    </Flex>
  );
};

export default Canvas;

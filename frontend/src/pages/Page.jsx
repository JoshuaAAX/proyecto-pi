import { Center, Stack } from "@chakra-ui/react";
import About from "../components/About";
import Canvas from "../components/Canvas";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <Stack direction={["column"]} my={8}>
      <Center bg="blue" h="100px" color="white" gap="10px" as="b">
        Hola este soy yo viendo si funcionó el deploy
      </Center>
      <Center bg="red" color="white" gap="10px" as="b">
        This is the Center
      </Center>
      <Canvas />
      <About />
      <Footer />
    </Stack>
  );
}

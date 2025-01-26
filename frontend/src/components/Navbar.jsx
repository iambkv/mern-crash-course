import { Button, color, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlinePlusSquare } from "react-icons/ai"; // Import from React Icons

const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW='container.xl' px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
        >
          <Link to={"/"}>Product Store</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={'/create'}>
            <Button>
              <AiOutlinePlusSquare fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>{colorMode === "light" ? 'Light' : "Dark"}</Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

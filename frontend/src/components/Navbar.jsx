import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useAuthStore } from "../store/auth";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { user, logout } = useAuthStore();

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
          {user && (
            <Link to={'/create'}>
              <Button>
                <AiOutlinePlusSquare fontSize={20} />
              </Button>
            </Link>
          )}
          <Button onClick={toggleColorMode}>{colorMode === "light" ? 'Light' : "Dark"}</Button>
          {user && (
            <Button colorScheme="red" variant="outline" onClick={logout}>
              Logout
            </Button>
          )}
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

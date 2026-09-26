import { useState } from "react";
import {
    Container, VStack, Heading, Box, useColorModeValue,
    Input, Button, useToast, Text, InputGroup, InputLeftElement
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { useAuthStore } from "../store/auth";

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const toast = useToast();
    const { login } = useAuthStore();

    const handleLogin = async () => {
        setLoading(true);
        const { success, message } = await login(credentials);
        setLoading(false);

        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true
            });
        }
    };

    return (
        <Container maxW={"container.sm"} py={16}>
            <VStack spacing={8}>
                <VStack spacing={2}>
                    <Heading
                        as={"h1"}
                        size={"2xl"}
                        textAlign={"center"}
                        bgGradient={"linear(to-l, #7928CA, #FF0080)"}
                        bgClip={"text"}
                        fontWeight={"extrabold"}
                    >
                        Welcome Back
                    </Heading>
                    <Text
                        fontSize={"lg"}
                        color={useColorModeValue("gray.600", "gray.400")}
                        textAlign={"center"}
                    >
                        Login to access your Product Store
                    </Text>
                </VStack>

                <Box
                    w={"full"}
                    bg={useColorModeValue("white", "gray.800")}
                    p={8}
                    rounded={"xl"}
                    shadow={"lg"}
                    borderTop={"4px solid"}
                    borderColor={"blue.500"}
                >
                    <VStack spacing={5}>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <AiOutlineMail color="gray" />
                            </InputLeftElement>
                            <Input
                                placeholder="Email"
                                name="email"
                                type="email"
                                value={credentials.email}
                                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                                size="lg"
                                variant="filled"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <AiOutlineLock color="gray" />
                            </InputLeftElement>
                            <Input
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                size="lg"
                                variant="filled"
                            />
                        </InputGroup>
                        <Button
                            bgGradient="linear(to-r, blue.400, purple.500)"
                            color="white"
                            _hover={{ bgGradient: "linear(to-r, blue.500, purple.600)", transform: "translateY(-2px)", shadow: "lg" }}
                            transition="all 0.3s"
                            onClick={handleLogin}
                            w="full"
                            size="lg"
                            isLoading={loading}
                        >
                            Login
                        </Button>
                        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
                            Don't have an account?&nbsp;
                            <Link to="/signup">
                                <Text as="span" color="blue.500" fontWeight="semibold" _hover={{ textDecoration: "underline" }}>
                                    Sign Up
                                </Text>
                            </Link>
                        </Text>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
};

export default LoginPage;

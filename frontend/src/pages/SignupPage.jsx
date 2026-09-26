import { useState } from "react";
import {
    Container, VStack, Heading, Box, useColorModeValue,
    Input, Button, useToast, Text, InputGroup, InputLeftElement
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { useAuthStore } from "../store/auth";

const SignupPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const toast = useToast();
    const { signup } = useAuthStore();

    const handleSignup = async () => {
        setLoading(true);
        const { success, message } = await signup(formData);
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
                        Create Account
                    </Heading>
                    <Text
                        fontSize={"lg"}
                        color={useColorModeValue("gray.600", "gray.400")}
                        textAlign={"center"}
                    >
                        Sign up to start managing your products
                    </Text>
                </VStack>

                <Box
                    w={"full"}
                    bg={useColorModeValue("white", "gray.800")}
                    p={8}
                    rounded={"xl"}
                    shadow={"lg"}
                    borderTop={"4px solid"}
                    borderColor={"purple.500"}
                >
                    <VStack spacing={5}>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <AiOutlineUser color="gray" />
                            </InputLeftElement>
                            <Input
                                placeholder="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                size="lg"
                                variant="filled"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <AiOutlineMail color="gray" />
                            </InputLeftElement>
                            <Input
                                placeholder="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                size="lg"
                                variant="filled"
                            />
                        </InputGroup>
                        <Button
                            bgGradient="linear(to-r, purple.400, pink.500)"
                            color="white"
                            _hover={{ bgGradient: "linear(to-r, purple.500, pink.600)", transform: "translateY(-2px)", shadow: "lg" }}
                            transition="all 0.3s"
                            onClick={handleSignup}
                            w="full"
                            size="lg"
                            isLoading={loading}
                        >
                            Sign Up
                        </Button>
                        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
                            Already have an account?&nbsp;
                            <Link to="/login">
                                <Text as="span" color="purple.500" fontWeight="semibold" _hover={{ textDecoration: "underline" }}>
                                    Login
                                </Text>
                            </Link>
                        </Text>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
};

export default SignupPage;

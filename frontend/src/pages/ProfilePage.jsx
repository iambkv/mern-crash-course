import {
    Container, VStack, Heading, Box, useColorModeValue,
    Text, Avatar, HStack, Divider, Badge
} from "@chakra-ui/react";
import { useAuthStore } from "../store/auth";

const ProfilePage = () => {
    const { user } = useAuthStore();
    const bg = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("gray.600", "gray.400");

    return (
        <Container maxW="container.md" py={10}>
            <VStack spacing={8}>
                <Heading
                    as="h1"
                    size="xl"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontWeight="extrabold"
                >
                    My Profile
                </Heading>

                <Box w="full" bg={bg} p={8} rounded="xl" shadow="lg">
                    <VStack spacing={6} align="center">
                        <Avatar size="2xl" name={user?.name} bg="purple.500" color="white" />
                        <VStack spacing={1}>
                            <Text fontSize="2xl" fontWeight="bold">{user?.name}</Text>
                            <Badge colorScheme="purple" fontSize="sm" px={3} py={1} rounded="full">
                                Admin
                            </Badge>
                        </VStack>

                        <Divider />

                        <Box w="full" px={4}>
                            <VStack spacing={4} align="stretch">
                                <HStack justify="space-between">
                                    <Text fontWeight="semibold" color={textColor}>Email</Text>
                                    <Text>{user?.email}</Text>
                                </HStack>
                                <HStack justify="space-between">
                                    <Text fontWeight="semibold" color={textColor}>Name</Text>
                                    <Text>{user?.name}</Text>
                                </HStack>
                                <HStack justify="space-between">
                                    <Text fontWeight="semibold" color={textColor}>Role</Text>
                                    <Badge colorScheme="green">Admin</Badge>
                                </HStack>
                            </VStack>
                        </Box>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    );
};

export default ProfilePage;

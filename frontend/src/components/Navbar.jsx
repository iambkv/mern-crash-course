import {
    Box, Flex, HStack, Text, useColorMode, useColorModeValue,
    Button, Menu, MenuButton, MenuList, MenuItem, Avatar, IconButton
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useAuthStore } from "../store/auth";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { user, logout } = useAuthStore();
    const bg = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.700");

    return (
        <Box
            bg={bg}
            px={6}
            py={3}
            borderBottom="1px"
            borderColor={borderColor}
            position="sticky"
            top={0}
            zIndex={10}
            shadow="sm"
        >
            <Flex alignItems="center" justifyContent="space-between">
                <Text
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize="2xl"
                    fontWeight="extrabold"
                >
                    <Link to="/">Product Store Admin</Link>
                </Text>

                <HStack spacing={3}>
                    <IconButton
                        icon={colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
                        onClick={toggleColorMode}
                        variant="ghost"
                        size="sm"
                        aria-label="Toggle color mode"
                    />
                    {user && (
                        <Menu>
                            <MenuButton>
                                <Avatar size="sm" name={user.name} bg="purple.500" color="white" cursor="pointer" />
                            </MenuButton>
                            <MenuList>
                                <Link to="/profile">
                                    <MenuItem icon={<AiOutlineUser />}>Profile</MenuItem>
                                </Link>
                                <MenuItem color="red.500" onClick={logout}>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    )}
                </HStack>
            </Flex>
        </Box>
    );
};

export default Navbar;

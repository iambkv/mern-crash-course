import { Box, VStack, Text, useColorModeValue, Icon } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineAppstore, AiOutlineDashboard } from "react-icons/ai";

const SidebarLink = ({ to, icon, label }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    const activeBg = useColorModeValue("blue.50", "blue.900");
    const activeColor = useColorModeValue("blue.600", "blue.200");
    const hoverBg = useColorModeValue("gray.100", "gray.700");

    return (
        <Link to={to} style={{ width: "100%" }}>
            <Box
                display="flex"
                alignItems="center"
                gap={3}
                px={4}
                py={3}
                rounded="lg"
                bg={isActive ? activeBg : "transparent"}
                color={isActive ? activeColor : undefined}
                fontWeight={isActive ? "semibold" : "normal"}
                _hover={{ bg: isActive ? activeBg : hoverBg }}
                transition="all 0.2s"
            >
                <Icon as={icon} fontSize="xl" />
                <Text fontSize="sm">{label}</Text>
            </Box>
        </Link>
    );
};

const Sidebar = () => {
    const bg = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.700");

    return (
        <Box
            w="240px"
            minH="calc(100vh - 57px)"
            bg={bg}
            borderRight="1px"
            borderColor={borderColor}
            py={6}
            px={3}
        >
            <VStack spacing={1} align="stretch">
                <Text px={4} mb={3} fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.500">
                    Menu
                </Text>
                <SidebarLink to="/" icon={AiOutlineDashboard} label="Dashboard" />
                <SidebarLink to="/products" icon={AiOutlineAppstore} label="Products" />
            </VStack>
        </Box>
    );
};

export default Sidebar;

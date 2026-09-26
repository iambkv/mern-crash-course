import {
    Box, VStack, Text, SimpleGrid, useColorModeValue, Icon, HStack,
    Heading, Divider, Progress, Badge
} from "@chakra-ui/react";
import {
    AiOutlineAppstore, AiOutlineShoppingCart, AiOutlineDollarCircle,
    AiOutlineRise, AiOutlineFall
} from "react-icons/ai";
import { useEffect } from "react";
import { useProductStore } from "../store/product";
import { useAuthStore } from "../store/auth";

const StatCard = ({ label, value, icon, color, change, isPositive }) => {
    const bg = useColorModeValue("white", "gray.800");
    return (
        <Box bg={bg} p={6} rounded="xl" shadow="md" transition="all 0.3s" _hover={{ shadow: "lg", transform: "translateY(-2px)" }}>
            <HStack justify="space-between" mb={3}>
                <Box p={2} rounded="lg" bg={`${color}.50`}>
                    <Icon as={icon} fontSize="2xl" color={`${color}.500`} />
                </Box>
                {change && (
                    <HStack spacing={1} color={isPositive ? "green.500" : "red.500"} fontSize="sm">
                        <Icon as={isPositive ? AiOutlineRise : AiOutlineFall} />
                        <Text fontWeight="semibold">{change}</Text>
                    </HStack>
                )}
            </HStack>
            <Text fontSize="sm" color="gray.500">{label}</Text>
            <Text fontSize="3xl" fontWeight="bold">{value}</Text>
        </Box>
    );
};

const BarChart = ({ data, title }) => {
    const bg = useColorModeValue("white", "gray.800");
    const barBg = useColorModeValue("gray.100", "gray.700");
    const maxValue = Math.max(...data.map(d => d.value));

    return (
        <Box bg={bg} p={6} rounded="xl" shadow="md">
            <Heading size="sm" mb={4}>{title}</Heading>
            <VStack spacing={3} align="stretch">
                {data.map((item, i) => (
                    <Box key={i}>
                        <HStack justify="space-between" mb={1}>
                            <Text fontSize="xs" color="gray.500">{item.label}</Text>
                            <Text fontSize="xs" fontWeight="bold">{item.value}</Text>
                        </HStack>
                        <Box bg={barBg} rounded="full" h="8px" overflow="hidden">
                            <Box
                                bg={item.color || "blue.400"}
                                h="full"
                                rounded="full"
                                w={`${(item.value / maxValue) * 100}%`}
                                transition="width 0.5s ease"
                            />
                        </Box>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

const RecentActivityItem = ({ title, time, type }) => {
    const colorMap = { sale: "green", add: "blue", update: "orange", delete: "red" };
    return (
        <HStack spacing={3} py={2}>
            <Box w="8px" h="8px" rounded="full" bg={`${colorMap[type]}.400`} />
            <Box flex="1">
                <Text fontSize="sm" fontWeight="medium">{title}</Text>
                <Text fontSize="xs" color="gray.500">{time}</Text>
            </Box>
            <Badge colorScheme={colorMap[type]} fontSize="xs">{type}</Badge>
        </HStack>
    );
};

const DashboardPage = () => {
    const { fetchProducts, products } = useProductStore();
    const { user } = useAuthStore();
    const bg = useColorModeValue("white", "gray.800");

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const monthlySalesData = [
        { label: "January", value: 45, color: "blue.400" },
        { label: "February", value: 62, color: "purple.400" },
        { label: "March", value: 38, color: "cyan.400" },
        { label: "April", value: 85, color: "green.400" },
        { label: "May", value: 71, color: "orange.400" },
        { label: "June", value: 93, color: "pink.400" },
    ];

    const topProductsData = [
        { label: "Electronics", value: 340, color: "blue.500" },
        { label: "Clothing", value: 280, color: "purple.500" },
        { label: "Home & Garden", value: 195, color: "green.500" },
        { label: "Sports", value: 150, color: "orange.500" },
        { label: "Books", value: 120, color: "cyan.500" },
    ];

    const recentActivities = [
        { title: "New product added - Wireless Headphones", time: "2 minutes ago", type: "add" },
        { title: "Product sold - Gaming Mouse", time: "15 minutes ago", type: "sale" },
        { title: "Price updated - Bluetooth Speaker", time: "1 hour ago", type: "update" },
        { title: "Product removed - Old Keyboard", time: "3 hours ago", type: "delete" },
        { title: "New product added - USB-C Hub", time: "5 hours ago", type: "add" },
        { title: "Product sold - Laptop Stand", time: "Yesterday", type: "sale" },
    ];

    return (
        <Box p={6}>
            <VStack spacing={6} align="stretch">
                <Box>
                    <Heading size="lg" mb={1}>
                        Welcome back, {user?.name} 👋
                    </Heading>
                    <Text color="gray.500">Here's what's happening with your store today.</Text>
                </Box>

                {/* Stats Cards */}
                <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={5}>
                    <StatCard
                        label="Total Products"
                        value={products.length}
                        icon={AiOutlineAppstore}
                        color="blue"
                        change="+12%"
                        isPositive={true}
                    />
                    <StatCard
                        label="Total Sales"
                        value="$12,430"
                        icon={AiOutlineDollarCircle}
                        color="green"
                        change="+8.2%"
                        isPositive={true}
                    />
                    <StatCard
                        label="Orders"
                        value="156"
                        icon={AiOutlineShoppingCart}
                        color="purple"
                        change="+5.4%"
                        isPositive={true}
                    />
                    <StatCard
                        label="Revenue"
                        value="$8,350"
                        icon={AiOutlineRise}
                        color="orange"
                        change="-2.1%"
                        isPositive={false}
                    />
                </SimpleGrid>

                {/* Charts Row */}
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
                    <BarChart data={monthlySalesData} title="Monthly Sales" />
                    <BarChart data={topProductsData} title="Top Categories" />
                </SimpleGrid>

                {/* Bottom Row */}
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={5}>
                    {/* Recent Activity */}
                    <Box bg={bg} p={6} rounded="xl" shadow="md">
                        <Heading size="sm" mb={4}>Recent Activity</Heading>
                        <VStack spacing={0} align="stretch" divider={<Divider />}>
                            {recentActivities.map((activity, i) => (
                                <RecentActivityItem key={i} {...activity} />
                            ))}
                        </VStack>
                    </Box>

                    {/* Performance Overview */}
                    <Box bg={bg} p={6} rounded="xl" shadow="md">
                        <Heading size="sm" mb={4}>Performance Overview</Heading>
                        <VStack spacing={5} align="stretch">
                            <Box>
                                <HStack justify="space-between" mb={1}>
                                    <Text fontSize="sm">Sales Target</Text>
                                    <Text fontSize="sm" fontWeight="bold">78%</Text>
                                </HStack>
                                <Progress value={78} colorScheme="blue" rounded="full" size="sm" />
                            </Box>
                            <Box>
                                <HStack justify="space-between" mb={1}>
                                    <Text fontSize="sm">Revenue Goal</Text>
                                    <Text fontSize="sm" fontWeight="bold">62%</Text>
                                </HStack>
                                <Progress value={62} colorScheme="green" rounded="full" size="sm" />
                            </Box>
                            <Box>
                                <HStack justify="space-between" mb={1}>
                                    <Text fontSize="sm">Customer Growth</Text>
                                    <Text fontSize="sm" fontWeight="bold">89%</Text>
                                </HStack>
                                <Progress value={89} colorScheme="purple" rounded="full" size="sm" />
                            </Box>
                            <Box>
                                <HStack justify="space-between" mb={1}>
                                    <Text fontSize="sm">Product Listings</Text>
                                    <Text fontSize="sm" fontWeight="bold">45%</Text>
                                </HStack>
                                <Progress value={45} colorScheme="orange" rounded="full" size="sm" />
                            </Box>
                            <Box>
                                <HStack justify="space-between" mb={1}>
                                    <Text fontSize="sm">Order Fulfillment</Text>
                                    <Text fontSize="sm" fontWeight="bold">92%</Text>
                                </HStack>
                                <Progress value={92} colorScheme="cyan" rounded="full" size="sm" />
                            </Box>
                        </VStack>
                    </Box>
                </SimpleGrid>
            </VStack>
        </Box>
    );
};

export default DashboardPage;

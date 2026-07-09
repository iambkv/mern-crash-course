import {
    Box, VStack, Text, HStack, IconButton, Image, Input, Button,
    useColorModeValue, useToast, useDisclosure, Badge,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton,
    ModalBody, ModalFooter, Table, Thead, Tbody, Tr, Th, Td, TableContainer,
    InputGroup, InputLeftElement, Heading, InputRightElement
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, AddIcon, SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineTag, AiOutlineDollar, AiOutlinePicture, AiOutlineWarning } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useProductStore } from "../store/product";

const HomePage = () => {
    const { fetchProducts, products, deleteProduct, updateProduct, createProduct } = useProductStore();
    const [editProduct, setEditProduct] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "" });
    const [searchQuery, setSearchQuery] = useState("");

    const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure();
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
    const { isOpen: isAddOpen, onOpen: onAddOpen, onClose: onAddClose } = useDisclosure();

    const toast = useToast();
    const bg = useColorModeValue("white", "gray.800");
    const headerBg = useColorModeValue("gray.50", "gray.700");
    const rowHoverBg = useColorModeValue("gray.50", "gray.700");

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleEdit = (product) => {
        setEditProduct({ ...product });
        onEditOpen();
    };

    const handleDeleteClick = (pid) => {
        setDeleteId(pid);
        onDeleteOpen();
    };

    const handleConfirmDelete = async () => {
        const { success, message } = await deleteProduct(deleteId);
        onDeleteClose();
        setDeleteId(null);
        toast({
            title: success ? "Success" : "Error",
            description: message,
            status: success ? "success" : "error",
            duration: 3000,
            isClosable: true
        });
    };

    const handleUpdateProduct = async () => {
        const { success, message } = await updateProduct(editProduct._id, editProduct);
        onEditClose();
        toast({
            title: success ? "Success" : "Error",
            description: success ? "Product updated successfully" : message,
            status: success ? "success" : "error",
            duration: 3000,
            isClosable: true
        });
    };

    const handleAddProduct = async () => {
        const { success, message } = await createProduct(newProduct);
        toast({
            title: success ? "Success" : "Error",
            description: message,
            status: success ? "success" : "error",
            duration: 3000,
            isClosable: true
        });
        if (success) {
            setNewProduct({ name: "", price: "", image: "" });
            onAddClose();
        }
    };

    return (
        <Box p={6}>
            {/* Header */}
            <HStack justify="space-between" mb={6}>
                <HStack spacing={3}>
                    <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        bgGradient="linear(to-r, cyan.400, blue.500)"
                        bgClip="text"
                    >
                        Products
                    </Text>
                    <Badge colorScheme="blue" fontSize="sm" px={3} py={1} rounded="full">
                        {filteredProducts.length} {filteredProducts.length === products.length ? "Total" : `of ${products.length}`}
                    </Badge>
                </HStack>
                <Button
                    leftIcon={<AddIcon />}
                    bgGradient="linear(to-r, blue.400, purple.500)"
                    color="white"
                    _hover={{ bgGradient: "linear(to-r, blue.500, purple.600)", transform: "translateY(-2px)", shadow: "lg" }}
                    transition="all 0.3s"
                    onClick={onAddOpen}
                >
                    Add Product
                </Button>
            </HStack>

            {/* Search Bar */}
            <Box mb={5}>
                <InputGroup maxW="400px">
                    <InputLeftElement pointerEvents="none">
                        <SearchIcon color="gray.400" />
                    </InputLeftElement>
                    <Input
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        variant="filled"
                        rounded="lg"
                    />
                    {searchQuery && (
                        <InputRightElement cursor="pointer" onClick={() => setSearchQuery("")}>
                            <CloseIcon color="gray.400" fontSize="xs" />
                        </InputRightElement>
                    )}
                </InputGroup>
            </Box>

            {/* Product Table */}
            <Box bg={bg} rounded="xl" shadow="md" overflow="hidden">
                <TableContainer>
                    <Table variant="simple">
                        <Thead bg={headerBg}>
                            <Tr>
                                <Th>Image</Th>
                                <Th>Name</Th>
                                <Th isNumeric>Price</Th>
                                <Th textAlign="center">Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {filteredProducts.map((product) => (
                                <Tr key={product._id} _hover={{ bg: rowHoverBg }} transition="all 0.2s">
                                    <Td>
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            boxSize="50px"
                                            objectFit="cover"
                                            rounded="md"
                                        />
                                    </Td>
                                    <Td fontWeight="medium">{product.name}</Td>
                                    <Td isNumeric fontWeight="bold" color="green.500">${product.price}</Td>
                                    <Td>
                                        <HStack spacing={2} justify="center">
                                            <IconButton
                                                icon={<EditIcon />}
                                                size="sm"
                                                colorScheme="blue"
                                                variant="ghost"
                                                onClick={() => handleEdit(product)}
                                                aria-label="Edit product"
                                            />
                                            <IconButton
                                                icon={<DeleteIcon />}
                                                size="sm"
                                                colorScheme="red"
                                                variant="ghost"
                                                onClick={() => handleDeleteClick(product._id)}
                                                aria-label="Delete product"
                                            />
                                        </HStack>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>

                {filteredProducts.length === 0 && products.length > 0 && (
                    <Box py={10} textAlign="center">
                        <Text fontSize="lg" fontWeight="bold" color="gray.500">
                            No products match "{searchQuery}"
                        </Text>
                    </Box>
                )}

                {products.length === 0 && (
                    <Box py={10} textAlign="center">
                        <Text fontSize="lg" fontWeight="bold" color="gray.500">
                            No products found. Click "Add Product" to get started.
                        </Text>
                    </Box>
                )}
            </Box>

            {/* Add Product Modal */}
            <Modal isOpen={isAddOpen} onClose={onAddClose} size="md">
                <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
                <ModalContent rounded="xl" mx={4}>
                    <ModalHeader>
                        <Heading size="md" bgGradient="linear(to-r, blue.400, purple.500)" bgClip="text">
                            Add New Product
                        </Heading>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={4}>
                        <VStack spacing={4}>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <AiOutlineTag color="gray" />
                                </InputLeftElement>
                                <Input
                                    placeholder="Product Name"
                                    value={newProduct.name}
                                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                    variant="filled"
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <AiOutlineDollar color="gray" />
                                </InputLeftElement>
                                <Input
                                    placeholder="Price"
                                    type="number"
                                    value={newProduct.price}
                                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                                    variant="filled"
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement pointerEvents="none">
                                    <AiOutlinePicture color="gray" />
                                </InputLeftElement>
                                <Input
                                    placeholder="Image URL"
                                    value={newProduct.image}
                                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                                    variant="filled"
                                />
                            </InputGroup>
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            bgGradient="linear(to-r, blue.400, purple.500)"
                            color="white"
                            _hover={{ bgGradient: "linear(to-r, blue.500, purple.600)" }}
                            mr={3}
                            onClick={handleAddProduct}
                        >
                            Add Product
                        </Button>
                        <Button variant="ghost" onClick={onAddClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Edit Product Modal */}
            <Modal isOpen={isEditOpen} onClose={onEditClose} size="md">
                <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
                <ModalContent rounded="xl" mx={4}>
                    <ModalHeader>
                        <Heading size="md" bgGradient="linear(to-r, cyan.400, blue.500)" bgClip="text">
                            Edit Product
                        </Heading>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={4}>
                        {editProduct && (
                            <VStack spacing={4}>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none">
                                        <AiOutlineTag color="gray" />
                                    </InputLeftElement>
                                    <Input
                                        placeholder="Product Name"
                                        value={editProduct.name}
                                        onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
                                        variant="filled"
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none">
                                        <AiOutlineDollar color="gray" />
                                    </InputLeftElement>
                                    <Input
                                        placeholder="Price"
                                        type="number"
                                        value={editProduct.price}
                                        onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
                                        variant="filled"
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none">
                                        <AiOutlinePicture color="gray" />
                                    </InputLeftElement>
                                    <Input
                                        placeholder="Image URL"
                                        value={editProduct.image}
                                        onChange={(e) => setEditProduct({ ...editProduct, image: e.target.value })}
                                        variant="filled"
                                    />
                                </InputGroup>
                            </VStack>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            bgGradient="linear(to-r, cyan.400, blue.500)"
                            color="white"
                            _hover={{ bgGradient: "linear(to-r, cyan.500, blue.600)" }}
                            mr={3}
                            onClick={handleUpdateProduct}
                        >
                            Update
                        </Button>
                        <Button variant="ghost" onClick={onEditClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Delete Confirmation Modal */}
            <Modal isOpen={isDeleteOpen} onClose={onDeleteClose} isCentered size="sm">
                <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
                <ModalContent rounded="xl" mx={4}>
                    <ModalBody py={8}>
                        <VStack spacing={4} textAlign="center">
                            <Box
                                p={3}
                                rounded="full"
                                bg="red.50"
                                color="red.500"
                            >
                                <AiOutlineWarning size={32} />
                            </Box>
                            <Heading size="md">Delete Product</Heading>
                            <Text color="gray.500">
                                Are you sure you want to delete this product? This action cannot be undone.
                            </Text>
                        </VStack>
                    </ModalBody>
                    <ModalFooter justifyContent="center" gap={3} pb={6}>
                        <Button
                            colorScheme="red"
                            onClick={handleConfirmDelete}
                            px={8}
                        >
                            Yes, Delete
                        </Button>
                        <Button variant="outline" onClick={onDeleteClose} px={8}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default HomePage;

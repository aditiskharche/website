
import {
    Box,
    Flex,
    Text,
    Button,
    Image,
    SimpleGrid,
    VStack,
    HStack,
    Icon,
    Accordion,
    Span,
} from "@chakra-ui/react";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import banner from '../assets/banner.jpeg'
import tomato from '../assets/tomato.jpeg'
import jeera from '../assets/jeera.jpeg'
import methi from '../assets/methi.jpeg'
import moong from '../assets/moong.jpeg'

const products = [
    { name: "Methi Khakhra", price: 120, img: methi },
    { name: "Jeera Khakhra", price: 120, img: jeera },
    { name: "Moong Khakhra", price: 120, img: moong },
    { name: "Tomato Khakhra", price: 120, img: tomato },
];

const faqItems = [
    {
        value: "a",
        title: "Are the khakras fried?",
        text: "No, they are roasted for a healthy snack.",
    },
    {
        value: "b",
        title: "Do they contain preservatives?",
        text: "No artificial preservatives.",
    },
    {
        value: "c",
        title: "What is the shelf life?",
        text: "Typically 6 months when stored properly.",
    },
];

export default function LandingPage() {
    return (
        <Box bg="#f7f2ec" minH="100vh" fontFamily="serif">
            <Flex px={10} py={4} align="center" justify="space-between">
                <Text fontSize="xl" fontWeight="bold">Kundai Foods</Text>
                <HStack gap={8}>
                    <Text>Home</Text>
                    <Text>Products</Text>
                    <Text>Combo</Text>
                    <Text>Contact</Text>
                </HStack>
                <HStack gap={4}>
                    <Icon size="lg"><FiSearch /></Icon>
                    <Icon size="lg"><FiUser /></Icon>
                    <Icon size="lg"><FiShoppingCart /></Icon>
                </HStack>
            </Flex>

            {/* Hero */}
            <Flex px={10} h='70vh' alignItems={'center'}  align="center" backgroundPosition={'center'} bgSize={'cover'} bgImage={`url(${banner})`} justify="space-between" wrap="wrap">
                <VStack align="start" gap={6} maxW="lg">
                    <Text fontSize="4xl" fontWeight="bold">
                        Fresh Roasted Khakra – Healthy & Crispy
                    </Text>
                    <Text>
                        Made with 100% wheat and natural ingredients
                    </Text>
                    <Button bg="#c97a2b" color="white">Shop Now</Button>
                </VStack>
                {/* <Image src={banner} alt="khakra" maxW="400px" /> */}
            </Flex>

            {/* Features */}
            <Flex justify="space-around" py={6} bg="white" wrap="wrap" gap={4}>
                <Text>🌾 100% Wheat</Text>
                <Text>🔥 Roasted</Text>
                <Text>🚫 No Palm Oil</Text>
                <Text>🚫 No Sugar</Text>
            </Flex>

            {/* Products */}
            <Box px={10} py={16} bgColor={'#faebe4'}>
                <Text fontSize="3xl" textAlign="center" mb={10}>
                    Featured Products
                </Text>
                <SimpleGrid columns={[1, 2, 4]} gap={8}>
                    {products.map((p, i) => (
                        <Box key={i} bg="white" p={4} borderRadius="xl" shadow="sm">
                            <Image src={p.img} alt={p.name} mx="auto" />
                            <Text mt={4} fontWeight="bold" textAlign="center">
                                {p.name}
                            </Text>
                            <Text textAlign="center">200g</Text>
                            <Button mt={4} w="full" bg="#c97a2b" color="white">
                                Add to Cart
                            </Button>
                            <Text textAlign="center" mt={2}>₹ {p.price}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>

            {/* FAQ using Chakra v3 */}
            <Box px={10} pb={20}>
                <Text fontSize="3xl" textAlign="center" mb={6}>
                    FAQs
                </Text>

                <Box maxW="600px" mx="auto">
                    <Accordion.Root collapsible defaultValue={["b"]}>
                        {faqItems.map((item) => (
                            <Accordion.Item key={item.value} value={item.value}>
                                <Accordion.ItemTrigger>
                                    <Span flex="1">{item.title}</Span>
                                    <Accordion.ItemIndicator />
                                </Accordion.ItemTrigger>
                                <Accordion.ItemContent>
                                    <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
                                </Accordion.ItemContent>
                            </Accordion.Item>
                        ))}
                    </Accordion.Root>
                </Box>
            </Box>

            {/* Footer */}
            <Box bg="#5a3d2b" color="white" py={10} textAlign="center">
                <Text fontSize="xl" mb={4}>Kundai Foods</Text>
                <HStack justify="center" gap={6} mb={4}>
                    <Text>About Us</Text>
                    <Text>Contact</Text>
                    <Text>Privacy Policy</Text>
                </HStack>
                <Text>support@kundaifoods.in</Text>
            </Box>
        </Box>
    );
}

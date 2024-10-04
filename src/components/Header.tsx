import {
    Box,
    Button,
    Center,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    HStack,
    IconButton,
    Image,
    Link,
    Spacer,
    VStack,
    useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import WhatsAppButton from './WhatsAppButton';

const Header: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box as="header" py={4} px={8} bg="white" shadow="sm" position="sticky" top="0" zIndex="1000">
            <Flex alignItems="center">
                <Box>
                    <Link href="/" fontWeight="bold">
                        <Image src="/static/images/logo-tamy.png" alt="Tamy Logo" height="60px" borderRadius="md" />
                    </Link>
                </Box>
                <Spacer />
                {/* Menu for large screens */}
                <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                    <Link href="#benefits" fontWeight="bold">
                        Benefícios
                    </Link>
                    <Link href="#features" fontWeight="bold">
                        Funcionalidades
                    </Link>
                    <Link href="#testimonials" fontWeight="bold">
                        Depoimentos
                    </Link>
                    <Link href="#faq" fontWeight="bold">
                        FAQ
                    </Link>
                </HStack>
                <Spacer />
                <Box display={{ base: 'none', md: 'block' }}>
                    <WhatsAppButton />
                </Box>

                {/* Hamburger Menu for Mobile */}
                <Button
                    aria-label="Open menu"
                    as={IconButton}
                    icon={<FaBars />}
                    variant="outline"
                    onClick={onOpen}
                    display={{ base: 'block', md: 'none' }}
                    colorScheme='white'
                    size="md"
                >
                    Open Menu
                </Button>
            </Flex>

            {/* Drawer for mobile menu */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Navegação</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={4} align="start">
                            <Link href="#benefits" onClick={onClose}>
                                Benefícios
                            </Link>
                            <Link href="#features" onClick={onClose}>
                                Funcionalidades
                            </Link>
                            <Link href="#testimonials" onClick={onClose}>
                                Depoimentos
                            </Link>
                            <Link href="#faq" onClick={onClose}>
                                FAQ
                            </Link>
                            <Center w="full">
                                <WhatsAppButton />
                            </Center>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Header;

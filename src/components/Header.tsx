import React from 'react';
import { Box, Flex, Image, Link, Spacer, HStack, Button } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

const Header: React.FC = () => {
    const whatsappLink = `https://wa.me/5548988661447`;

    return (
        <Box as="header" py={4} px={8} bg="white" shadow="sm" position="sticky" top="0" zIndex="1000">
            <Flex alignItems="center">
                <Box>
                    <Link href="/" fontWeight="bold">
                        <Image src="/static/images/logo-tamy.png" alt="Tamy Logo" height="60px" borderRadius="md" />
                    </Link>
                </Box>
                <Spacer />
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
                <Button
                    as="a"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<FaWhatsapp />}
                    colorScheme='green'
                    size="md"
                    ml={4}
                >
                    Fale com a Tamy
                </Button>
            </Flex>
        </Box>
    );
};

export default Header;

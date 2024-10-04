import { Box, HStack, Icon, Image, Link, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaLock } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <Box as="footer" py={10} px={8} bgGradient="linear(to-r, green.50, green.100)" color="green.900">
            {/* Links to Privacy Policy, Terms of Use, and Social Media */}
            <Stack spacing={6} direction={{ base: 'column', md: 'row' }} justify="center">
                <Stack direction={{ base: 'column', md: 'row' }} spacing={6} justify="center">
                    <Link href="/politica-de-privacidade" fontSize="sm" _hover={{ textDecoration: 'underline' }}>
                        Política de Privacidade
                    </Link>
                    <Link href="/termos-de-uso" fontSize="sm" _hover={{ textDecoration: 'underline' }}>
                        Termos de Uso
                    </Link>
                </Stack>
            </Stack>
            {/* Certifications & Trust Seals */}
            <HStack spacing={6} mt={6} justify="center">
                <HStack spacing={2}>
                    <Icon as={FaLock} boxSize={5} />
                    <Text fontSize="sm">SSL Seguro</Text>
                </HStack>
                <VStack spacing={2}>
                    <Image src="/static/images/LGPD.png" alt="LGPD Compliance" boxSize="60px" objectFit="contain" />
                    <Text fontSize="sm">Conformidade com LGPD</Text>
                </VStack>
            </HStack>


            {/* Copyright Text */}
            <Text fontSize="sm" textAlign="center" mt={8}>
                &copy; {new Date().getFullYear()} Tamy. Todos os direitos reservados.
            </Text>
        </Box>
    );
};

export default Footer;

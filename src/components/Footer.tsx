import React from 'react';
import { Box, Text, Link, Stack } from '@chakra-ui/react';

const Footer: React.FC = () => {
    return (
        <Box as="footer" py={10} px={8} bg="gray.100">
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center">
                <Link href="/politica-de-privacidade" fontSize="sm">
                    Política de Privacidade
                </Link>
                <Link href="/termos-de-uso" fontSize="sm">
                    Termos de Uso
                </Link>
            </Stack>
            <Text fontSize="sm" textAlign="center" mt={4}>
                &copy; {new Date().getFullYear()} Tamy. Todos os direitos reservados.
            </Text>
        </Box>
    );
};

export default Footer;

// pages/termos-de-uso.tsx
import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import Header from '@/components/Header';

const TermosDeUso: React.FC = () => {
    return (
        <>
            <Head>
                <title>Termos de Uso - Tamy</title>
            </Head>
            <Header />
            <Box py={{ base: 20, md: 28 }} px={8} maxW="800px" mx="auto">
                <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb={8}>
                    Termos de Uso
                </Heading>
                <VStack spacing={6} align="stretch">
                    <Text>
                        Ao acessar o site da Tamy, você concorda em cumprir estes termos de
                        serviço, todas as leis e regulamentos aplicáveis, e concorda que é
                        responsável pelo cumprimento de todas as leis locais aplicáveis.
                    </Text>
                    <Text>
                        Se você não concordar com algum desses termos, está proibido de usar
                        ou acessar este site. Os materiais contidos neste site são
                        protegidos pelas leis de direitos autorais e marcas comerciais
                        aplicáveis.
                    </Text>
                    {/* Adicione mais seções conforme necessário */}
                </VStack>
            </Box>
        </>
    );
};

export default TermosDeUso;

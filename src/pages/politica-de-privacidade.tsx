// pages/politica-de-privacidade.tsx
import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';

const PoliticaDePrivacidade: React.FC = () => {
    return (
        <>
            <Head>
                <title>Política de Privacidade - Tamy</title>
            </Head>
            <Box py={{ base: 20, md: 28 }} px={8} maxW="800px" mx="auto">
                <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb={8}>
                    Política de Privacidade
                </Heading>
                <VStack spacing={6} align="stretch">
                    <Text>
                        Sua privacidade é importante para nós. É política da Tamy respeitar
                        a sua privacidade em relação a qualquer informação sua que possamos
                        coletar no site Tamy, e outros sites que possuímos e operamos.
                    </Text>
                    <Text>
                        Solicitamos informações pessoais apenas quando realmente precisamos
                        delas para lhe fornecer um serviço. Fazemos por meios justos e
                        legais, com o seu conhecimento e consentimento. Também informamos
                        por que estamos coletando e como será usado.
                    </Text>
                    {/* Adicione mais seções conforme necessário */}
                </VStack>
            </Box>
        </>
    );
};

export default PoliticaDePrivacidade;

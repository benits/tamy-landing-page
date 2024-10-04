import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Box, Divider, Heading, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

const TermosDeUso: React.FC = () => {
    return (
        <>
            <Head>
                <title>Termos de Uso - Tamy</title>
                <meta name="description" content="Leia os nossos termos de uso para saber como utilizar os serviços oferecidos pela Tamy." />
                <meta name="keywords" content="Termos de Uso, Tamy, Regras de Serviço, Uso de Plataforma" />
            </Head>

            <Header />

            <Box py={{ base: 16, md: 24 }} px={8} maxW="800px" mx="auto">
                <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb={6} textAlign="center" color="green.900">
                    Termos de Uso
                </Heading>
                <Text fontSize={{ base: 'lg', md: 'xl' }} textAlign="center" mb={10} color="gray.600">
                    Leia atentamente os termos de uso para utilizar os serviços oferecidos pela Tamy.
                </Text>

                <VStack spacing={8} align="stretch">
                    <Text fontSize="md" color="gray.700">
                        Ao acessar o site da Tamy, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis, e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
                    </Text>
                    <Text fontSize="md" color="gray.700">
                        Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                    </Text>

                    {/* Sections for better readability */}
                    <Heading as="h2" fontSize={{ base: 'lg', md: '2xl' }} color="green.700">
                        Direitos e Obrigações do Usuário
                    </Heading>
                    <Text fontSize="md" color="gray.700">
                        O usuário é responsável por garantir que as informações fornecidas durante o uso dos serviços da Tamy sejam precisas e atualizadas. A Tamy não se responsabiliza por quaisquer perdas resultantes do uso incorreto da plataforma.
                    </Text>

                    <Heading as="h2" fontSize={{ base: 'lg', md: '2xl' }} color="green.700">
                        Modificações nos Termos
                    </Heading>
                    <Text fontSize="md" color="gray.700">
                        A Tamy se reserva o direito de revisar e modificar estes termos a qualquer momento, sem aviso prévio. Ao continuar a usar o site e os serviços após a modificação, você concorda com os termos revisados.
                    </Text>

                    <Heading as="h2" fontSize={{ base: 'lg', md: '2xl' }} color="green.700">
                        Limitação de Responsabilidade
                    </Heading>
                    <Text fontSize="md" color="gray.700">
                        A Tamy não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais resultantes do uso ou da incapacidade de uso dos serviços, mesmo que a Tamy tenha sido informada sobre a possibilidade de tais danos.
                    </Text>

                    <Divider />

                    {/* Call to Action */}
                    {/* <Box mt={6}>
                        <HStack justify="center">
                            <Text fontSize="md" color="gray.600">Dúvidas sobre os Termos de Uso?</Text>
                            <Link href="mailto:support@tamy.com" color="green.500" fontWeight="bold">
                                Entre em contato conosco
                            </Link>
                        </HStack>
                    </Box> */}
                </VStack>
            </Box>

            <Footer />
        </>
    );
};

export default TermosDeUso;

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Box, Divider, Heading, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

const PoliticaDePrivacidade: React.FC = () => {
    return (
        <>
            <Head>
                <title>Política de Privacidade - Tamy</title>
                <meta name="description" content="Leia a nossa política de privacidade e veja como cuidamos das suas informações pessoais na Tamy." />
                <meta name="keywords" content="Política de Privacidade, Tamy, Segurança de Dados, Proteção de Informações" />
            </Head>

            <Header />

            <Box py={{ base: 16, md: 24 }} px={8} maxW="800px" mx="auto">
                <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb={6} textAlign="center" color="green.900">
                    Política de Privacidade
                </Heading>
                <Text fontSize={{ base: 'lg', md: 'xl' }} textAlign="center" mb={10} color="gray.600">
                    Saiba como a Tamy coleta, usa e protege suas informações pessoais.
                </Text>

                <VStack spacing={8} align="stretch">
                    <Text fontSize="md" color="gray.700">
                        Sua privacidade é importante para nós. É política da Tamy respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Tamy, e outros sites que possuímos e operamos.
                    </Text>
                    <Text fontSize="md" color="gray.700">
                        Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemos por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                    </Text>

                    {/* Add sections with headings to make it more scannable */}
                    <Heading as="h2" fontSize={{ base: 'lg', md: '2xl' }} color="green.700">
                        Coleta de Informações
                    </Heading>
                    <Text fontSize="md" color="gray.700">
                        Coletamos informações pessoais apenas quando necessário para fornecer o melhor serviço possível. As informações podem incluir nome, e-mail, número de telefone, dados de pagamento, e quaisquer outras informações relacionadas à sua experiência financeira com a Tamy.
                    </Text>

                    <Heading as="h2" fontSize={{ base: 'lg', md: '2xl' }} color="green.700">
                        Uso de Informações
                    </Heading>
                    <Text fontSize="md" color="gray.700">
                        As informações coletadas são usadas apenas para melhorar a experiência do usuário e garantir a entrega adequada de nossos serviços. Não compartilhamos suas informações com terceiros, exceto quando exigido por lei ou com o seu consentimento explícito.
                    </Text>

                    <Heading as="h2" fontSize={{ base: 'lg', md: '2xl' }} color="green.700">
                        Segurança de Dados
                    </Heading>
                    <Text fontSize="md" color="gray.700">
                        Usamos medidas de segurança modernas para proteger suas informações contra perda, roubo e acesso não autorizado. Isso inclui o uso de criptografia e autenticação de dois fatores (2FA).
                    </Text>

                    <Divider />

                    {/* Call to Action */}
                    {/* <Box mt={6}>
                        <HStack justify="center">
                            <Text fontSize="md" color="gray.600">Dúvidas sobre nossa Política de Privacidade?</Text>
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

export default PoliticaDePrivacidade;

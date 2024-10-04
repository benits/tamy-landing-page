import React from 'react';
import { Box, Heading, SimpleGrid, VStack, Icon, Text } from '@chakra-ui/react';
import { FaWhatsapp, FaUserAlt, FaSyncAlt } from 'react-icons/fa';

const Benefits: React.FC = () => {
    const benefits = [
        {
            title: 'Interação Fácil pelo WhatsApp',
            description: 'Acesse e gerencie suas finanças a qualquer momento, diretamente pelo WhatsApp, sem complicações.',
            icon: FaWhatsapp,
        },
        {
            title: 'Assistência Financeira Personalizada',
            description: 'Receba dicas e insights personalizados com base nos seus hábitos financeiros e metas.',
            icon: FaUserAlt,
        },
        {
            title: 'Sincronização Automática',
            description: 'Conecte suas contas bancárias e acompanhe suas transações em tempo real, tudo em um só lugar.',
            icon: FaSyncAlt,
        },
    ];

    return (
        <Box as="section" py={{ base: 20, md: 28 }} px={8} id="benefits">
            <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} textAlign="center" mb={16}>
                Por que escolher a Tamy?
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                {benefits.map((benefit, index) => (
                    <VStack key={index} spacing={4} textAlign="center">
                        <Icon as={benefit.icon} boxSize="80px" color="blue.500" mb={4} />
                        <Heading as="h3" fontSize="xl">
                            {benefit.title}
                        </Heading>
                        <Text color="gray.600">{benefit.description}</Text>
                    </VStack>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Benefits;

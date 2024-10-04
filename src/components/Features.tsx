// components/Features.tsx
import {
    Box,
    Heading,
    Icon,
    SimpleGrid,
    Stack,
    Text
} from '@chakra-ui/react';
import React from 'react';
import { FaChartLine, FaShieldAlt, FaWallet } from 'react-icons/fa';

const Features: React.FC = () => {
    const features = [
        {
            title: 'Cadastro de Transações',
            description:
                'Registre suas despesas e receitas de forma simples e rápida pelo WhatsApp.',
            icon: FaWallet,
        },
        {
            title: 'Alertas Personalizados',
            description:
                'Receba notificações e lembretes para manter suas finanças em dia.',
            icon: FaChartLine,
        },
        {
            title: 'Segurança Avançada',
            description:
                'Seus dados são protegidos com a mais alta tecnologia de segurança.',
            icon: FaShieldAlt,
        },
    ];

    return (
        <Box as="section" py={{ base: 20, md: 28 }} px={8} id="features">
            <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '4xl' }}
                textAlign="center"
                mb={16}
            >
                Funcionalidades Principais
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                {features.map((feature, index) => (
                    <Stack
                        key={index}
                        spacing={4}
                        textAlign="center"
                        alignItems="center"
                    >
                        <Icon as={feature.icon} boxSize={12} color="blue.500" />
                        <Heading as="h3" fontSize="xl">
                            {feature.title}
                        </Heading>
                        <Text color="gray.600">{feature.description}</Text>
                    </Stack>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Features;

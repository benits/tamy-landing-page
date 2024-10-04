import {
    Box,
    Center,
    HStack,
    Heading,
    Icon,
    SimpleGrid,
    Text,
    VStack,
    useColorModeValue
} from '@chakra-ui/react';
import React from 'react';
import { FaBullhorn, FaChartLine, FaRegImage, FaShieldAlt, FaUserShield, FaWallet } from 'react-icons/fa';
import WhatsAppButton from './WhatsAppButton';

const Features: React.FC = () => {
    const features = [
        {
            title: 'Cadastro de Transações',
            description: 'Registre suas despesas e receitas de forma simples e rápida pelo WhatsApp.',
            icon: FaWallet,
        },
        {
            title: 'Alertas Personalizados',
            description: 'Receba notificações e lembretes para manter suas finanças em dia.',
            icon: FaChartLine,
        },
        {
            title: 'Segurança Avançada',
            description: 'Seus dados são protegidos com a mais alta tecnologia de segurança.',
            icon: FaShieldAlt,
        },
        {
            title: 'Reconhecimento de Imagens',
            description: 'Envie fotos de cupons ou notas fiscais e a Tamy registrará os detalhes automaticamente.',
            icon: FaRegImage,
        },
        {
            title: 'Reconhecimento de Áudio',
            description: 'Fale com a Tamy via áudio e ela converterá sua fala em texto para registrar transações.',
            icon: FaBullhorn,
        },
        {
            title: 'Insights Personalizados',
            description: 'Receba dicas e insights financeiros personalizados com base em suas transações.',
            icon: FaUserShield,
        },
    ];

    const cardBg = useColorModeValue('white', 'gray.700');
    const hoverBg = useColorModeValue('gray.50', 'gray.600');
    const textColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Box as="section" py={{ base: 10, md: 28 }} px={{ base: 4, md: 8 }} id="features">
            <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '4xl' }}
                textAlign="center"
                mb={12}
                color="green.900"
            >
                Funcionalidades Principais
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} justifyItems="center">
                {features.map((feature, index) => (
                    <VStack
                        key={index}
                        spacing={4}
                        textAlign="center"
                        bg={cardBg}
                        p={{ base: 4, md: 8 }}
                        borderRadius="md"
                        shadow="md"
                        _hover={{ bg: hoverBg, transform: 'scale(1.05)', transition: '0.3s ease' }}
                        transition="all 0.3s ease"
                        maxW={{ base: '100%', sm: '80%', md: '300px' }}
                    >
                        <HStack>
                            <Icon as={feature.icon} boxSize={{ base: 10, md: 14 }} color="green.500" />
                        </HStack>
                        <Heading as="h3" fontSize={{ base: 'md', md: 'lg' }} color="green.800">
                            {feature.title}
                        </Heading>
                        <Text fontSize={{ base: 'sm', md: 'md' }} color={textColor}>
                            {feature.description}
                        </Text>
                    </VStack>
                ))}
            </SimpleGrid>

            <Center mt={10}>
                {/* WhatsApp CTA Button */}
                <WhatsAppButton />
            </Center>
        </Box>
    );
};

export default Features;

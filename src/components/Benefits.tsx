import React from 'react';
import { Box, Heading, SimpleGrid, VStack, Icon, Text, Center, Badge, HStack } from '@chakra-ui/react';
import { FaWhatsapp, FaUserAlt, FaSyncAlt } from 'react-icons/fa';

const Benefits: React.FC = () => {
    const benefits = [
        {
            title: 'Interação Fácil pelo WhatsApp',
            description: 'Sem complicações: Gerencie suas finanças a qualquer momento, sem sair do WhatsApp.',
            icon: FaWhatsapp,
        },
        {
            title: 'Assistência Financeira Personalizada',
            description: 'Dicas e insights sob medida, com base nos seus hábitos financeiros e metas pessoais.',
            icon: FaUserAlt,
        },
        {
            title: 'Sincronização Automática',
            description: 'Conecte suas contas bancárias e acompanhe suas transações em tempo real.',
            icon: FaSyncAlt,
            badge: "Em Breve"
        },
    ];

    return (
        <Box as="section" py={{ base: 20, md: 28 }} px={8} id="benefits">
            <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} textAlign="center" mb={16} color="green.900">
                Por que escolher a Tamy?
            </Heading>
            <Center>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                    {benefits.map((benefit, index) => (
                        <VStack
                            key={index}
                            spacing={4}
                            textAlign="center"
                            maxW="300px"
                            _hover={{ transform: 'scale(1.05)', transition: '0.3s ease' }}
                        >
                            <Box position="relative" display="inline-block">
                                <Icon
                                    as={benefit.icon}
                                    boxSize="60px"
                                    color="green.500"
                                    mb={4}
                                    _hover={{ color: 'green.700' }}
                                />
                                {benefit.badge && (
                                    <Badge
                                        colorScheme="green"
                                        variant="solid"
                                        position="absolute"
                                        top="-10px"
                                        right="-50px"
                                        fontSize="0.7em"
                                        px={2}
                                        border="2px solid white"
                                        borderRadius="md"
                                    >
                                        {benefit.badge}
                                    </Badge>
                                )}
                            </Box>
                            <HStack>
                                <Heading as="h3" fontSize="lg" color="green.800">
                                    {benefit.title}
                                </Heading>
                            </HStack>
                            <Text fontSize="sm" color="gray.600">
                                {benefit.description}
                            </Text>
                        </VStack>
                    ))}
                </SimpleGrid>
            </Center>
        </Box>
    );
};

export default Benefits;

// components/Hero.tsx
import { Box, Stack, Heading, Text, VStack, Image, Center, HStack, Icon } from '@chakra-ui/react';
import { FaMagic } from 'react-icons/fa';
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const Hero: React.FC = () => {
    return (
        <Box as="section" bg="white" py={{ base: 8, md: 20 }} px={{ base: 4, md: 16 }}>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                alignItems="center"
                justifyContent="space-evenly"
                spacing={{ base: 8, md: 10 }}
            >
                {/* Left Side: Text Content */}
                <VStack
                    alignItems={{ base: 'center', md: 'flex-start' }}
                    maxW="600px"
                    spacing={6}
                    textAlign={{ base: 'center', md: 'left' }}
                >
                    {/* Badge */}
                    <HStack
                        spacing={2}
                        bgGradient="linear(to-r, green.500, green.700)"
                        color="white"
                        px={4}
                        py={1}
                        borderRadius="full"
                        alignSelf={{ base: 'center', md: 'flex-start' }}
                        boxShadow="md"
                    >
                        <Icon as={FaMagic} boxSize={4} />
                        <Text fontSize="sm" fontWeight="bold">
                            Experimente a Tamy Agora
                        </Text>
                    </HStack>

                    {/* Hero Title */}
                    <Heading
                        as="h1"
                        fontSize={{ base: '2xl', md: '5xl' }}
                        fontWeight="bold"
                        color="green.900"
                        lineHeight={{ base: 'shorter', md: 'normal' }}
                    >
                        Tome o Controle de Suas Finanças Agora com a Tamy
                    </Heading>

                    {/* Hero Subtext */}
                    <Text fontSize={{ base: 'md', md: 'xl' }} color="gray.600">
                        Tamy é sua assistente financeira no WhatsApp que facilita o controle de gastos
                        e o planejamento financeiro, de forma simples e automática.
                    </Text>

                    {/* Additional Hero Text */}
                    <Text fontSize={{ base: 'sm', md: 'lg' }} color="gray.500">
                        Gerencie suas transações em tempo real, acompanhe metas de economia e
                        fique no controle de sua vida financeira sem complicações.
                    </Text>

                    {/* WhatsApp CTA Button */}
                    <Center w="full">
                        <WhatsAppButton />
                    </Center>
                </VStack>

                {/* Right Side: Phone Mockup */}
                <Image
                    src="/static/images/tamy-whatsapp-preview.png" // Ensure high-resolution image here
                    alt="Tamy WhatsApp preview"
                    boxSize={{ base: '250px', md: '500px' }}
                    objectFit="contain"
                    borderRadius="md"
                />
            </Stack>
        </Box>
    );
};

export default Hero;

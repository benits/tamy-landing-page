import { Box, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const Hero: React.FC = () => {
    return (
        <Box as="section" bg="white" py={{ base: 10, md: 20 }} px={{ base: 6, md: 16 }}>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                alignItems="center"
                justifyContent="space-evenly"
                spacing={10}
            >
                {/* Left side: Text Content */}
                <VStack alignItems="flex-start" maxW="600px" spacing={6} textAlign={{ base: 'center', md: 'left' }}>
                    <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" color="blue.700">
                        Simplifique o Controle das Suas Finanças com a Tamy
                    </Heading>
                    <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.600">
                        Sua assistente financeira inteligente no WhatsApp. Gerencie gastos, acompanhe transações e fique no controle da sua vida financeira com facilidade.
                    </Text>
                    <WhatsAppButton />
                </VStack>

                {/* Right side: Image */}
                <Image
                    src="/static/images/tamy-whatsapp-preview.png" // Update with your actual image path
                    alt="Tamy WhatsApp preview"
                    boxSize={{ base: '350px', md: '650px' }}
                    objectFit="contain"
                    borderRadius="md"
                />
            </Stack>
        </Box>
    );
};

export default Hero;

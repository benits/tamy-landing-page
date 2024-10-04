import React from 'react';
import { Box, Heading, Text, SimpleGrid, Image, Center } from '@chakra-ui/react';
import WhatsAppButton from './WhatsAppButton';

const ChatExamples: React.FC = () => {
    return (
        <Box as="section" py={{ base: 16, md: 18 }} px={8}>
            <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} textAlign="center" mb={8}>
                Veja Como a Tamy Funciona
            </Heading>
            <Text fontSize="lg" textAlign="center" mb={12}>
                Dê uma olhada em exemplos de interações reais com a Tamy via WhatsApp.
            </Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} justifyItems="center">
                <Image
                    src="/static/images/tamy-whatsapp-example-1.png"
                    alt="Exemplo de interação com Tamy 1"
                    boxSize="550px"  // Adjust the image size here
                    objectFit="contain"
                />
                <Image
                    src="/static/images/tamy-whatsapp-example-2.png"
                    alt="Exemplo de interação com Tamy 2"
                    boxSize="550px"
                    objectFit="contain"
                />
                <Image
                    src="/static/images/tamy-whatsapp-example-3.png"
                    alt="Exemplo de interação com Tamy 3"
                    boxSize="550px"
                    objectFit="contain"
                />
            </SimpleGrid>

            <Center mt={10}>
                <WhatsAppButton />
            </Center>
        </Box>
    );
};

export default ChatExamples;

import { Box, Center, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const ChatExamples: React.FC = () => {
    const chatExamples = [
        {
            imgSrc: "/static/images/tamy-whatsapp-example-2.png",
            alt: "Registro de Gasto",
            title: "Passo 1: Informe Seu Gasto",
            description: "Informe rapidamente seu gasto para a Tamy, como o valor e a categoria. A Tamy facilita o registro pedindo apenas informações essenciais.",
        },
        {
            imgSrc: "/static/images/tamy-whatsapp-example-3.png",
            alt: "Confirmação do Gasto",
            title: "Passo 2: Confirme Seus Dados",
            description: "Veja o resumo completo do gasto registrado e confirme ou edite, conforme necessário. A Tamy sempre verifica os dados antes de finalizar.",
        },
        {
            imgSrc: "/static/images/tamy-whatsapp-example-4.png",
            alt: "Reconhecimento de Imagem e Áudio",
            title: "Passo 3: Envie Notas Fiscais e Áudios",
            description: "Com Tamy, você pode enviar uma foto de um cupom ou nota fiscal para extração automática de dados ou usar áudio para registrar despesas sem digitar.",
        }
    ];

    return (
        <Box as="section" py={{ base: 16, md: 20 }} px={{ base: 6, md: 16 }} bg="gray.50">
            {/* Heading Section */}
            <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} textAlign="center" mb={8} color="green.900">
                Veja Como a Tamy Funciona
            </Heading>
            <Text fontSize="lg" textAlign="center" mb={12} color="gray.600">
                Descubra como Tamy facilita o controle de suas finanças com interações simples e rápidas via WhatsApp.
            </Text>

            {/* Grid layout for all devices */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} justifyItems="center">
                {chatExamples.map((example, index) => (
                    <VStack
                        key={index}
                        spacing={4}
                        textAlign="center"
                        _hover={{ transform: 'scale(1.05)', transition: '0.3s ease' }} // Adds hover effect
                    >
                        <Image
                            src={example.imgSrc}
                            alt={example.alt}
                            boxSize={{ base: "250px", md: "350px" }}
                            objectFit="contain"
                        />
                        <Heading fontSize={{ base: "lg", md: "xl" }} color="green.800">{example.title}</Heading>
                        <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">{example.description}</Text>
                    </VStack>
                ))}
            </SimpleGrid>

            {/* Call-to-action */}
            <Center mt={10}>
                <WhatsAppButton />
            </Center>
        </Box>
    );
};

export default ChatExamples;

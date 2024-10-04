// components/FAQ.tsx
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
    VStack
} from '@chakra-ui/react';
import React from 'react';

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: 'Como a Tamy funciona?',
            answer:
                'A Tamy é uma assistente financeira que interage com você pelo WhatsApp, ajudando no controle das suas finanças pessoais de forma simples e prática.',
        },
        {
            question: 'Preciso pagar para usar a Tamy?',
            answer:
                'Não, a Tamy é gratuita. Você pode começar a usar agora mesmo sem nenhum custo.',
        },
        {
            question: 'Meus dados estão seguros?',
            answer:
                'Sim, levamos a segurança a sério. Utilizamos tecnologias avançadas para proteger todas as suas informações.',
        },
        {
            question: 'Posso sincronizar minhas contas bancárias?',
            answer:
                'Sim, a Tamy permite que você sincronize suas contas para um acompanhamento automático das transações.',
        },
        // Adicione mais perguntas e respostas conforme necessário
    ];

    return (
        <Box as="section" py={{ base: 20, md: 28 }} px={8} id="faq">
            <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '4xl' }}
                textAlign="center"
                mb={16}
            >
                Perguntas Frequentes
            </Heading>
            <VStack spacing={4} align="stretch" maxW="800px" mx="auto">
                <Accordion allowMultiple>
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} border="none">
                            <AccordionButton
                                _expanded={{ bg: 'blue.500', color: 'white' }}
                                bg="gray.100"
                                borderRadius="md"
                                mb={2}
                            >
                                <Box flex="1" textAlign="left" fontWeight="bold">
                                    {faq.question}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </VStack>
        </Box>
    );
};

export default FAQ;

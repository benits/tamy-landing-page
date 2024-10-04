// components/FAQ.tsx
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Heading,
    VStack,
    HStack,
    Icon,
    Text
} from '@chakra-ui/react';
import { FaChartLine, FaQuestionCircle, FaShieldAlt, FaSyncAlt } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';
import React from 'react';

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: 'Como a Tamy funciona?',
            answer: `
                A Tamy é sua assistente financeira no WhatsApp, onde você pode registrar gastos,
                receber lembretes personalizados, e obter insights financeiros, tudo por uma interface simples e prática.
                Basta enviar uma mensagem para o nosso número e começar a gerenciar suas finanças!
            `,
            icon: FaQuestionCircle,
        },
        {
            question: 'Preciso pagar para usar a Tamy?',
            answer: `
                Não, a Tamy é totalmente gratuita! Você pode começar a usá-la agora mesmo sem nenhum custo.
                Aproveite todas as funcionalidades para organizar suas finanças de forma eficiente.
            `,
            icon: FaQuestionCircle,
        },
        {
            question: 'Meus dados estão seguros?',
            answer: `
                Sim, levamos sua segurança muito a sério. Todas as suas informações são protegidas com tecnologias avançadas
                de criptografia, garantindo que seus dados financeiros estejam sempre seguros e protegidos.
            `,
            icon: FaShieldAlt,
        },
        {
            question: 'O que é Open Finance e como ele funciona com a Tamy?',
            answer: `
                Open Finance é um sistema que permite integrar suas contas bancárias e outras instituições financeiras
                diretamente com a Tamy. Isso facilita o acompanhamento automático de suas transações em tempo real,
                para que você possa ver todos os seus gastos em um só lugar.
            `,
            icon: MdOpenInNew,
        },
        {
            question: 'Quais são os benefícios de usar a Tamy em vez de um aplicativo financeiro tradicional?',
            answer: `
                A Tamy simplifica a gestão financeira diretamente no WhatsApp, sem a necessidade de baixar mais um aplicativo.
                Você pode registrar transações, consultar seu histórico, definir metas e muito mais com comandos simples de texto,
                tudo enquanto conversa naturalmente com a assistente.
            `,
            icon: FaQuestionCircle,
        },
        {
            question: 'Posso sincronizar minhas contas bancárias?',
            answer: `
                Sim, Tamy permite sincronizar suas contas bancárias via Open Finance, atualizando automaticamente suas transações
                financeiras. Isso facilita o controle do seu dinheiro e garante que você esteja sempre informado.
            `,
            icon: FaSyncAlt,
        },
        {
            question: 'Tamy me ajuda a criar metas financeiras?',
            answer: `
                Sim! Com a Tamy, você pode definir metas financeiras personalizadas, como economizar para uma viagem ou pagar uma dívida.
                Ela te ajuda a acompanhar seu progresso e oferece dicas para você alcançar seus objetivos.
            `,
            icon: FaChartLine,
        },
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
                                _expanded={{ bg: 'green.500', color: 'white' }}
                                bg="gray.100"
                                borderRadius="md"
                                mb={2}
                            >
                                <HStack flex="1" textAlign="left" fontWeight="bold">
                                    <Icon as={faq.icon} boxSize={5} />
                                    <Text>{faq.question}</Text>
                                </HStack>
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

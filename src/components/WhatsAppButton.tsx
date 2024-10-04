// components/WhatsAppButton.tsx
import React from 'react';
import { Button } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
    const whatsappNumber = '+5548988661447';
    const message = 'Olá, gostaria de saber mais sobre a Tamy!';
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(
        /[^0-9]/g,
        ''
    )}?text=${encodeURIComponent(message)}`;

    return (
        <Button
            as="a"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaWhatsapp />}
            colorScheme="green"
            size={{ base: 'sm', md: 'md' }}
            flexWrap="wrap"
        >
            Fale com a Tamy no WhatsApp
        </Button>
    );
};

export default WhatsAppButton;

// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ChatExamples from '@/components/ChatExamples';

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Tamy - Sua Assistente Financeira Pessoal</title>
                <meta
                    name="description"
                    content="Gerencie suas finanças de forma inteligente com a Tamy, sua assistente financeira no WhatsApp."
                />
                <meta
                    name="keywords"
                    content="finanças pessoais, assistente financeira, WhatsApp, gestão financeira, Tamy"
                />
            </Head>
            <Header />
            <Hero />
            <ChatExamples />
            <Benefits />
            <Features />
            <FAQ />
            <Footer />
        </>
    );
};

export default Home;

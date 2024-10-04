import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <link rel="manifest" href="/static/manifest.json" />
                <meta name="theme-color" content="#319795" />
                <meta name="description" content="Tamy is a WhatsApp chatbot that helps you with your daily tasks." />
                <meta name="keywords" content="tamy, whatsapp, chatbot, tasks" />
                <meta name="author" content="Tamy Team" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

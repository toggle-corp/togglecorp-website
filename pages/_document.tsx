import {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document';

function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="shortcut icon"
                    href="/favicon.png"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600&display=swap"
                    rel="stylesheet"
                />
                <script
                    async
                    src="https://umami.dev.togglecorp.com/script.js"
                    data-website-id="4f6c3f97-7858-48ac-85f3-57f4916b41a3"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default Document;

import {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document'
// import Image from 'next/image';

function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="/tc-logo.png" />
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
                    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap"
                    rel="stylesheet"
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

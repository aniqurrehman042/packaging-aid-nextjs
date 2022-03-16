import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" type="image/x-icon"
                        href="https://firebasestorage.googleapis.com/v0/b/packagingaid.appspot.com/o/packaging-aid-logo.png?alt=media" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
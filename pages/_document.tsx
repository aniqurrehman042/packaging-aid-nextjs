import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        // <!--Start of Tawk.to Script-->
        if (typeof window !== 'undefined') {
            var Tawk_API: any = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function () {
                var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/60e874c0649e0a0a5ccb678e/1fa60g46i';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode!.insertBefore(s1, s0);
            })();
        }
        // <!--End of Tawk.to Script-->
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
import 'styles/variables.css';
import 'styles/globals.css';

import type { AppProps } from 'next/app';

function MyApp(props: AppProps) {
    const {
        Component,
        pageProps,
    } = props;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...pageProps} />;
}

export default MyApp;

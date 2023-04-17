import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='container mx-auto p-5 md:p-14'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

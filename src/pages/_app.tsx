
import { AppProvider } from '@/context';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      < Component {...pageProps} />
    </AppProvider>

  );
}
export default App;

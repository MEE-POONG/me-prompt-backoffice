import { MaterialTailwindControllerProvider } from '@/context';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <MaterialTailwindControllerProvider>
      < Component {...pageProps} />
    </MaterialTailwindControllerProvider>
  );
}
export default App;

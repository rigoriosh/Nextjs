// import { Navbar } from '@/components/Navbar'
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import '@/styles/globals.css'

type NextPageWithLayout = NextPage & {
  // getLayout?: (page: JSX.Element )=> JSX.Element; // igual q lo siguiente
  getLayout?: (page: ReactElement )=> ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page); // esta función para manejar layout desde cualquier pagina
  // return <>
  //   {/* <Navbar /> */}
  //   <Component {...pageProps} />
  // </>
  return getLayout( <Component {...pageProps} />)
}

export default App

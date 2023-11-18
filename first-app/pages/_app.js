// import { Navbar } from '@/components/Navbar'
import '@/styles/globals.css'

export function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page); // esta función para manejar layout desde cualquier pagina
  // return <>
  //   {/* <Navbar /> */}
  //   <Component {...pageProps} />
  // </>
  return getLayout( <Component {...pageProps} />)
}

export default App

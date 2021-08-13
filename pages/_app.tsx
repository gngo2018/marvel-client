import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import '../styles/globals.css'

library.add(fab);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}
export default MyApp

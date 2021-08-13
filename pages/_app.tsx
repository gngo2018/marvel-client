import '../styles/globals.css'
import utilsCss from '../styles/utils.module.css'
import type { AppProps } from 'next/app'
import Header from '../components/layout/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className={utilsCss.app_body}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Chakra } from 'components/'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  )
}

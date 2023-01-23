import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager
} from '@chakra-ui/react'
import { ReactNode, useState, useEffect } from 'react'
import theme from '../lib/theme'

interface ChakraProps {
  children: ReactNode
  cookies: string
}

const Chakra = ({ children, cookies }: ChakraProps) => {
  const [coookiesType, setCookiesType] = useState<typeof cookies>()

  useEffect(() => {
    setCookiesType(typeof cookies)
  }, [cookies])

  const colorModeManager =
    coookiesType === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export async function getServerSideProps({ req }: any) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}

export default Chakra

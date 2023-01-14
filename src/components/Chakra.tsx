import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from "@chakra-ui/react"
import { ReactNode } from "react"
import theme from '../lib/theme'


interface ChakraProps {
  children: ReactNode
  cookies: string
}

const Chakra = ({children, cookies}: ChakraProps) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export async function getServerSideProps({ req }:any) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}

export default Chakra
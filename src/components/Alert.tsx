import { Alert as ChakraAlert, AlertIcon, ScaleFade } from '@chakra-ui/react'

interface AlertComponentProps {
  isVisible: boolean
  message: string
}

const EditorAlert = ({ isVisible, message }: AlertComponentProps) => {
  return (
    <>
      {isVisible ? (
        <ScaleFade
          initialScale={0.9}
          in={isVisible}
          style={{ zIndex: 30, position: 'relative' }}
        >
          <ChakraAlert status="success" variant="solid" pos="absolute" top="0">
            <AlertIcon />
            {message}
          </ChakraAlert>
        </ScaleFade>
      ) : undefined}
    </>
  )
}

export default EditorAlert

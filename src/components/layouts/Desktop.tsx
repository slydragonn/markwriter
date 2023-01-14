import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface DesktopLayoutProps {
  markdownEditor: ReactNode
  htmlPreview: ReactNode
}

const DesktopLayout = ({markdownEditor, htmlPreview}: DesktopLayoutProps) => {
  return (
    <Box display='flex' w='100%' h='100%'>
      <Box w='50%' h='100%'>
        {markdownEditor}
      </Box>
      <Box w='50%'>
        {htmlPreview}
      </Box>
    </Box>
  )
}

export default DesktopLayout
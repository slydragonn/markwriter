import { Box } from '@chakra-ui/react'
import EditorLayoutContext, { Orientation } from 'context/EditorLayout'
import { ReactNode, useContext } from 'react'

interface DesktopLayoutProps {
  markdownEditor: ReactNode
  htmlPreview: ReactNode
}

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse' | undefined
type EditorStyles = {
  flexDir: FlexDirection
  width: string
  height: string
}

const ResponsiveEditorLayout = ({ markdownEditor, htmlPreview }: DesktopLayoutProps) => {

  const {orientation} = useContext(EditorLayoutContext)

  const getStylesFromOrientation = (orientation: Orientation): EditorStyles => {
    if (orientation === 'horizontal') {
      return {
        flexDir: 'column',
        width: '100%',
        height: '50%'
      }
    }

    return {
      flexDir: 'row',
      width: '50%',
      height: '100%'
    }
  }

  const editorStyles = getStylesFromOrientation(orientation)

  const borderLeft = orientation === 'vertical' ? '1px solid rgb(255, 255, 255, 0.3)' : '1px solid transparent'
  const borderTop = orientation === 'horizontal' ? '1px solid rgb(255, 255, 255, 0.3)' : '1px solid transparent'

  return (
    <Box display="flex" style={{flexDirection: editorStyles.flexDir}} w="100%" h="100%">
      <Box w={editorStyles.width} h={editorStyles.height}>{markdownEditor}</Box>
      <Box w={editorStyles.width} h={editorStyles.height} borderTop={borderTop} borderLeft={borderLeft}>{htmlPreview}</Box>
    </Box>
  )
}

export default ResponsiveEditorLayout

import { Box } from '@chakra-ui/react'
import useCodemirror from 'hooks/useCodemirror'
import { useEffect, useContext } from 'react'
import { EditorStateContext } from 'context/'

interface MarkdownEditorProps {
  handleEditorValueChange: (state: string) => void
}
const MarkdownEditor = ({ handleEditorValueChange }: MarkdownEditorProps) => {
  const getLastCodeValue = () => {
    if (typeof window !== 'undefined') {
      const codeValue = localStorage.getItem('markwriter-code')

      return codeValue ? codeValue : null
    }
    return null
  }

  const [ref, editorView] = useCodemirror<HTMLDivElement>({
    initialDoc: getLastCodeValue() ?? '',
    handleEditorValueChange
  })

  const context = useContext(EditorStateContext)

  useEffect(() => {
    if (!editorView) return
    context?.handleState(editorView)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorView])

  return (
    <Box ref={ref} w="100%" h="100%" fontSize="md" backgroundColor="#111111" />
  )
}

export default MarkdownEditor

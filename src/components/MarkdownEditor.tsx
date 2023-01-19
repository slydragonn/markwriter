import { Box } from '@chakra-ui/react'
import useCodemirror from 'hooks/useCodemirror'
import { useEffect, useContext } from 'react'
import EditorStateContext from 'context/EditorState'

interface MarkdownEditorProps {
  handleEditorValueChange: (state: string) => void
}
const MarkdownEditor = ({ handleEditorValueChange }: MarkdownEditorProps) => {
  const [ref, editorView] = useCodemirror<HTMLDivElement>({
    handleEditorValueChange
  })

  const context = useContext(EditorStateContext)

  useEffect(() => {
    if (!editorView) return
    context?.handleState(editorView)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorView])

  return (
    <Box ref={ref} w="100%" h="100%" fontSize="md" backgroundColor="#282c34" />
  )
}

export default MarkdownEditor

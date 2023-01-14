import MarkdownEditor from 'components/MarkdownEditor'
import DesktopLayout from 'components/layouts/Desktop'
import { Box } from '@chakra-ui/react'
import { EditorStateProvider } from 'context/EditorState'
import Navbar from 'components/Navbar'
import HTMLPreview from 'components/HtmlPreview'
import { useState } from 'react'

const EditorPage = () => {
  const [code, setCode] = useState('')
  return (
    <EditorStateProvider>
      <Navbar />
      <Box as="main">
        <Box w="100%" h="calc(100vh - 45px)">
          <DesktopLayout
            markdownEditor={<MarkdownEditor handleChange={setCode} />}
            htmlPreview={<HTMLPreview code={code} />}
          />
        </Box>
      </Box>
    </EditorStateProvider>
  )
}

export default EditorPage

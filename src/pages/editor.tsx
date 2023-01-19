import MarkdownEditor from 'components/MarkdownEditor'
import ResponsiveEditorLayout from 'components/layouts/ResponsiveEditor'
import { Box } from '@chakra-ui/react'
import { EditorStateProvider } from 'context/EditorState'
import Navbar from 'components/Navbar'
import HTMLPreview from 'components/HtmlPreview'
import { useState } from 'react'
import Head from 'next/head'
import {EditorLayoutProvider} from 'context/EditorLayout'
import { EditorCodeValueProvider } from 'context/EditorCodeValue'

const EditorPage = () => {
  const [editorCodeValue, setEditorCodeValue] = useState('')

  return (
    <>
    <Head>
      <title>MarkWriter | Editor</title>
      <link rel="icon" href="/markico.jpg" />
    </Head>
    <EditorStateProvider>
      <EditorCodeValueProvider>
        <EditorLayoutProvider>
          <Navbar />
          <Box as="main">
            <Box w="100%" h="calc(100vh - 45px)">
              <ResponsiveEditorLayout
                markdownEditor={<MarkdownEditor handleEditorValueChange={setEditorCodeValue} />}
                htmlPreview={<HTMLPreview code={editorCodeValue} />}
              />
            </Box>
          </Box>
        </EditorLayoutProvider>
      </EditorCodeValueProvider>
    </EditorStateProvider>
    </>
  )
}

export default EditorPage

export { getServerSideProps } from '../components/Chakra'

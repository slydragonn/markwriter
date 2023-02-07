import { MarkdownEditor, HtmlPreview, Navbar } from 'components/'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import Head from 'next/head'
import { ResponsiveEditorLayout } from 'components/layouts'
import {
  EditorStateProvider,
  EditorCodeValueProvider,
  EditorLayoutProvider
} from 'context/'

const EditorPage = () => {
  const [editorCodeValue, setEditorCodeValue] = useState('')

  const handleEditorValueChange = (value: string) => {
    localStorage.setItem('markwriter-code', value)
    setEditorCodeValue(value)
  }

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
                  markdownEditor={
                    <MarkdownEditor
                      handleEditorValueChange={handleEditorValueChange}
                    />
                  }
                  htmlPreview={<HtmlPreview code={editorCodeValue} />}
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

export { getServerSideProps } from 'components/Chakra'

import { Box } from '@chakra-ui/react'
import { unified } from 'unified'
import { defaultSchema } from 'hast-util-sanitize'
import 'github-markdown-css/github-markdown.css'
import { createElement, useContext, useEffect } from 'react'
import { RemarkCode } from 'components/'
import rehypeReact from 'rehype-react'
import rehypeSanitize from 'rehype-sanitize'
import rehypeParse from 'rehype-parse'
import { marked } from 'marked'
import { EditorCodeValueContext } from 'context/'

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code || []), 'className']
  }
}

interface HTMLPreviewProps {
  code: string
}

const HTMLPreview = ({ code }: HTMLPreviewProps) => {
  const { html, md } = useContext(EditorCodeValueContext)

  const markdownToHtml = marked.parse(code)
  const richHtml = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSanitize, { ...schema })
    .use(rehypeReact, {
      createElement,
      components: {
        code: RemarkCode
      }
    })
    .processSync(markdownToHtml).result

  useEffect(() => {
    md.setCode(code)
    html.setCode(markdownToHtml)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code])

  return (
    <Box
      className="markdown-body"
      w="100%"
      h="100%"
      backgroundColor="#111111"
      p="10px"
      overflowY="auto"
    >
      {richHtml}
    </Box>
  )
}

export default HTMLPreview

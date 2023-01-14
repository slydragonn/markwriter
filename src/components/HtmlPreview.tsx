import { Box } from "@chakra-ui/react"
import { unified } from "unified"
import { defaultSchema } from "hast-util-sanitize"
import 'github-markdown-css/github-markdown.css'
import {createElement} from "react"
import RemarkCode from "components/RemarkCodeBlocks"
import rehypeReact from "rehype-react"
import rehypeSanitize from "rehype-sanitize"
import rehypeParse from "rehype-parse"
import { marked } from "marked"

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

const HTMLPreview = ({code}: HTMLPreviewProps) => {
  const html = marked.parse(code)
  const md = unified()
  .use(rehypeParse, {fragment: true})
  .use(rehypeSanitize, {...schema})
  .use(rehypeReact, {
    createElement,
    components: {
      code: RemarkCode
    }
  })
  .processSync(html).result

  return (
    <Box
      className="markdown-body"
      w='100%'
      h='100%'
      backgroundColor='#282c34'
      p='10px'
      borderLeft='1px solid rgb(255, 255, 255, 0.3)'
      overflowY='auto'
    >
      {md}
    </Box>
  )
}

export default HTMLPreview
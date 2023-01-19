import {useState, createContext, ReactNode, useCallback} from 'react'

type CodeState = {
  code: string
  setCode: (code: string) => void
}

export type ECVContext = {
  html: CodeState
  md: CodeState
}

const initialCodeValueState: ECVContext = {
  html: {
    code: '',
    setCode: () => ''
  },
  md: {
    code: '',
    setCode: () => ''
  }
}

const EditorCodeValueContext = createContext<ECVContext>(initialCodeValueState)

interface EditorCodeValueProviderProps {
  children: ReactNode
}

export const EditorCodeValueProvider = ({children}: EditorCodeValueProviderProps) => {
  const [htmlCode, setHtmlCode] = useState('')
  const [mdCode, setMdCode] = useState('')

  const handleHtml = useCallback(
    (code: string) => setHtmlCode(code),
    []
  )
  const handleMarkdown = useCallback(
    (code: string) => setMdCode(code),
    []
  )

  const editorCodeValueObject: ECVContext = {
    html: {
      code: htmlCode,
      setCode: handleHtml
    },
    md: {
      code: mdCode,
      setCode: handleMarkdown
    }
  }

  return (
    <EditorCodeValueContext.Provider value={editorCodeValueObject}>
      {children}
    </EditorCodeValueContext.Provider>
  )
}

export default EditorCodeValueContext
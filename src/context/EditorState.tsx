import { EditorView } from '@codemirror/view'
import { useState, createContext, useCallback, ReactNode } from 'react'

export type ESContext = {
  editorState: EditorView | null
  handleState: (state: EditorView) => void
}

const EditorStateContext = createContext<ESContext | null>(null)

interface EditorStateProviderProps {
  children: ReactNode
}

export const EditorStateProvider = ({ children }: EditorStateProviderProps) => {
  const [editorState, setEditorState] = useState<EditorView | null>(null)

  const handleState = useCallback(
    (state: EditorView) => setEditorState(state),
    []
  )

  return (
    <EditorStateContext.Provider value={{ editorState, handleState }}>
      {children}
    </EditorStateContext.Provider>
  )
}

export default EditorStateContext

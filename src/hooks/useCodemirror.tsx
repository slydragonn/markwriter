import { useCallback, useState, useEffect, useRef } from 'react'
import { EditorView, keymap, lineNumbers } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import { history, defaultKeymap, historyKeymap } from '@codemirror/commands'
import { oneDark as oneDarkTheme } from '@codemirror/theme-one-dark'
import { syntaxHighlighting, defaultHighlightStyle } from '@codemirror/language'

export const myTheme = EditorView.theme({
  '&': {
    height: '100%',
    outline: 'none !important',
    backgroundColor: 'transparent !important'
  }
})

const syntaxStyles = syntaxHighlighting(defaultHighlightStyle, {
  fallback: true
})

interface useCodemirrorProps {
  initialDoc?: string
  handleEditorValueChange: (state: string) => void
}

const useCodemirror = <T extends Element>({
  initialDoc,
  handleEditorValueChange
}: useCodemirrorProps): [React.MutableRefObject<T | null>, EditorView?] => {
  const element = useRef<T>(null)
  const [editorView, setEditorView] = useState<EditorView>()

  const onUpdate = () =>
    EditorView.updateListener.of(update => {
      if (update.changes) {
        handleEditorValueChange && handleEditorValueChange(update.state.doc.toString())
      }
    })

  const initialState = EditorState.create({
    doc: initialDoc,
    extensions: [
      markdown({
        base: markdownLanguage,
        codeLanguages: languages,
        addKeymap: true
      }),
      lineNumbers(),
      history(),
      keymap.of([...defaultKeymap, ...historyKeymap]),
      EditorView.lineWrapping,
      oneDarkTheme,
      syntaxStyles,
      onUpdate(),
      myTheme
    ]
  })

  useEffect(() => {
    if (!element.current) return

    const view = new EditorView({
      state: initialState,
      parent: element.current
    })
    setEditorView(view)

    return () => view?.destroy()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element])

  return [element, editorView]
}

export default useCodemirror

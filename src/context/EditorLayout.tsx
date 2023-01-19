import { createContext, ReactNode, useState, useCallback } from 'react'

export type Orientation = 'vertical' | 'horizontal'

export type ELContext = {
  orientation: Orientation
  setOrientation: (orientation: Orientation) => void
}

const initialESContextState: ELContext = {
  orientation: 'vertical',
  setOrientation: () => undefined
}

const EditorLayoutContext = createContext<ELContext>(initialESContextState)

interface EditorLayoutProviderProps {
  children: ReactNode
}

export const EditorLayoutProvider = ({children}: EditorLayoutProviderProps) => {
  const [orientation, setOrientation] = useState<Orientation>('vertical')

  const hangleChange = useCallback(
    (orientation: Orientation) => setOrientation(orientation),
    []
  )

  return (
    <EditorLayoutContext.Provider value={{orientation, setOrientation: hangleChange}}>
      {children}
    </EditorLayoutContext.Provider>
  )
}

export default EditorLayoutContext
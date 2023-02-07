import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  MenuDivider
} from '@chakra-ui/react'
import { useContext, useState, ReactNode } from 'react'
import { BsCaretDownFill, BsArrowLeftShort } from 'react-icons/bs'
import EditorStateContext from 'context/EditorState'
import { Transaction } from '@codemirror/state'
import markdownSyntaxList from 'components/MarkdownSyntaxList'
import Link from 'next/link'
import {
  AiOutlineClear as ClearIcon,
  AiOutlineCopy as CopyIcon,
  AiFillLayout as LayoutICon,
  AiFillEdit as EditICon
} from 'react-icons/ai'
import EditorLayoutContext from 'context/EditorLayout'
import EditorCodeValueContext from 'context/EditorCodeValue'
import EditorAlert from 'components/Alert'
import useAlert from 'hooks/useAlert'

type MenuItemObject = {
  value: string
  method: (param: unknown) => void
}

interface CustomMenuProps {
  name: string
  icon: ReactNode
  menuItems: MenuItemObject[]
}

const CustomMenu = ({ name, icon, menuItems }: CustomMenuProps) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsCaretDownFill />}
        size="sm"
        colorScheme="gray"
        variant="outline"
        aria-label={name}
      >
        {icon}
      </MenuButton>
      <MenuList>
        {menuItems.map(item => (
          <MenuItem key={item.value} onClick={item.method}>
            {item.value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

const FileOptionsMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsCaretDownFill />}
        size="sm"
        colorScheme="gray"
        variant="outline"
      >
        File
      </MenuButton>
      <MenuList>
        <MenuItem>Copy Markdown</MenuItem>
        <MenuItem>Copy HTML</MenuItem>
        <MenuDivider />
        <MenuItem>Export as Markdown</MenuItem>
        <MenuItem>Export as HTML</MenuItem>
      </MenuList>
    </Menu>
  )
}
interface ControlsProps {
  setMarkdown: (code: string) => void
}

const WYSIWYGControls = ({ setMarkdown }: ControlsProps) => {
  return (
    <Box
      display="flex"
      flexDir={{ base: 'column', lg: 'row' }}
      alignItems="flex-end"
      flexWrap={{ base: 'wrap-reverse', lg: 'nowrap' }}
      h={{ base: '300px', lg: 'auto' }}
      gap="10px"
      color="#fff"
    >
      {markdownSyntaxList.map(el => (
        <IconButton
          colorScheme="gray"
          variant="outline"
          size="sm"
          aria-label="markdown controls"
          key={el.type}
          onClick={() => setMarkdown(el.value)}
          icon={el.icon}
        />
      ))}
    </Box>
  )
}

interface DesktopNavbarProps {
  children: ReactNode
}

const DesktopNavbar = ({ children }: DesktopNavbarProps) => {
  return (
    <Box
      display={{ base: 'none', lg: 'flex' }}
      alignItems="center"
      justifyContent="space-around"
      w="100%"
      h="100%"
    >
      {children}
    </Box>
  )
}

const MobileNavbar = ({ children }: DesktopNavbarProps) => {
  return (
    <Box
      display={{ base: 'flex', lg: 'none' }}
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      h="100%"
      px="10px"
    >
      {children}
    </Box>
  )
}

const Navbar = () => {
  const { html, md } = useContext(EditorCodeValueContext)
  const { setOrientation } = useContext(EditorLayoutContext)
  const es = useContext(EditorStateContext)

  const setMarkdown = (code: string) => {
    const update = es?.editorState?.state.update({
      changes: {
        from: es.editorState.state.selection.main.head,
        to: es.editorState.state.selection.main.head,
        insert: code
      }
    }) as Transaction

    es?.editorState?.update([update])

    es?.editorState?.dispatch({
      selection: {
        anchor: es.editorState?.state.selection.main.head + code.length
      }
    })
  }

  const clearEditor = () => {
    es?.editorState?.dispatch({
      changes: {
        from: 0,
        to: es.editorState.state.doc.length,
        insert: ''
      }
    })
  }

  const copyEditorValue = async () => {
    const editorValue = es?.editorState?.state.doc.toString()
    await navigator.clipboard.writeText(editorValue || '')
  }

  const [alert, message] = useAlert()

  const handleCopy = async (code: string) => {
    await navigator.clipboard.writeText(code)
    message.set('Copied')
    alert.setVisible()
  }

  const [showEditTools, setShowEditTools] = useState(false)

  return (
    <>
      <EditorAlert isVisible={alert.isVisible} message={message.value} />
      <Box
        as="nav"
        w="100%"
        h="45px"
        backgroundColor="#282c34"
        borderBottom="1px solid rgb(255, 255, 255, 0.3)"
      >
        <DesktopNavbar>
          <WYSIWYGControls setMarkdown={setMarkdown} />
          <Box display="flex" gap="10px">
            <IconButton
              aria-label="Clear editor"
              icon={<ClearIcon />}
              colorScheme="gray"
              variant="outline"
              size="sm"
              onClick={clearEditor}
            />
            <IconButton
              aria-label="Copy markdown"
              icon={<CopyIcon />}
              colorScheme="gray"
              variant="outline"
              size="sm"
              onClick={copyEditorValue}
            />
            <CustomMenu
              name="Layout menu"
              icon={<LayoutICon />}
              menuItems={[
                {
                  value: 'Horizontal',
                  method: () => setOrientation('horizontal')
                },
                { value: 'Vertical', method: () => setOrientation('vertical') }
              ]}
            />
            <CustomMenu
              name="File options"
              icon="File"
              menuItems={[
                { value: 'Copy Markdown', method: () => handleCopy(md.code) },
                { value: 'Copy HTML', method: () => handleCopy(html.code) }
              ]}
            />
          </Box>
          <Link href="/">
            <Button leftIcon={<BsArrowLeftShort />} size="sm" variant="outline">
              Home
            </Button>
          </Link>
        </DesktopNavbar>
        <MobileNavbar>
          <Box display="flex" gap="10px">
            <CustomMenu
              name="File options"
              icon="File"
              menuItems={[
                { value: 'Copy Markdown', method: () => handleCopy(md.code) },
                { value: 'Copy HTML', method: () => handleCopy(html.code) }
              ]}
            />
            <IconButton
              aria-label="Clear editor"
              icon={<ClearIcon />}
              colorScheme="gray"
              variant="outline"
              size="sm"
              onClick={clearEditor}
            />
            <IconButton
              aria-label="Copy markdown"
              icon={<CopyIcon />}
              colorScheme="gray"
              variant="outline"
              size="sm"
              onClick={copyEditorValue}
            />
            <CustomMenu
              name="Layout menu"
              icon={<LayoutICon />}
              menuItems={[
                {
                  value: 'Horizontal',
                  method: () => setOrientation('horizontal')
                },
                { value: 'Vertical', method: () => setOrientation('vertical') }
              ]}
            />
          </Box>
          <Link href="/">
            <Button leftIcon={<BsArrowLeftShort />} size="sm" variant="outline">
              Home
            </Button>
          </Link>
          <Box
            zIndex={10}
            pos="absolute"
            bottom="10px"
            right="10px"
            display="flex"
            flexDir="column"
            alignItems="flex-end"
            gap="10px"
          >
            {showEditTools ? (
              <WYSIWYGControls setMarkdown={setMarkdown} />
            ) : undefined}
            <IconButton
              aria-label="toggle"
              icon={<EditICon />}
              size="sm"
              variant="outline"
              onClick={() => setShowEditTools(show => !show)}
            />
          </Box>
        </MobileNavbar>
      </Box>
    </>
  )
}

export default Navbar

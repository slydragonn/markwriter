import Head from 'next/head'
import {
  Button,
  Heading,
  Text,
  Box,
  Flex,
  Stack,
  HStack,
  TableContainer,
  Table,
  Thead,
  Th,
  Tbody,
  Td,
  Tr
} from '@chakra-ui/react'
import {
  AiOutlineRight as RightIcon,
  AiFillGithub as GithubIcon,
  AiFillYoutube as YoutubeIcon
} from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'

const COLORS = {
  black: '#111111',
  blue: '#086099',
  purple: '#d000cc',
  white: '#ffffff'
}

const Iframe = styled.iframe`
  width: 600px;
  height: 350px;
  border-radius: 10px;

  @media screen and (max-width: 650px) {
    width: 300px;
    height: 170px;
  }
`

interface CardProps {
  title: string
  content: string
  image: string
}

const Card = ({ title, content, image }: CardProps) => {
  return (
    <Flex
      flexDir="column"
      w="300px"
      gap="10px"
      color={COLORS.white}
      textAlign="center"
      justifyContent="center"
    >
      <Image
        src={image}
        alt="Markdown Editor"
        width={800}
        height={800}
        style={{
          width: '300px',
          height: '170px',
          objectFit: 'fill',
          borderRadius: '10px',
          imageOrientation: ''
        }}
      />
      <Heading as="h3" fontSize="lg">
        {title}
      </Heading>
      <Text>{content}</Text>
    </Flex>
  )
}

interface SectionProps {
  title: string
  content: string
  image: string
  direction: 'left' | 'right'
}

const Section = ({ title, content, image, direction }: SectionProps) => {
  const flexRow = direction === 'right' ? 'row' : 'row-reverse'

  return (
    <Flex flexDir={{ base: 'column', md: flexRow }} gap="80px">
      <Box display="flex" flexDir="column" justifyContent="center" maxW="300px">
        <Heading as="h3" fontSize="lg">
          {title}
        </Heading>
        <Text>{content}</Text>
      </Box>
      <Image
        src={image}
        alt="Markdown Editor"
        width={800}
        height={800}
        style={{
          width: '300px',
          height: '170px',
          objectFit: 'cover',
          borderRadius: '10px',
          filter: 'saturate(200%)'
        }}
      />
    </Flex>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>MarkWriter | Home</title>
        <meta
          name="description"
          content="MarkWriter | A simple and straightforward Markdown Web Editor"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/markico.jpg" />
      </Head>
      <Box
        pos="relative"
        overflow="hidden"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent={{ base: 'space-around', md: 'space-between' }}
        w="100%"
        minH="100vh"
        p="0 20px"
        bg={`linear-gradient(180deg, ${COLORS.black} 20%, ${COLORS.blue} 60%, ${COLORS.purple} 100%)`}
      >
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="space-between"
          gap="80px"
          textAlign="center"
        >
          <Text color={COLORS.white} mt="10px" fontWeight="thin" opacity={0.7}>
            MARKWRITER
          </Text>
          <div>
            <Heading as="h1" size="3xl" color={COLORS.white}>
              Simple Markdown Editor
            </Heading>
            <Text color={COLORS.white} fontWeight="thin" mt="10px">
              MarkWriter is a Simple and Minimalist Markdown Editor
            </Text>
          </div>
          <Link href="/editor">
            <Button rightIcon={<RightIcon />} size="lg">
              Editor
            </Button>
          </Link>
        </Flex>
        <Box pos={{ base: 'static', md: 'absolute' }} bottom="-100px" px="20px">
          <Image
            alt="MarkWriter Editor"
            src="/editor.png"
            width={1500}
            height={1500}
            style={{
              objectFit: 'cover',
              width: '1000px',
              borderRadius: '10px',
              opacity: 0.9,
              filter: 'saturate(180%)'
            }}
            priority={true}
          />
        </Box>
        <Box
          zIndex={10}
          pos="absolute"
          bottom={0}
          w="100%"
          h="200px"
          bg="linear-gradient(180deg, rgba(17,17,17,0) 0%, rgba(17,17,17,1) 100%)"
        ></Box>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        gap="40px"
        backgroundColor={COLORS.black}
        py="80px"
        px="20px"
      >
        <Heading as="h2" maxW="700px" color={COLORS.white} textAlign="center">
          Write all your Notes or Documentation in Markdown
        </Heading>
        <video
          src="/mde.mp4"
          autoPlay
          muted
          loop
          style={{
            width: '600px',
            borderRadius: '10px'
          }}
        ></video>
        <Text
          textAlign="center"
          maxW="700px"
          color={COLORS.white}
          fontSize="lg"
        >
          Easily write everything you want in Markdown thanks to MarkWriter. All
          the features that make Markdown such a beloved format are available
          here.
        </Text>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="start"
        gap="60px"
        w="100%"
        p="80px 20px"
        bg={`linear-gradient(0deg, ${COLORS.black} 0%, ${COLORS.blue} 40%, ${COLORS.purple} 100%)`}
        px="20px"
      >
        <Card
          title="Copy Markdown code and HTML"
          content="Easily copy it and use what you wrote in different parts."
          image="/copy.png"
        />
        <Card
          title="WYSIWYG controls"
          content="Type faster and more comfortably with WYSIWYG controls"
          image="/controls.png"
        />
        <Card
          title="Use it on a desktop or mobile"
          content="Easy to use on any platform. No extra steps, just type."
          image="/layout.png"
        />
      </Box>
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        gap="40px"
        p="80px 20px"
        backgroundColor={COLORS.black}
        color={COLORS.white}
        textAlign="center"
      >
        <Heading as="h2">How to write in Markdown</Heading>
        <Text maxW="700px" fontSize="lg">
          Markdown is a lightweight markup language that you can use to add
          formatting elements to plaintext text documents.
        </Text>
        <Stack spacing="80px" mt="80px">
          <Section
            title="Heading"
            content="Headings allow you to divide notes for better understanding."
            image="/heading.png"
            direction="right"
          />
          <Section
            title="Code Block"
            content="Perfect for code snippets and already with syntax styles."
            image="/code.png"
            direction="left"
          />
          <Section
            title="List"
            content="You can use the ordered or unordered lists to better understand your notes."
            image="/list.png"
            direction="right"
          />
        </Stack>
        <Flex flexDir="column" alignItems="center" gap="20px" mt="80px">
          <Text>Take notes right now with MarkWriter</Text>
          <Link href="/editor">
            <Button rightIcon={<RightIcon />} size="lg" colorScheme="gray">
              Editor
            </Button>
          </Link>
        </Flex>
        <Flex
          flexDir="column"
          alignItems="center"
          gap="40px"
          w="100%"
          mt="40px"
          id="markdown-cheat-sheet"
        >
          <Heading as="h3" fontSize="2xl">
            Markdown Cheat Sheet
          </Heading>
          <TableContainer border="1px solid gray" borderRadius="10px" p="20px">
            <Table variant="striped" colorScheme="gray" size="lg" fontSize="lg">
              <Thead>
                <Tr>
                  <Th>Element</Th>
                  <Th>Syntax</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Heading</Td>
                  <Td>
                    <ul style={{ listStyle: 'none' }}>
                      <li># H1</li>
                      <li>## H2</li>
                      <li>### H3</li>
                    </ul>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Bold</Td>
                  <Td>**bold text**</Td>
                </Tr>
                <Tr>
                  <Td>Italic</Td>
                  <Td>*italicized text*</Td>
                </Tr>
                <Tr>
                  <Td>Blockquote</Td>
                  <Td>&gt; blockquote</Td>
                </Tr>
                <Tr>
                  <Td>Ordered List</Td>
                  <Td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>1. First Item</li>
                      <li>2. Second Item</li>
                      <li>3. Third Item</li>
                    </ul>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Unordered list</Td>
                  <Td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>* Firt Item</li>
                      <li>* Second Item</li>
                      <li>* Third Item</li>
                    </ul>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Code</Td>
                  <Td>`Your code here`</Td>
                </Tr>
                <Tr>
                  <Td>Code Block</Td>
                  <Td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>```language</li>
                      <li>Your code here</li>
                      <li>```</li>
                    </ul>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Link</Td>
                  <Td>[title](https://www.your-url.com)</Td>
                </Tr>
                <Tr>
                  <Td>Image</Td>
                  <Td>![alt text](url.jpg)</Td>
                </Tr>
                <Tr>
                  <Td>Task List</Td>
                  <Td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>- [x] First Task</li>
                      <li>- [ ] Second Task</li>
                    </ul>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Table</Td>
                  <Td>
                    <ul style={{ listStyle: 'none' }}>
                      <li>| Syntax | Description |</li>
                      <li>| ------ | ----------- |</li>
                      <li>| Header | Title |</li>
                      <li>| Paragraph | Text |</li>
                    </ul>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Strikethrough</Td>
                  <Td>~~strikethrough~~</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Box>
      <Box
        as="footer"
        display="flex"
        flexDir="column"
        alignItems="center"
        gap="40px"
        w="100%"
        p="20px"
        backgroundColor={COLORS.black}
      >
        <Text color={COLORS.white} fontWeight="thin" opacity={0.7}>
          MARKWRITER
        </Text>
        <HStack spacing="20px">
          <a
            href="https://github.com/slydragonn"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon
              color="white"
              style={{ width: '30px', height: '30px' }}
            />
          </a>
          <a
            href="https://www.youtube.com/@slydragonn"
            target="_blank"
            rel="noreferrer"
          >
            <YoutubeIcon
              color="white"
              style={{ width: '30px', height: '30px' }}
            />
          </a>
        </HStack>
        <Text color={COLORS.white} fontWeight="thin" opacity={0.5}>
          © {new Date().getFullYear()} MarkWriter. All rights reserved.
        </Text>
      </Box>
    </>
  )
}

export { getServerSideProps } from 'components/Chakra'

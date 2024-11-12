import Head from 'next/head'
import { Button, Heading, Text, Box, Flex, HStack } from '@chakra-ui/react'
import {
  AiOutlineRight as RightIcon,
  AiFillGithub as GithubIcon,
  AiFillYoutube as YoutubeIcon
} from 'react-icons/ai'
import Image from 'next/image'
import Link from 'next/link'

const COLORS = {
  black: '#111111',
  black_purple: '#563A9C',
  purple: '#8B5DFF',
  white: '#ffffff'
}

const Navbar = () => {
  return (
    <Flex
      zIndex="100"
      pos="fixed"
      top="0"
      right="0"
      left="0"
      m="20px auto"
      flexDir="row"
      alignItems="center"
      justifyContent="space-around"
      w={{ base: '90%', sm: '500px' }}
      gap="80px"
      textAlign="center"
      bg="rgb(0, 0, 0, .5)"
      padding="10px 20px"
      borderRadius="20px"
      backdropFilter="blur(10px) saturate(200%)"
      border="1px solid rgb(255, 255, 255, 0.1)"
    >
      <Text color={COLORS.white} fontWeight="thin" opacity={0.7} fontSize="sm">
        MARKWRITER
      </Text>
      <Link href="/editor">
        <Button
          rightIcon={<RightIcon />}
          size="sm"
          bg={COLORS.purple}
          color={COLORS.white}
          _hover={{
            background: COLORS.black_purple
          }}
          borderRadius="999px"
        >
          Editor
        </Button>
      </Link>
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
    <Flex
      flexDir={{ base: 'column-reverse', md: flexRow }}
      justifyContent="center"
      alignItems="center"
      gap="40px"
    >
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        maxW={{ base: '90%', md: '320px' }}
        height={{ base: 'auto', md: '280px' }}
        bg={COLORS.purple}
        p="20px 20px"
        borderRadius="20px"
        textAlign="center"
        gap="10px"
        boxShadow={`0 0 10px 0px ${COLORS.black_purple}`}
      >
        <Heading
          as="h3"
          size="lg"
          color={COLORS.black_purple}
          fontWeight="800"
          textTransform="uppercase"
        >
          {title}
        </Heading>
        <Text fontSize="xl">{content}</Text>
      </Box>
      <Image
        src={image}
        alt="Markdown Editor"
        width={800}
        height={800}
        style={{
          width: '450px',
          height: '280px',
          objectFit: 'cover',
          borderRadius: '10px',
          opacity: '0.7',
          boxShadow: '0 0 20px 10px rgb(190, 190, 190, 0.1)',
          border: '1px solid rgb(255, 255, 255, 0.1)'
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
      <Navbar />
      <Box
        pos="relative"
        overflow="hidden"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gap="80px"
        w="100%"
        p="150px 20px"
        bg={COLORS.black}
      >
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="space-between"
          gap="80px"
          textAlign="center"
        >
          <Flex flexDir="column" justifyContent="center" alignItems="center">
            <Heading
              as="h1"
              size="3xl"
              fontWeight="black"
              bgImg="linear-gradient(45deg, #f3ec78, #af4261)"
              bgSize="100%"
              bgRepeat="repeat"
              bgClip="text"
              fill="transparent"
            >
              Simple Markdown Editor
            </Heading>
            <Text
              color={COLORS.white}
              fontWeight="thin"
              mt="10px"
              opacity="0.7"
              fontSize="md"
              maxW="600px"
            >
              Easily write everything you want in Markdown thanks to MarkWriter.
              All the features that make Markdown such a beloved format are
              available here.
            </Text>
          </Flex>
        </Flex>
        <Box>
          <video
            src="/mde.mp4"
            autoPlay
            muted
            loop
            style={{
              width: '800px',
              borderRadius: '20px',
              boxShadow: '0 0 40px 20px rgb(190, 190, 190, 0.1)',
              opacity: '0.7'
            }}
          ></video>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        gap="150px"
        w="100%"
        p="80px 20px"
        bg={COLORS.black}
      >
        <Heading
          as="h2"
          size="xl"
          color={COLORS.white}
          opacity="0.7"
          textTransform="uppercase"
          textAlign="center"
        >
          More about MarkWriter
        </Heading>
        <Section
          title="Copy Markdown code and HTML"
          content="Easily copy it and use what you wrote in different parts."
          image="/copy.jpg"
          direction="left"
        />
        <Section
          title="WYSIWYG controls"
          content="Type faster and more comfortably with WYSIWYG controls"
          image="/controls.jpg"
          direction="right"
        />
        <Section
          title="Use it on a desktop or mobile"
          content="Easy to use on any platform. No extra steps, just type."
          image="/layout.jpg"
          direction="left"
        />
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

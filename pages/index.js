import { useAuth } from '@/lib/auth';
import { Heading, Button, Flex, Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      margin="auto"
      justify="center"
      align="center"
    >
      <Head>
        {/* <title>Fast Feedback</title> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/dashboard"
          }
        `,
          }}
        />
      </Head>
      <Heading>Welcome to Fast Feedback</Heading>
      <Heading size="md" my={10} color="gray.500">
        Get feedback on your site instantly
      </Heading>
      {auth.user?.photoUrl && (
        <img
          style={{ borderRadius: 50 }}
          width={100}
          height={100}
          src={auth.user?.photoUrl}
        />
      )}
      {auth.user ? (
        <Button
          as="a"
          href="/dashboard"
          mt={10}
          backgroundColor="white"
          color="gray.900"
          variant="outline"
          fontWeight="medium"
          size="lg"
          _hover={{ bg: 'gray.300' }}
          _active={{
            bg: 'gray.100',
            transform: 'scale(0.95)',
          }}
        >
          View Dashboard
        </Button>
      ) : (
        // <Button onClick={() => auth.signOut()}>Sign Out</Button>
        <Box d="flex" flexDirection="column" mt={100}>
          <Button
            leftIcon={<FaGithub />}
            backgroundColor="gray.900"
            fontWeight="medium"
            color="white"
            size="sm"
            type="button"
            _hover={{ bg: 'gray.800' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)',
            }}
            onClick={() => auth.signInWithGitHub()}
          >
            Sign In with Github
          </Button>
          <Button
            mt={10}
            backgroundColor="white"
            color="gray.900"
            variant="outline"
            leftIcon={<FcGoogle />}
            size="sm"
            fontWeight="medium"
            type="button"
            _hover={{ bg: 'gray.100' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)',
            }}
            onClick={() => auth.signInWithGoogle()}
          >
            Sign In with Google
          </Button>
        </Box>
      )}
      <Box
        mt={8}
        p={8}
        borderRadius={8}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="black">Start today, then grow with us </Text>
        <Button
          variant="solid"
          size="md"
          color="black"
          backgroundColor="whiteAlpha.500"
        >
          Upgrade to Starter
        </Button>
      </Box>
    </Flex>
  );
};
export default Home;

import { useAuth } from '@/lib/auth';
import { Heading, Button, Flex, Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
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
        <title>Fast Feedback</title>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/dashboard"
          }
        `,
          }}
        /> */}
      </Head>
      <Heading>Welcome to Site</Heading>
      {auth.user?.photoURL && (
        <img width={100} height={100} src={auth.user?.photoURL} />
      )}
      {auth.user ? (
        <Button
          as="a"
          href="/dashboard"
          backgroundColor="gray.900"
          color="white"
          textAlign="center"
          fontWeight="medium"
          mt={100}
          maxW="200px"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)',
          }}
        >
          View Dashboard
        </Button>
      ) : (
        // <Button onClick={() => auth.signOut()}>Sign Out</Button>
        <Button
          mt={100}
          size="sm"
          type="button"
          onClick={() => auth.signInWithGitHub()}
        >
          Sign In
        </Button>
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
        <Heading size="md" color="black">
          Get feedback on your site instantly
        </Heading>
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

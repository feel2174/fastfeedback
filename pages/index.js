import { useAuth } from '@/lib/auth';
import { Heading, Button, Text, Code, Icon, Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';

const Home = () => {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      h="100vh"
      direction="column"
      align="center"
      justify="center"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Icon name="google" color="black" size="64px" />
      <Heading fontWeight="bold">Fast Feedback</Heading>
      <Text>
        Current User:
        <Code>{auth.user ? auth.user.email : 'None'}</Code>
      </Text>
      {auth.user?.photoURL && (
        <img width={100} height={100} src={auth.user?.photoURL} />
      )}
      {auth.user ? (
        <Button mt={10} variant="link" size="sm" onClick={() => auth.signOut()}>
          Sign Out
        </Button>
      ) : (
        <Button
          mt={10}
          size="sm"
          type="button"
          onClick={() => auth.signInWithGitHub()}
        >
          Sign In
        </Button>
      )}
    </Flex>
  );
};
export default Home;

import { useAuth } from '@/lib/auth';
import { Heading, Button, Flex } from '@chakra-ui/react';

const Home = () => {
  const auth = useAuth();
  return (
    <>
      <Flex
        as="main"
        direction="column"
        margin="auto"
        justify="center"
        align="center"
      >
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
      </Flex>
    </>
  );
};
export default Home;

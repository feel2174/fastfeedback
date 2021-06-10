import { useAuth } from '@/lib/auth';
import { Heading, Button, Text, Code } from '@chakra-ui/react';

const Home = () => {
  const auth = useAuth();
  return (
    <div>
      <main>
        <Heading fontWeight="bold">Fast Feedback</Heading>
        <Text>
          Current User:{' '}
          <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth.user?.photoURL && (
          <img width={100} height={100} src={auth.user?.photoURL} />
        )}
        {auth.user ? (
          <Button onClick={() => auth.signOut()}>Sign Out</Button>
        ) : (
          <Button
            type="button"
            onClick={() => auth.signInWithGitHub()}
          >
            Sign In
          </Button>
        )}
      </main>
    </div>
  );
};
export default Home;

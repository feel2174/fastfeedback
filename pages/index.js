import { useAuth } from '@/lib/auth';
import { Heading, Button, Text, Code } from "@chakra-ui/react"

const Home = () => {
  const auth = useAuth();
  return (
    <div>
      <main>
        <Heading fontWeight="normal">Fast Feedback</Heading>
        <Text>Current User: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth.user?.photoURL && (
          <img width={100} height={100} src={auth.user?.photoURL} />
        )}
        {auth.user ? (
          <Button onClick={(e) => auth.signOut()}>Sign Out</Button>
        ) : (
          <Button type="button" onClick={(e) => auth.signInWithGitHub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
};
export default Home;

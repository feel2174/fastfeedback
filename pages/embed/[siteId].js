import { useRef, useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/auth';
import { createFeedback } from '@/lib/db';
import { getAllFeedback, getAllSites } from '@/lib/db-admin';

import Feedback from '@/components/Feedback/Feedback';
import DashBoardShell from '@/components/Dashboard/DashboardShell';
import FeedbackLink from '@/components/Feedback/FeedbackLink';

export async function getStaticProps({ params }) {
  const siteId = params.siteId;
  const { feedback } = await getAllFeedback(siteId);

  return {
    props: {
      initialFeedback: feedback,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();

  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

const SiteFeedback = (props) => {
  const { initialFeedback } = props;
  const auth = useAuth();
  const router = useRouter();

  const inputEl = useRef(null);
  const [allFeedback, setAllFeedback] = useState(initialFeedback);
  const onSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      author: auth.user.name,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      text: inputEl.current.value,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      status: 'pending',
    };
    setAllFeedback([newFeedback, ...allFeedback]);
    createFeedback(newFeedback);
  };
  return (
    <Box display="flex" flexDirection="column" width="full">
      <Box as="form" onSubmit={onSubmit}>
        <FormControl my={8} id="email">
          <FormLabel color="black" htmlFor="comment">
            Comment
          </FormLabel>
          <Input color="gray.600" placeholder="Basic usage" ref={inputEl} />
          <Button
            color="white"
            bg="gray.500"
            mt={2}
            type="submit"
            fontWeight="medium"
          >
            Add Comment
          </Button>
        </FormControl>
      </Box>
      <FeedbackLink />
      {allFeedback?.map((feedback) => (
        <Feedback key={feedback.id} {...feedback} />
      ))}
    </Box>
  );
};

export default SiteFeedback;

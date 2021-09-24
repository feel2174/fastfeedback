import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

const FeedbackTableHeader = () => {
  return (
    <>
      <Flex justifyContent="space-between">
        <Heading color="black" mb={8}>
          My Feedback
        </Heading>
      </Flex>
    </>
  );
};
export default FeedbackTableHeader;

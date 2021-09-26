import { Flex, Text } from '@chakra-ui/react';

const FeedbackLink = () => {
  return (
    <Flex justifyContent="space-between" mb={8} width="full" mt={1}>
      <Text fontWeight="bold" fontSize="sm">
        Leave a comment
      </Text>
      <Text fontSize="xs" color="blackAlpha.500">
        Powered by Fast Feedback
      </Text>
    </Flex>
  );
};
export default FeedbackLink;

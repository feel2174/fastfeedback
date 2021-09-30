import React from 'react';
import { Heading, Box, Text, Button, Flex } from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';
const EmptyState = () => (
  <Flex
    w="100%"
    justify="center"
    backgroundColor="white"
    mt={16}
    direction="column"
    align="center"
    borderRadius={8}
  >
    <Heading mb={2} size="md" color="black" fontWeight="bold">
      There is not any feedback
    </Heading>
    <Text mb={4} color="black">
      Lets get started
    </Text>
    <Text mb={4}>Share Your Site</Text>
  </Flex>
);

export default EmptyState;

import React from 'react';
import { Heading, Box, Text, Button, Flex } from '@chakra-ui/react';
import DashBoardShell from './DashboardShell';
import AddSiteModal from './AddSiteModal';
const EmptyState = () => (
  <DashBoardShell>
    <Flex
      w="100%"
      justify="center"
      backgroundColor="white"
      p={16}
      direction="column"
      align="center"
      borderRadius={8}
    >
      <Heading mb={2} size="md" color="black" fontWeight="bold">
        You have not added any sites.
      </Heading>
      <Text mb={4} color="black">
        Lets get started
      </Text>
      <AddSiteModal />
    </Flex>
  </DashBoardShell>
);

export default EmptyState;

import React from 'react';
import { Heading, Box, Text, Button } from '@chakra-ui/react';
import DashBoardShell from './Dashboard/DashboardShell';

const FreePlanEmptyState = () => (
  <DashBoardShell>
    <Box p={8} borderRadius={8}>
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
  </DashBoardShell>
);

export default FreePlanEmptyState;

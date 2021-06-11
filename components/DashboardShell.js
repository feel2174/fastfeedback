import React from 'react';
import {
  Flex,
  Link,
  Stack,
  Avatar,
  Breadcrumb,
  Icon,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';

const DashBoardShell = () => (
  <Flex flexDirection="column">
    <Flex justifyContent="space-between" pt={4}>
      <Stack spacing={4} isInline justifyContent="center" alignItems="center">
        <Icon name="logo" />
        <Link>Feedback</Link>
        <Link>Sites</Link>
      </Stack>
      <Flex justifyContent="space-between" alignItems="center">
        <Link mr={4}>Account</Link>
        <Avatar size="sm" />
      </Flex>
    </Flex>
    <Flex
      flexDirection="column"
      color="gray.50"
      maxWidth="800px"
      justifyContent="center"
      alignItems="center"
      ml="auto"
      mr="auto"
      width="100%"
      backgroundColor="white"
      borderRadius={4}
      p={8}
    >
      <Flex flexDirection="column">
        <Breadcrumb>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="black">Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading color="black">Sites</Heading>
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
      </Flex>
    </Flex>
  </Flex>
);

export default DashBoardShell;

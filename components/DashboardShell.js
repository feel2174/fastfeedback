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
import { useAuth } from '@/lib/auth';

const DashBoardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <Flex flexDirection="column">
      <Flex alignItems="center" justifyContent="space-between" px={8} py={4}>
        <Stack
          spacing={4}
          isInline
          justifyContent="center"
          alignItems="center"
          align="center"
        >
          <Icon viewBox="0 0 200 200" color="blue.500">
            <path
              fill="currentColor"
              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
            />
          </Icon>
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Flex justifyContent="space-between" alignItems="center">
          <Link mr={4}>Log Out</Link>
          <Avatar size="sm" src={auth.user?.photoUrl} />
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        color="gray.50"
        height="100vh"
        maxWidth="800px"
        ml="auto"
        mr="auto"
        width="100%"
        backgroundColor="white"
        borderRadius={4}
        p={8}
      >
        <Flex
          maxWidth="1200px"
          w="100%"
          ml="auto"
          mr="auto"
          flexDirection="column"
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink color="gray.700" fontSize="sm">
                Sites
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mb={2} color="black">
            Sites
          </Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashBoardShell;

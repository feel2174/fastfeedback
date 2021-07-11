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
          <Icon viewBox="0 0 46 32">
            <path
              fill="currentColor"
              d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
            />
          </Icon>
          <Link href="/feedback">Feedback</Link>
          <Link href="/dashboard">Sites</Link>
        </Stack>
        <Flex justifyContent="space-between" alignItems="center">
          <Link mr={4} onClick={() => auth.signOut()}>
            Log Out
          </Link>
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
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashBoardShell;

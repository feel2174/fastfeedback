import React from 'react';
import {
  Flex,
  Heading,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
const FeedbackTableHeader = () => {
  return (
    <Box mx={4}>
      <Breadcrumb>
        <BreadcrumbItem>
          <NextLink href="/feedback" passHref>
            <Link color="blue.500" fontWeight="bold">
              Feedback
            </Link>
          </NextLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent="space-between">
        <Heading as="h1" color="black" mb={8}>
          All Feedback
        </Heading>
      </Flex>
    </Box>
  );
};
export default FeedbackTableHeader;

import EmptyState from '@/components/EmptyState';
import { useAuth } from '@/lib/auth';
import { Heading, Button, Text, Code, Icon, Box, Flex } from '@chakra-ui/react';
import Head from 'next/head';

const DashBoard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return 'Loading....';
  }
  return <EmptyState />;
};

export default DashBoard;

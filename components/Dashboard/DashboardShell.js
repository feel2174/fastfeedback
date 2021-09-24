import React from 'react';
import { Flex, Link, Stack, Avatar, Icon } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import Head from 'next/head';
import NextLink from 'next/link';

const DashBoardShell = (props) => {
  const { children, title = 'Fast FeedBack' } = props;
  const auth = useAuth();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex flexDirection="column">
        <Flex alignItems="center" justifyContent="space-between" px={8} py={4}>
          <Stack
            spacing={4}
            isInline
            justifyContent="center"
            alignItems="center"
          >
            <NextLink href="/" passHref>
              <Icon width={10} cursor="pointer" viewBox="0 0 30 30">
                <path
                  fill="currentColor"
                  d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
                />
              </Icon>
            </NextLink>
            <NextLink href="/dashboard">
              <Link>DashBoard</Link>
            </NextLink>
            <NextLink href="/feedback">
              <Link>Feedback</Link>
            </NextLink>
          </Stack>
          <Flex justifyContent="space-between" alignItems="center">
            {auth.user && (
              <Link mr={4} onClick={() => auth.signOut()}>
                Log Out
              </Link>
            )}
            <Avatar size="sm" src={auth.user?.photoUrl} />
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          height="100vh"
          maxWidth="1200px"
          ml="auto"
          mr="auto"
          width="100%"
          p={10}
        >
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default DashBoardShell;

import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from '../Table';
import { format, parseISO } from 'date-fns';
import NextLink from 'next/link';

const SiteTable = (props) => {
  const { sites } = props;
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback</Th>
          <Th>Date Added</Th>
        </Tr>
      </thead>
      <tbody>
        {sites.map((site) => (
          <Box as="tr" key={site.url}>
            <Td fontWeight="medium">
              {' '}
              <NextLink
                href="/sites/[siteId]"
                as={`/sites/${site.id}`}
                passHref
              >
                <Link fontWeight="medium">{site.name}</Link>
              </NextLink>
            </Td>
            <Td>{site.url}</Td>
            <Td>
              <NextLink
                href="/feedback/[siteId]"
                as={`/feedback/${site.id}`}
                passHref
              >
                <Link color="blue.500" fontWeight="bold">
                  View Feedback
                </Link>
              </NextLink>
            </Td>
            <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default SiteTable;

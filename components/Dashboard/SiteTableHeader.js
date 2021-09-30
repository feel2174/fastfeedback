import React from 'react';
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from '@chakra-ui/react';
import AddSiteModal from '../AddSiteModal';

const SiteTableHeader = () => {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent={'space-between'}
        flexDirection={['column', 'column', 'row']}
      >
        <Heading as="h1" color="black" mb={8}>
          DashBoard
        </Heading>
        <AddSiteModal>+ Add Site</AddSiteModal>
      </Flex>
    </>
  );
};
export default SiteTableHeader;

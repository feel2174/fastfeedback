import React from 'react';
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from '@chakra-ui/react';
import AddSiteModal from './AddSiteModal';

const SiteTableHeader = () => {
  return (
    <>
      <Flex justifyContent="space-between">
        <Heading color="black" mb={8}>
          DashBoard
        </Heading>
        <AddSiteModal>+ Add Site</AddSiteModal>
      </Flex>
    </>
  );
};
export default SiteTableHeader;

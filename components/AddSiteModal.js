import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  useDisclosure,
} from '@chakra-ui/react';
import { createSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';

const AddSiteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();
  const toast = useToast();
  const auth = useAuth();

  const onCreateSite = ({ site, url }) => {
    console.log(site, url);
    createSite({
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      site,
      url,
    });
    toast({
      title: 'Success!',
      description: "We've added your site.",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    onClose();
  };
  const initialRef = useRef();
  const finalRef = useRef();

  return (
    <>
      <Button
        backgroundColor="black"
        fontWeight="normal"
        maxW="200px"
        color="white"
        onClick={onOpen}
      >
        Add your First Site
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader>Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="My Site"
                ref={initialRef}
                {...register('site', { required: 'Required' })}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://website.com"
                {...register('url', {
                  required: 'Required',
                })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button fontWeight="medium" onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button
              backgroundColor="#99ffee"
              color="#194D4C"
              fontWeight="medium"
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;

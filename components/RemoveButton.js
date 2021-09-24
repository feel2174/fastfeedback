import React, { useRef, useState } from 'react';
import { mutate } from 'swr';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { deleteFeedback } from '@/lib/db';
import { useAuth } from '@/lib/auth';

const RemoveButton = (props) => {
  const { feedbackId } = props;
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const auth = useAuth();
  const deleteFeedItem = () => {
    mutate(
      ['api/feedback', auth.user.token],
      async (data) => {
        return {
          feedback: data.feedback.filter(
            (feedback) => feedback.id !== feedbackId,
          ),
        };
      },
      false,
    );
    deleteFeedback(feedbackId);
    onClose();
  };

  const cancelRef = useRef();

  return (
    <>
      <IconButton
        onClick={() => setIsOpen(true)}
        aria-label="Delete feedback"
        icon={<DeleteIcon />}
        variant="ghost"
      />
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Feedback
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You cannot undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deleteFeedItem} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default RemoveButton;

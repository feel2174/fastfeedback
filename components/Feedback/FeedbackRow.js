import React, { useState } from 'react';
import { Box, Code, Switch } from '@chakra-ui/react';
import { Td } from '../Table';
import RemoveButton from '../RemoveButton';
import { updateFeedback } from '@/lib/db';
import { useAuth } from '@/lib/auth';
import { mutate } from 'swr';

const FeedbackRow = ({ id, status, author, text }) => {
  const [checked, setChecked] = useState(status === 'active');
  const auth = useAuth();
  console.log(status);
  // const toggleFeedback = async () => {
  //   // setChecked(!checked);
  //   await updateFeedback(id, { status: !checked ? 'active' : 'pending' });
  //   mutate(['api/feedback', auth.user.token]);

  //   // mutate(
  //   //   ['api/feedback', auth.user.token],
  //   //   async (data) => {
  //   //     const updateFeedback = data.feedback.find(
  //   //       (feedback) => feedback.id === id,
  //   //     );
  //   //     const allOtherFeedback = data.feedback.filter(
  //   //       (feedback) => feedback.id !== id,
  //   //     );
  //   //     updateFeedback.status = !checked;

  //   //     return {
  //   //       feedback: [updateFeedback, ...allOtherFeedback],
  //   //     };
  //   //   },
  //   //   false,
  //   // );
  // };

  return (
    <Box as="tr" key={id}>
      <Td fontWeight="medium">{author}</Td>
      <Td>{text}</Td>
      <Td>
        <Code>{'/'}</Code>
      </Td>
      {/* <Td>
        <Switch
          colorScheme="blue"
          onChange={toggleFeedback}
          isChecked={status === 'active'}
        />
      </Td> */}
      <Td>
        <RemoveButton feedbackId={id} />
      </Td>
    </Box>
  );
};

export default FeedbackRow;

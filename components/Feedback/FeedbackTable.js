import React from 'react';
import { Table, Tr, Th } from '../Table';
import FeedbackRow from './FeedbackRow';

const FeedbackTable = (props) => {
  const { allFeedback } = props;

  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {allFeedback.map((feedback) => (
          <FeedbackRow key={feedback.id} {...feedback} />
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;

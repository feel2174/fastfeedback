import useSWR from 'swr';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';

import FeedbackTable from '@/components/FeedbackTable';
import FeedbackTableSkeleton from '@/components/FeedbackTableSkeleton';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';
import EmptyState from '@/components/EmptyState';
import DashBoardShell from '@/components/DashboardShell';

const MyFeedback = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['api/feedback', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashBoardShell title="My FeedBack">
        <FeedbackTableHeader />
        <FeedbackTableSkeleton />
      </DashBoardShell>
    );
  }
  return (
    <DashBoardShell title="My FeedBack">
      <FeedbackTableHeader />
      {data.feedback ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <EmptyState />
      )}
    </DashBoardShell>
  );
};

export default MyFeedback;

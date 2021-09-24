import useSWR from 'swr';
import FeedbackTableSkeleton from '@/components/FeedbackTableSkeleton';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';

import FeedbackTable from '@/components/FeedbackTable';
import EmptyState from '@/components/EmptyState';
import DashBoardShell from '@/components/DashboardShell';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';

const MyFeedback = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['api/feedback', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashBoardShell>
        <FeedbackTableHeader />
        <FeedbackTableSkeleton />
      </DashBoardShell>
    );
  }
  return (
    <DashBoardShell>
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

import DashBoardShell from '@/components/DashboardShell';
import EmptyState from '@/components/EmptyState';
import useSWR from 'swr';
import FeedbackTableSkeleton from '@/components/FeedbackTableSkeleton';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import SiteTableHeader from '@/components/SiteTableHeader';
import FeedbackTable from '@/components/FeedbackTable';
const MyFeedback = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['api/feedback', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashBoardShell>
        <FeedbackTableSkeleton />
      </DashBoardShell>
    );
  }
  return (
    <DashBoardShell>
      {data.feedback ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <EmptyState />
      )}
    </DashBoardShell>
  );
};

export default MyFeedback;

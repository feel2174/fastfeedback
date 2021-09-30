import useSWR from 'swr';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';

import FeedbackTable from '@/components/Feedback/FeedbackTable';
import FeedbackTableSkeleton from '@/components/Feedback/FeedbackTableSkeleton';
import FeedbackTableHeader from '@/components/Feedback/FeedbackTableHeader';
import EmptyState from '@/components/EmptyState';
import DashBoardShell from '@/components/Dashboard/DashboardShell';
import Page from '@/components/Page';
import { useRouter } from 'next/router';
import SiteFeedbackTableHeader from '@/components/SiteFeedbackTableHeader';

const SiteFeedback = () => {
  const { user } = useAuth();
  const { query } = useRouter();

  const { data } = useSWR(
    user ? [`/api/feedback/${query.siteId}`, user.token] : null,
    fetcher,
  );

  if (!data) {
    return (
      <DashBoardShell title="My FeedBack">
        <SiteFeedbackTableHeader />
        <FeedbackTableSkeleton />
      </DashBoardShell>
    );
  }
  return (
    <DashBoardShell title="My FeedBack">
      <SiteFeedbackTableHeader siteName={data.site.name} />
      {data.feedback ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <EmptyState />
      )}
    </DashBoardShell>
  );
};

const SiteFeedbackPage = () => {
  return (
    <Page name="Name of Site Feedback" path="/feedback">
      <SiteFeedback />
    </Page>
  );
};

export default SiteFeedbackPage;

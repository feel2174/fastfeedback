import DashBoardShell from '@/components/DashboardShell';
import EmptyState from '@/components/EmptyState';
import useSWR from 'swr';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import SiteTable from '@/components/SiteTable';
import SiteTableHeader from '@/components/SiteTableHeader';
const DashBoard = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['api/sites', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashBoardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashBoardShell>
    );
  }
  return (
    <DashBoardShell>
      <SiteTableHeader />
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashBoardShell>
  );
};

export default DashBoard;

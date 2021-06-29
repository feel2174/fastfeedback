import DashBoardShell from '@/components/DashboardShell';
import EmptyState from '@/components/EmptyState';
import useSWR from 'swr';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import SiteTable from '@/components/SiteTable';
const DashBoard = () => {
  const auth = useAuth();
  const { data } = useSWR('api/sites', fetcher);

  if (!data) {
    return (
      <DashBoardShell>
        <SiteTableSkeleton />
      </DashBoardShell>
    );
  }
  return (
    <DashBoardShell>
      {data.sites.length != 0 ? (
        <SiteTable sites={data.sites} />
      ) : (
        <EmptyState />
      )}
    </DashBoardShell>
  );
};

export default DashBoard;

import DashBoardShell from '@/components/Dashboard/DashboardShell';
import EmptyState from '@/components/EmptyState';
import useSWR from 'swr';
import SiteTableSkeleton from '@/components/Dashboard/SiteTableSkeleton';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';
import SiteTable from '@/components/Dashboard/SiteTable';
import SiteTableHeader from '@/components/Dashboard/SiteTableHeader';
const DashBoard = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['api/sites', user.token] : null, fetcher);

  // if (!data) {
  //   return (
  //     <DashBoardShell title="DashBoard">
  //       <SiteTableHeader />
  //       <SiteTableSkeleton />
  //     </DashBoardShell>
  //   );
  // }
  return (
    <DashBoardShell title="Sites">
      <SiteTableHeader />
      <>
        {!data ? (
          <SiteTableSkeleton />
        ) : data.sites ? (
          <SiteTable sites={data.sites} />
        ) : (
          <EmptyState />
        )}
      </>
    </DashBoardShell>
  );
};

export default DashBoard;

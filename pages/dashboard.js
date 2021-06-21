import DashBoardShell from '@/components/DashboardShell';
import EmptyState from '@/components/EmptyState';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import { useAuth } from '@/lib/auth';

const DashBoard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return (
      <DashBoardShell>
        <SiteTableSkeleton />
      </DashBoardShell>
    );
  }
  return (
    <DashBoardShell>
      <EmptyState />
    </DashBoardShell>
  );
};

export default DashBoard;

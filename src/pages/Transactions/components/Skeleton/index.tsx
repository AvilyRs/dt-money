import { Skeleton } from '../../../../components/Skeleton';

export function TableSkeleton() {
  return (
    <div style={{ marginTop: '2rem' }}>
      <Skeleton style={{ marginBottom: '6px' }} />
      <Skeleton />
    </div>
  );
}

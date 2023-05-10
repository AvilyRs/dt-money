import { SkeletonProps } from './interface';
import { Container } from './styles';

export function Skeleton({ style }: SkeletonProps) {
  return (
    <Container style={style} />
  );
}

'use client';
import { getTopInteractedTags } from '@/lib/actions/testing';
import { Button } from '../button/Button';

interface Props<T> {
  elements: T[];
}

export const List = <T,>({}: Props<T>) => {
  return (
    <div>
      List
      <Button onClick={() => getTopInteractedTags()}>Clickea</Button>
    </div>
  );
};

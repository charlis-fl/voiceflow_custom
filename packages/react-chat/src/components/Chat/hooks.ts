import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useMemo } from 'react';

import { Nullish } from '@/types';

dayjs.extend(relativeTime);

export const useTimestamp = (startTime?: Nullish<number>) => {
  return useMemo(() => {
    if (!startTime) return null;

    const start = dayjs(startTime);
    const now = dayjs();

    switch (true) {
      case now.isSame(start, 'day'):
        return 'Hoje';
      case now.subtract(1, 'day').isSame(start, 'day'):
        return 'Ontem';
      default:
        return start.fromNow();
    }
  }, [startTime]);
};

import { useLatestBlockTimestampLazyQuery } from '@/graphql/types/general_types';
import dayjs from '@/utils/dayjs';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const isClient = typeof window === 'object';

export function useChainHealthCheck() {
  const { t } = useTranslation('common');
  const [chainActive, setChainActive] = useState(true);

  const [getLatestBlockTimestamp] = useLatestBlockTimestampLazyQuery({
    onCompleted: (data) => {
      const timestamp = dayjs.utc(data?.block?.[0]?.timestamp ?? '');
      const timeNow = dayjs.utc();
      const timeDifference = timeNow.diff(timestamp, 's');
      // if latest block has been over two minute ago
      if (timeDifference > 120 && chainActive) {
        toast.error(
          t('blockTimeAgo', {
            time: dayjs.utc(timestamp).fromNow(),
          }),
          {
            autoClose: false,
          }
        );
        setChainActive(false);
      }
    },
  });

  useEffect(() => {
    if (!isClient) return;
    getLatestBlockTimestamp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

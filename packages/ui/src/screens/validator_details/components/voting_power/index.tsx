import Box from '@/components/box';
import { useStyles } from '@/screens/validator_details/components/voting_power/styles';
import type { VotingPowerType } from '@/screens/validator_details/types';
import { BLOCK_DETAILS } from '@/utils/go_to_page';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import React from 'react';

const VotingPower: React.FC<{
  className?: string;
  data: VotingPowerType;
  status?: number;
}> = ({ className, data, status }) => {
  const { t } = useTranslation('validators');
  const votingPowerPercent =
    status === 3
      ? numeral((data.self / (numeral(data.overall.value).value() ?? 0)) * 100 ?? 0)
      : numeral(0);

  const classes = useStyles(parseFloat(votingPowerPercent.format('0', Math.floor)));

  const votingPower = status === 3 ? numeral(data.self).format('0,0') : '0';

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2">{t('votingPower')}</Typography>
      <div className={classes.data}>
        <Typography variant="h3" className="primary__data">
          {`${votingPowerPercent.format('0,0.00')}%`}
        </Typography>
        <Typography variant="body1">
          {votingPower} / {numeral(data.overall.value).format('0,0')}
        </Typography>
      </div>
      <div className={classes.chart}>
        <div className={classes.active} />
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('block')}
        </Typography>
        <Link href={BLOCK_DETAILS(data.height)} passHref>
          <Typography variant="body1" className="value" component="a">
            {numeral(data.height).format('0,0')}
          </Typography>
        </Link>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('votingPower')}
        </Typography>
        <Typography variant="body1" className="value">
          {votingPower}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('votingPowerPercent')}
        </Typography>
        <Typography variant="body1" className="value">
          {`${votingPowerPercent.format('0,0.00')}%`}
        </Typography>
      </div>
    </Box>
  );
};

export default VotingPower;

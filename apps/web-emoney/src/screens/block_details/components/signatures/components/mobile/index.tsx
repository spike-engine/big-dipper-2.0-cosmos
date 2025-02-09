import AvatarName from '@/components/avatar_name';
import { useList, useListRow } from '@/hooks';
import { useStyles } from '@/screens/block_details/components/signatures/components/mobile/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import { Translate } from 'next-translate';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';

const Mobile: FC<{
  className?: string;
  signatures?: AvatarName[];
}> = ({ className, signatures }) => {
  const { t } = useTranslation('blocks');

  const { listRef, getRowHeight, setRowHeight } = useList();
  const classes = useStyles();

  return (
    <div className={classnames(className, classes.root)}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List"
            height={height}
            itemCount={signatures?.length ?? 0}
            itemSize={getRowHeight}
            ref={listRef as React.LegacyRef<List>}
            width={width}
          >
            {({ index, style }) => (
              <ListItem {...{ index, style, setRowHeight, signatures, classes, t }} />
            )}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

const ListItem: FC<
  Pick<ListChildComponentProps, 'index' | 'style'> & {
    setRowHeight: Parameters<typeof useListRow>[1];
    signatures: AvatarName[] | undefined;
    classes: ReturnType<typeof useStyles>;
    t: Translate;
  }
> = ({ index, style, setRowHeight, signatures, classes, t }) => {
  const { rowRef } = useListRow(index, setRowHeight);
  const selectedItem = signatures?.[index];
  return (
    <div style={style}>
      <div ref={rowRef}>
        {/* single signature start */}
        <div className={classes.itemWrapper}>
          <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('validator')}
            </Typography>
            <AvatarName
              address={selectedItem?.address ?? ''}
              imageUrl={selectedItem?.imageUrl}
              name={selectedItem?.name ?? ''}
            />
          </div>
        </div>
        {/* single signature end */}
        {!!signatures && index !== signatures.length - 1 && <Divider />}
      </div>
    </div>
  );
};

export default Mobile;

/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { Typography } from '@mui/material';
// import { LinkButton } from '@/components';
import React from 'react';
import { useTranslation } from '@/translation';

// import { routes } from '@/constants/routing';

import { useStyles } from './styles';
import wallet from '@/assets/img/wallet.webp';
import Image from 'next/image';

const AccountPlaceholder = () => {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <div css={styles.placeholderContainer as any}>
      <div>
        <Image
          src={wallet}
          css={styles.wallet}
          alt={t('dashboard.connectWalletBanner.illustration.alt')}
          title={t('dashboard.connectWalletBanner.illustration.alt')}
        />
      </div>
      <Typography css={styles.placeholderText as any} variant='h4'>
        {t('accountPlaceholder.assetsWillAppearHere')}
      </Typography>
      {/* <LinkButton to={routes.dashboard.path} className='custom-btn-wrap'>{t('accountPlaceholder.letsGetStarted')}</LinkButton> */}
    </div>
  );
};

export default AccountPlaceholder;

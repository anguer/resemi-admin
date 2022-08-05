import { IconGithubLogo } from '@douyinfe/semi-icons';
import React, { FunctionComponent } from 'react';
import styles from '../Layout.module.scss';
import { useLayoutContext } from '../context';

export type FooterProps = {};

export const Footer: FunctionComponent<FooterProps> = () => {
  const state = useLayoutContext();
  return (
    <footer className={`${state.prefixCls}-layout-footer`}>
      <style jsx>{`
        .${state.prefixCls}-layout-footer {
          display: flex;
          flex: 0 0 auto;
          height: ${styles.footerHeight};
          justify-content: space-between;
          padding: ${styles.baseSpace};
          color: var(--semi-color-text-2);
          background-color: rgba(var(--semi-grey-0), 1);
        }
      `}</style>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <IconGithubLogo size="large" style={{ marginRight: '8px' }} />
        <span>Copyright © 2022 Anguer. All Rights Reserved. </span>
      </div>
    </footer>
  );
};

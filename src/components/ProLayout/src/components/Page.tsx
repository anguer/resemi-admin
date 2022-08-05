import { FunctionComponent } from 'react';
import styles from '../Layout.module.scss';
import { useLayoutContext } from '@/components/ProLayout/src/context';

export type PageProps = {};

export const Page: FunctionComponent<PageProps> = ({ children }) => {
  const state = useLayoutContext();
  return (
    <div className={`${state.prefixCls}-layout-page`}>
      <style jsx>{`
        .${state.prefixCls}-layout-page {
          border-radius: 10px;
          border: 1px solid var(--semi-color-border);
          padding: ${styles.baseSpace};
        }
      `}</style>
      {children}
    </div>
  );
};

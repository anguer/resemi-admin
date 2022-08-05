import { Breadcrumb } from '@douyinfe/semi-ui';
import { FunctionComponent } from 'react';
import styles from '../Layout.module.scss';
import PageLoading from './PageLoading';
import { Page } from './Page';
import { useLayoutContext } from '@/components/ProLayout/src/context';

export type MainProps = {};

export const Main: FunctionComponent<MainProps> = ({ children }) => {
  const state = useLayoutContext();
  return (
    <main className={`${state.prefixCls}-layout-content`}>
      <style jsx>{`
        .${state.prefixCls}-layout-content {
          position: relative;
          padding: ${styles.baseSpace};
          flex: auto;
          min-height: calc(100vh - ${styles.headerHeight} - ${styles.footerHeight});
          background-color: var(--semi-color-bg-0);
        }
      `}</style>
      <PageLoading />
      <Breadcrumb
        aria-label="breadcrumb"
        className="mb-24px"
        routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']}
      />
      <Page>{children}</Page>
    </main>
  );
};

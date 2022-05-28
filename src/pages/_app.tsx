import 'windi.css';
import '@/styles/globals.scss';

import { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';
import NProgress from 'nprogress';
import { LayoutAdapter } from '@/layouts';
import { AppStoreProvider } from '@/store';
import useAppMeta from '@/hooks/web/useAppMeta';
import useProgress from '@/hooks/web/useProgress';

// NProgress configuration
NProgress.configure({ showSpinner: false });

// Extended component properties
type NextPageWithLayout = NextPage & {
  title?: string;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const { title, description, keywords, author } = useAppMeta(Component.title);

  useProgress(
    () => NProgress.start(),
    () => NProgress.done(),
  );

  return (
    <AppStoreProvider>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={description} key="title" />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} key="description" />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-site-verification" content="YOuLXmHPeyzodGVVoqnbTLwf_7LXeqxKKlgie8vU88s" />
        <meta name="google-site-verification" content="1sWvVpnEFhLRPGKh9BpikcBQCcjwHIIlpZ2ExUNxWlo" />
      </Head>
      <LayoutAdapter>
        <Component {...pageProps} />
      </LayoutAdapter>
    </AppStoreProvider>
  );
}

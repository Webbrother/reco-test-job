import { Layout } from 'antd';
import { PropsWithChildren } from 'react';

import styles from './AppLayout.module.css';

const { Header, Footer, Content } = Layout;

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout>
      <Header className={styles.header}>Header</Header>
      <Content className={styles.content}>{children}</Content>
      <Footer className={styles.footer}>Footer</Footer>
    </Layout>
  );
};

import { AppLayout } from '../../components/app-layout/AppLayout';
import { Table } from 'antd';
import { useEffect } from 'react';
import { getApps } from '../../api/app-service';

const dataSource = [
  {
    appId: 'amplitude.com',
    appName: 'Amplitude',
    appSources: ['APP_SOURCE_GOOGLE'],
    category: 'Data Analytics',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'appName',
    key: 'appName',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Connector',
    dataIndex: 'appSources',
    key: 'appSources',
  },
];

export const InventoryPage = () => {
  useEffect(() => {
    getApps({ pageNumber: 0, pageSize: 25 }).then(r => console.log(r));
  }, []);

  return (
    <AppLayout>
      <Table dataSource={dataSource} columns={columns} />
    </AppLayout>
  );
};

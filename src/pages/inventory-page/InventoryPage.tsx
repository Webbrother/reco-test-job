import { Alert, Table } from 'antd';
import { useAppsList } from '../../api/app-service/apps-list';
import { AppOverview } from '../../components/AppOverview/AppOverview';
import { useState } from 'react';
import { useOpenClose } from '../../utils/hooks/useOpenClose';

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
  const { visible, open, close } = useOpenClose();
  const [activeAppId, setActiveAppId] = useState(null);

  const { isLoading, error, data } = useAppsList({ pageSize: 25, pageNumber: 0 });

  if (error) {
    // @ts-ignore
    return <Alert message='Error' description={error.message} type='error' closable={false} />;
  }

  return (
    <>
      <Table
        dataSource={data?.appRows}
        columns={columns}
        loading={isLoading}
        onRow={(record, rowIndex) => {
          return {
            onClick: (...args) => {
              console.log('on row click', record);
              open();
            },
          };
        }}
      />

      <AppOverview appId={activeAppId} open={visible} onClose={close} />
    </>
  );
};

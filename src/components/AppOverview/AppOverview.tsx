import { Drawer } from 'antd';

interface AppOverviewProps {
  onClose: () => void;
  open: boolean;
  appId: string | null;
}

export const AppOverview = ({ appId, open, onClose }: AppOverviewProps) => {
  return (
    <Drawer title='App overview' placement='right' onClose={onClose} open={open}>
      <div>{appId}</div>
      <div>AppOverview</div>
    </Drawer>
  );
};

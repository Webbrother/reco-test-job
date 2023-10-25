import React from 'react';

import { InventoryPage } from './pages/inventory-page/InventoryPage';
import { ReactQueryProvider } from './components/ReactQueryProvider/ReactQueryProvider';
import { AppLayout } from './components/app-layout/AppLayout';

function App() {
  return (
    <ReactQueryProvider>
      <AppLayout>
        <InventoryPage />
      </AppLayout>
    </ReactQueryProvider>
  );
}

export default App;

import React from 'react';

import { InventoryPage } from './pages/inventory-page/InventoryPage';
import { ReactQueryProvider } from './components/ReactQueryProvider/ReactQueryProvider';
import { AppLayout } from './components/AppLayout/AppLayout';

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

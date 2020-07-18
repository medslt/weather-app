import React from 'react';
import Main from './Main';
import StoreProvider from './storeManegement/StoreProvider';

function App() {
  return (
    <StoreProvider>
      <Main/>
    </StoreProvider>
  );
}

export default App;

import Render from './Render';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'redux/store';

export const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Render />
    </PersistGate> 
  );
};


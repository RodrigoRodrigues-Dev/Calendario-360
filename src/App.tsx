import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Outlet } from 'react-router-dom';

import Header from './containers/Header';
import NavBar from './containers/NavBar';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Outlet />
        <NavBar />
      </PersistGate>
    </Provider>
  );
}

export default App;

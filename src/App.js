import React from 'react';
import './shared/global/css/Global.css'
import { Routing } from './routes/Routing';
import { NavigationBar} from './components/navigationbar/NavigationBar';
import { UserProvider } from './shared/global/provider/UserProvider'

function App() {
  return (
    <UserProvider>
      <Routing>
        <NavigationBar />
      </Routing>
    </UserProvider>
  );
}

export default App;

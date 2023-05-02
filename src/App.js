import './css/devices.css'
import './App.css';
import './fonts.css'
import { Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import Upload from './screens/upload';
import Account from './screens/account';
import BottomBar from './components/bottomBar';
import CreateAccount from './screens/additional/onbarding/createAccount';
import LogIn from './screens/additional/onbarding/login';
import TopBar from './components/topBar';
import 'antd/dist/reset.css';
import Search from './screens/search';
import Expos from './screens/expos';
import Engage from './screens/engage';
import UploadArt from './screens/upload';
import { useEffect, useState } from 'react';

function App() {

  const [i, setI] = useState(true)

  useEffect(() => {
  }, [i])

  return (
    <div className="App">
      <div style={{ marginTop: '60px', paddingBottom: '60px', transition: 'all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)' }}>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/expos" element={<Expos />} />
          <Route path="/search" element={<Search />} />
          <Route path="/upload" element={<UploadArt />} />
          <Route path="/engage" element={<Engage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div >

      <div className='nav_wrap' onClick={e => setI(!i)}>
        {window.location.pathname !== '/upload' ? < BottomBar /> : window.location.pathname === '/login' ? <BottomBar /> : null}
      </div >

    </div>
  );
}

export default App;

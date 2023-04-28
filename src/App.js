import './css/devices.css'
import './App.css';
import './fonts.css'
import { Routes, Route } from 'react-router-dom';
import Home from './screens/home';
import Upload from './screens/upload';
import Stats from './screens/stats';
import Account from './screens/account';
import BottomBar from './components/bottomBar';
import CreateAccount from './screens/additional/onbarding/createAccount';
import LogIn from './screens/additional/onbarding/login';
import TopBar from './components/topBar';
import Connect from './screens/connect';
import 'antd/dist/reset.css';
import Search from './screens/search';

function App() {

  return (
    <div className="App">
      <div style={{ marginTop: '60px', paddingBottom: '60px' }}>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/search" element={<Search />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/account" element={<Account />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </div>
      <BottomBar />
    </div>
  );
}

export default App;

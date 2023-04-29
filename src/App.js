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

function App() {

  return (
    <div className="App">
      <div style={{ marginTop: '60px', paddingBottom: '60px' }}>
        {/* <form>
          <input id='planet' name='userplanet' type='text' list='theplanets' />
          <datalist id='theplanets'>
            <option value='Mars' />
            <option value='Venus' />
            <option value='Mercury' />
            <option value='Earth' />
          </datalist>
        </form> */}
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/expos" element={<Expos />} />
          <Route path="/search" element={<Search />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/engage" element={<Engage />} />
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

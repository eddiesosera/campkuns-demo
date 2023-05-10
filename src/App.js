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
import { createContext, useEffect, useState } from 'react';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AccountGridView from './screens/myaccount/route/accGridView';
import Error404 from './screens/404';
import AccountSingleView from './screens/myaccount/route/accSingleView';
import Gala from './screens/myaccount/route/Gala';
import { path } from 'animejs';

function App() {

  const [i, setI] = useState(0)
  const [navDisplay, setNavDisplay] = useState('none')

  //Hide nav
  useEffect(() => {

    if (window.location.pathname === '/upload' || window.location.pathname === '/login' || window.location.pathname === '/create') {
      setNavDisplay('none')
    } else {
      setNavDisplay('block')
    };

    setTimeout(() => {
      setI(i + 1)
    }, 10);

  }, [i])

  return (
    <div className="App" >

      <div id='appRoutes' style={{ transition: 'all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)' }}>
        <Routes >
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/expos" element={<PrivateRoute><Expos /></PrivateRoute>} />
          <Route path="/search" element={<PrivateRoute><Search /></PrivateRoute>} />
          <Route path="/upload" element={<PrivateRoute><UploadArt /></PrivateRoute>} />
          <Route path="/engage" element={<PrivateRoute><Engage /></PrivateRoute>} />
          <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} >
            <Route path="grid-view" index element={<AccountGridView />} />
            <Route path="single-view" element={<AccountSingleView />} />
            <Route path="gala-view" element={<Gala />} />
          </Route>
          <Route path="/create" element={<PublicRoute><CreateAccount /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><LogIn /></PublicRoute>} />
          <Route path="*" element={<Error404 />} />


        </Routes>
      </div >

      <div id='app_nav_wrap' style={{ display: navDisplay }} >
        < BottomBar />
      </div >


    </div >
  );
}

export default App;

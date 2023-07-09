import "./css/devices.css";
import "./App.css";
import "./fonts.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./screens/home";
import Upload from "./screens/upload";
import Account from "./screens/account";
import BottomBar from "./components/bottomBar";
import CreateAccount from "./screens/additional/onbarding/createAccount";
import LogIn from "./screens/additional/onbarding/login";
import TopBar from "./components/topBar";
import "antd/dist/reset.css";
import Search from "./screens/search";
import Expos from "./screens/expos";
import Engage from "./screens/engage";
import UploadArt from "./screens/upload";
import { createContext, useEffect, useState } from "react";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AccountGridView from "./screens/myaccount/route/accGridView";
import Error404 from "./screens/404";
import AccountSingleView from "./screens/myaccount/route/accExhibitView";
import Gala from "./screens/myaccount/route/accStoriesView";
import { path } from "animejs";
import axios from "axios";
import { Explore } from "./screens/explore";
import AccountEventsView from "./screens/myaccount/route/accExhibitView";
import AccountExhibitView from "./screens/myaccount/route/accExhibitView";
import AccountStoriesView from "./screens/myaccount/route/accStoriesView";
import { AccountCollectionsView } from "./screens/myaccount/route/accCollectionsView";

function App() {
  const API_URL = process.env.REACT_APP_API;

  const [i, setI] = useState(0);
  const [navDisplay, setNavDisplay] = useState("none");
  const [no, setNo] = useState(0);
  const [myPosts, setMyPosts] = useState([]);
  const pg = useLocation();

  //Hide nav
  useEffect(
    () => {
      if (pg.pathname === "/upload" || pg.pathname === "/login" || pg.pathname === "/create" || pg.pathname === "/explore") {
        setNavDisplay("none");
      } else {
        setNavDisplay("block");
      }
    },
    [pg.pathname]
  );

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: API_URL + "/posts/my-account?sortBy=createdAt:desc",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${window.localStorage.getItem("token")}`
    }
  };

  useEffect(
    () => {
      axios
        .request(config)
        .then(response => {
          console.log(response.data.results);

          setMyPosts(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    },
    [myPosts, i]
  );

  return (
    <div
      className="App"
      style={{ overflow: "clip" }}
      // onClick={(e) => { setI(i + 1); setTimeout(() => { setI(i + 1) }, 2500); }} onLoadedData={(e) => { setI(i + 1) }}
    >
      {/* <svg id='noiseOverlay' viewBox='0 0 1500 1500' xmlns='http://www.w3.org/2000/svg'>
        <filter id='noiseFilter'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.65'
            numOctaves='3'
            stitchTiles='stitch' />
        </filter>

        <rect width='1500px' height='100%' filter='url(#noiseFilter)' />
      </svg> */}

      <div id="appRoutes" style={{ transition: "all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)" }}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          \
          <Route
            path="/explore"
            element={
              <PrivateRoute>
                <Explore />
              </PrivateRoute>
            }
          />
          <Route
            path="/expos"
            element={
              <PrivateRoute>
                <Expos />
              </PrivateRoute>
            }
          />
          <Route
            path="/search"
            element={
              <PrivateRoute>
                <Search />
              </PrivateRoute>
            }
          />
          <Route
            path="/upload"
            element={
              <PrivateRoute>
                <UploadArt />
              </PrivateRoute>
            }
          />
          <Route
            path="/engage"
            element={
              <PrivateRoute>
                <Engage />
              </PrivateRoute>
            }
          />
          <Route
            path="/account"
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          >
            <Route path="grid-view" index element={<AccountGridView myPosts={myPosts} />} />
            <Route path="exhibit-view" element={<AccountExhibitView />} />
            <Route path="stories-view" element={<AccountStoriesView />} />
            <Route path="collections-view" element={<AccountCollectionsView />} />
          </Route>
          <Route
            path="/create"
            element={
              <PublicRoute>
                <CreateAccount />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LogIn />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>

      <div id="app_nav_wrap" style={{ display: navDisplay }}>
        <BottomBar />
      </div>
    </div>
  );
}

export default App;

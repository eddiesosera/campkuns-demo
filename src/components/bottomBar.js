import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHouse, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import "remixicon/fonts/remixicon.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import Home from "../screens/home";
import Upload from "../screens/upload";
import Stats from "../screens/engage";
import Account from "../screens/account";

function BottomBar() {
  //console.log(window.location.pathname)

  const currentPage = useLocation().pathname;

  //STYLE
  const bottomBarStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "54px",
    width: "100%",
    backgroundColor: "#151515",
    color: "white",
    fontFamily: "Poppins",
    fontSize: "10px",
    fontWeight: "500",
    position: "fixed",
    bottom: "0",
    zIndex: "99",
    borderTop: "0.75px solid #333333"
  };
  const linkStyle = {
    textDecoration: "none",
    textDecorationLine: "none",
    color: "#ad9485",
    transition: "color 0.5s cubic-bezier(0.87, 0, 0.13, 1) 0s"
  };
  const routeStyle = { display: "flex", flexDirection: "column", alignItems: "center" };

  const navPage = [
    {
      href: "/",
      title: "",
      // Home
      icon: {
        active: "ri-home-4-fill",
        inActive: "ri-home-4-line"
      },
      link: linkStyle,
      wrap_style: routeStyle,
      iconSize: "24px",
      class_name: "navbar_home"
    },
    {
      href: "/expos",
      title: "",
      // Expos
      icon: {
        active: "ri-box-2-fill",
        inActive: "ri-box-2-line"
      },
      link: linkStyle,
      wrap_style: routeStyle,
      iconSize: "24px",
      class_name: "navbar_expos"
    },
    {
      href: "/upload",
      title: "",
      // Upload
      icon: {
        active: "ri-add-box-fill",
        inActive: "ri-add-line"
      },
      link: linkStyle,
      wrap_style: routeStyle,
      iconSize: "28px",
      class_name: "navbar_upload"
    },
    {
      href: "/engage",
      title: "",
      // Engage
      icon: {
        active: "ri-notification-3-fill",
        inActive: "ri-notification-3-line"
      },
      link: linkStyle,
      wrap_style: routeStyle,
      iconSize: "24px",
      class_name: "navbar_engage"
    },
    {
      href: "/account/grid-view",
      title: "",
      // Me
      icon: {
        active: "ri-bear-smile-fill",
        inActive: "ri-bear-smile-line"
      },
      link: linkStyle,
      wrap_style: routeStyle,
      iconSize: "24px",
      class_name: "navbar_account"
    }
  ];

  const [selectedPage, setSelectedPage] = useState(useLocation().pathname);

  useEffect(
    () => {
      console.log("Page is " + selectedPage);
    },
    [selectedPage]
  );

  const page = () => {
    setSelectedPage(currentPage);
  };

  return (
    <div className="bottomBar-container" style={bottomBarStyle}>
      {navPage.map(screen => (
        <NavLink
          to={screen.href}
          style={screen.link}
          onClick={e => {
            // window.location.reload();
            // window.location.replace(screen.href);
          }}
        >
          <div key="" className={screen.class_name} style={screen.wrap_style} onClick={page}>
            <i
              className={window.location.pathname === screen.href ? screen.icon.active : screen.icon.inActive}
              style={{ fontSize: screen.iconSize }}
            />
            {screen.title}
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default BottomBar;

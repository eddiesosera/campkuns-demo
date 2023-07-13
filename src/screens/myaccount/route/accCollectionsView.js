import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Masonry from "react-responsive-masonry";

export const AccountCollectionsView = () => {
  const API_URL = process.env.REACT_APP_API;

  const [xplrProducts, setXplrProducts] = useState([]);
  const [xplrProductsName, setXplrProductsName] = useState([]);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  let nmIndx = 0;

  useEffect(
    () => {
      axios
        .get(API_URL + "/posts?sortBy=createdAt:desc")
        .then(result => {
          const postList = result.data.results;
          console.log(postList.map(prdct => prdct.images[0]));
          console.log(postList);
          setXplrProducts(postList.map(prdct => prdct.images[0]));
          const nameFilt = postList.filter(usrnm => usrnm.user !== undefined);
          const nameFilt2 = nameFilt.filter(usrnm => usrnm.user !== null);
          const nameArr = nameFilt2.map(prdctName => prdctName.user);
          setXplrProductsName(nameArr.map(user => user.name));

          console.log(xplrProductsName);
        })
        .catch(error => console.log(error));
    },
    [xplrProducts]
  );

  //Show Navbar
  document.querySelector("#app_nav_wrap").style.display = "block";
  return (
    <div>
      {/* COLLECTIONS */}
      <div
        style={{
          marginBottom: "20px",
          marginTop: "20px",
          marginLeft: "20px",
          fontSize: "24px",
          fontWeight: "600",
          color: "#ffe7d9",
          fontFamily: "Hanken Grotesk"
        }}
      >
        eddie's collection
      </div>
      <div>
        <div style={{ padding: "0 10px", paddingBottom: "60px" }}>
          <Masonry columnsCount={window.screen.width > 470 ? 8 : 2} gutter="7.5px">
            {xplrProducts.map((image, i) => (
              <div style={{}}>
                <img alt="msn" key={i} src={image} style={{ width: "100%", display: "flex", borderRadius: "12px" }} />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", marginTop: "10px", marginBottom: "15px", marginLeft: "10px" }}>
                    <img
                      style={{ width: "20px", height: "20px", borderRadius: "50%", objectFit: "cover", marginRight: "5px" }}
                      src={image}
                      alt="i"
                    />
                    <div style={{ color: "white", fontFamily: "Hanken Grotesk", fontSize: "14px" }}>
                      {xplrProductsName[nmIndx++]}
                    </div>
                  </div>
                  <i className="ri-more-fill" style={{ fontSize: "24px", color: "#e8b297", marginRight: "10px" }} />
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

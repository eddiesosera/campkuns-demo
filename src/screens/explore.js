import React, { useState, memo, useEffect, useCallback } from "react";
import axios from "axios";
import "./explore.css";

import Masonry from "react-responsive-masonry";
import { NavLink } from "react-router-dom";

export const Explore = () => {
  const API_URL = process.env.REACT_APP_API;

  const activedCat = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    width: "max-content",
    height: "36px",
    padding: "0 15px",
    border: "1px solid #E55C17",
    margin: "5px",
    color: "#E55C17",
    borderRadius: "8px",
    fontFamily: "Hanken Grotesk",
    backgroundColor: "#261c18",
    fontWeight: "500",
    fontSize: "12px",
    transition: "all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)"
  };

  const inActivedCat = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    cursor: "pointer",
    width: "max-content",
    height: "36px",
    padding: "0 15px",
    border: "0.5px solid #464646",
    margin: "5px",
    color: "#9D9D9D",
    borderRadius: "8px",
    fontFamily: "Hanken Grotesk",
    fontWeight: "500",
    fontSize: "12px",
    transition: "all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)"
  };

  const CategoryOptions = {
    display: "flex",
    flexWrap: "nowrap",
    padding: "0 15px",
    overflowX: "scroll",
    justifyContent: "flex-start",
    transition: "all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)"
  };

  const [filters, setFilters] = useState([
    { label: "All", value: "All" },
    { label: "eddie", value: "eddie" },
    { label: "yay_abe", value: "yay_abe" },
    { label: " Photography", value: "Photography" }
  ]);
  const [selectedFilter, setSelectedFilter] = useState(filters[0].value);

  const [xplrProducts, setXplrProducts] = useState([]);
  const [xplrProductsName, setXplrProductsName] = useState([]);
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
          setFilters([
            { label: "All", value: "All" },
            { label: xplrProductsName[1], value: xplrProductsName[1] },
            { label: xplrProductsName[3], value: xplrProductsName[3] },
            { label: xplrProductsName[8], value: xplrProductsName[8] },
            { label: xplrProductsName[15], value: xplrProductsName[15] }
          ]);
          console.log(xplrProductsName);
        })
        .catch(error => console.log(error));
    },
    [xplrProducts]
  );

  return (
    <div>
      <div>
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
          Explore Artists & Galleries
        </div>
        <ul className="selectCategory-options" style={CategoryOptions}>
          {filters.map((filter, i) => (
            <li
              className="filter"
              key={filter.value}
              style={filter.value === selectedFilter ? activedCat : inActivedCat}
              onClick={() => setSelectedFilter(filter.value)}
            >
              {filter.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Masonry Grid */}

      <div style={{ padding: "0 10px", paddingBottom: "60px" }}>
        <Masonry columnsCount={window.screen.width > 470 ? 8 : 2} gutter="7.5px">
          {xplrProducts.map((image, i) => (
            <div style={{}}>
              <img alt="msn" key={i} src={image} style={{ width: "100%", display: "flex", borderRadius: "12px" }} />
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
            </div>
          ))}
        </Masonry>
      </div>

      {/* Link to Explore */}
      <NavLink to="/">
        <div
          style={{
            position: "fixed",
            zIndex: "100",
            height: "fit-content",
            width: "fit-content",
            padding: "10px 15px",
            color: "#ed6d22",
            background: "#151515",
            bottom: "0",
            right: "0",
            marginRight: "20px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px"
          }}
        >
          <i style={{ color: "#ed6d22", fontSize: "24px" }} className="ri-home-4-fill" />{" "}
          <div style={{ marginLeft: "5px", fontSize: "16px", fontFamily: "Hanken Grotesk" }}>Home</div>
        </div>
      </NavLink>
    </div>
  );
};

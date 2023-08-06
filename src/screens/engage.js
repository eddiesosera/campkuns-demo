import React, { useEffect } from "react";
import { useState } from "react";

function Engage() {
  //Show Navbar
  // document.querySelector('#app_nav_wrap').style.display = 'block'

  const API_URL = process.env.REACT_APP_API;

  const activedCat = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    width: "max-content",
    height: "36px",
    padding: "0 20px",
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
    padding: "0 20px",
    border: "0.5px solid #464646",
    margin: "5px",
    color: "#9D9D9D",
    borderRadius: "8px",
    fontFamily: "Hanken Grotesk",
    fontWeight: "500",
    fontSize: "12px",
    transition: "all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)"
  };

  const [filters, setFilters] = useState([
    { label: "General", value: "general" },
    { label: "Sales", value: "sales" },
    { label: "Likes", value: "likes" },
    { label: "Requests", value: "requests" }
  ]);
  const [selectedFilter, setSelectedFilter] = useState(filters[0].value);

  const CategoryOptions = {
    display: "flex",
    flexWrap: "nowrap",
    padding: "0 15px",
    overflowX: "scroll",
    justifyContent: "flex-start",
    transition: "all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)"
  };

  const engage_notification = [
    {
      date: "Today",
      engagement_details: {
        engagement_type: "like",
        art_id: "The Loov",
        engagee_id: "user_logged_in",
        engager_id: "dave_east",
        post_id: ""
      }
    },
    {
      date: "Yesterday",
      engagement_details: {
        engagement_type: "sale",
        art_id: "van Gogh",
        engagee_id: "user_logged_in",
        engager_id: "electric_eddie",
        post_id: ""
      }
    },
    {
      date: "A month ago",
      engagement_details: {
        engagement_type: "request",
        art_id: "van Gogh",
        engagee_id: "user_logged_in",
        engager_id: "electric_eddie",
        post_id: ""
      }
    }
  ];

  console.log(engage_notification.map(eng_ntf => eng_ntf));
  return (
    <div className="engage_wrap" style={{ width: "max-width", maxWidth: "470px", margin: "0 auto" }}>
      <div
        className="engage_top"
        style={{ position: "sticky", top: "0", background: "#1f1e1d", paddingTop: "20px", paddingBottom: "5px" }}
      >
        <div
          style={{
            marginBottom: "20px",
            // marginTop: "20px",
            marginLeft: "20px",
            fontSize: "24px",
            fontWeight: "600",
            color: "#ffe7d9",
            fontFamily: "Hanken Grotesk"
          }}
        >
          Engagement
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
      <div className="engage_content">
        <ul
          className="engagement_notification_wrap"
          style={{ display: "flex", flexDirection: "column", gap: "3px", padding: "5px", listStyle: "none" }}
        >
          {engage_notification.map(eng_ntf => {
            return (
              <li
                style={{
                  //   background: "#292623",
                  background: "#191715",
                  listStyle: "none",
                  padding: "15px",
                  borderRadius: "9px",
                  color: "#ffe7d9",
                  display: "flex",
                  gap: "20px",
                  justifyContent: "space-between"
                }}
              >
                <div className="notification_left_wrap" style={{ display: "flex", gap: "20px" }}>
                  <div className="notification_symbol">
                    <i className="ri-heart-fill" style={{ fontSize: "24px" }} />
                  </div>
                  <div className="notification_content" style={{ display: "flex", gap: "5px" }}>
                    <img
                      src="https://ucarecdn.com/3cfda29f-3620-4ce6-b488-7f0757853c6d/"
                      alt="Bnr"
                      style={{ height: "30px", width: "30px", borderRadius: "25px" }}
                    />
                    {/* <div>{eng_ntf.engagement_details.engager_id}</div> */}
                    <div>
                      <b>{eng_ntf.engagement_details.engager_id}</b> likes your work.
                    </div>
                  </div>
                </div>
                <div className="notification_right_banner">
                  <img
                    src="https://ucarecdn.com/3cfda29f-3620-4ce6-b488-7f0757853c6d/"
                    alt="Bnr"
                    style={{ height: "50px", width: "50px" }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Engage;

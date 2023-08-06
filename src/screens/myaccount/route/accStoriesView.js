import React, { useState } from "react";

function AccountStoriesView({ testpar }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const stories = [
    "Hi Its me",
    "First Story",
    "When some people talk about money They speak as if it were a mysterious lover Who went out to buy milk and neverCame back, and it makes me nostalgic For the years I lived on coffee and bread, Hungry all the time, walking to work on payday",
    "By day the bat is cousin to the mouse. He likes the attic of an aging house. His fingers make a hat about his head. His pulse beat is so slow we think him dead.",
    "Critics matter too"
  ];
  return (
    <div style={{ paddingBottom: "60px" }}>
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
        {user.name.toLocaleLowerCase() + "'s diary"}
      </div>
      <div className="storiesWrap" style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "8px" }}>
        {stories.map(str => {
          return (
            <div
              className="story_wrap"
              style={{
                color: "#ffe7d9",
                background: "#1e1e1e",
                padding: "15px 20px",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "20px"
              }}
            >
              <div
                className="story_top_section"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <div className="story_top_section_left" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img
                    src={user.profile_Img}
                    alt=""
                    style={{ height: "30px", width: "30px", borderRadius: "100%", objectFit: "cover" }}
                  />
                  <div className="story_username_wrap" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <div className="story_username">{user.name}</div>
                    {user?.isUserVerified ? (
                      <svg
                        style={{ color: "#2294d7", background: "#fef3ec", borderRadius: "100px" }}
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.86937 0.468323C5.4938 -0.156108 6.5062 -0.156108 7.13063 0.468323L7.6001 0.937795C7.825 1.16269 8.13003 1.28904 8.44808 1.28904H9.11201C9.99509 1.28904 10.711 2.00491 10.711 2.88799V3.55192C10.711 3.86997 10.8373 4.175 11.0622 4.3999L11.5317 4.86937C12.1561 5.4938 12.1561 6.5062 11.5317 7.13063L11.0622 7.6001C10.8373 7.825 10.711 8.13003 10.711 8.44808V9.11201C10.711 9.99509 9.99509 10.711 9.11201 10.711H8.44808C8.13003 10.711 7.825 10.8373 7.6001 11.0622L7.13063 11.5317C6.5062 12.1561 5.4938 12.1561 4.86937 11.5317L4.3999 11.0622C4.175 10.8373 3.86998 10.711 3.55192 10.711H2.88799C2.00491 10.711 1.28903 9.99509 1.28903 9.11201V8.44807C1.28903 8.13002 1.16269 7.825 0.937792 7.6001L0.468323 7.13063C-0.156108 6.5062 -0.156108 5.4938 0.468323 4.86937L0.937793 4.3999C1.16269 4.175 1.28903 3.86998 1.28903 3.55193V2.88799C1.28903 2.00491 2.00491 1.28904 2.88799 1.28904H3.55192C3.86998 1.28904 4.175 1.16269 4.3999 0.937795L4.86937 0.468323ZM8.38379 4.00131L5.32179 7.06364L3.67287 5.41471L3.20184 5.88574L5.32179 8.00569L8.85515 4.47233L8.38379 4.00131Z"
                          fill="#21a9ed"
                        />
                      </svg>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="story_top_section_right" style={{ display: "flex", alignItems: "center" }}>
                  <div className="story_top_section_right_time" style={{ fontFamily: "Hanken Grotesk", color: "#a3968f" }}>
                    9h
                  </div>
                  <i
                    className="ri-more-line"
                    style={{ fontSize: "24px", marginLeft: "20px" }}
                    // onClick={e => setOptionTgl(!optionTgl)}
                  />
                </div>
              </div>
              <div className="story_content" style={{ fontFamily: "Hanken Grotesk", fontSize: "14px", fontWeight: "300" }}>
                {str}
              </div>
              <div className="story_content_interaction" style={{ display: "flex", gap: "20px", color: "#a3968f" }}>
                <i className="ri-heart-line" style={{ fontSize: "20px" }} />
                <i className="ri-bookmark-line" style={{ fontSize: "20px" }} />
                <i className="ri-eye-line" style={{ fontSize: "20px" }} />
              </div>
            </div>
          );
        })}
      </div>
      <div to="/explore">
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
            marginBottom: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px"
          }}
        >
          <i style={{ color: "#ed6d22", fontSize: "24px" }} className="ri-edit-2-line" />{" "}
          <div style={{ marginLeft: "5px", fontSize: "16px", fontFamily: "Hanken Grotesk" }}>Write</div>
        </div>
      </div>
    </div>
  );
}

export default AccountStoriesView;

import React from "react";

export const About = () => {
  return (
    <div style={{ color: "white", padding: "30px" }}>
      <div
        className="about_title"
        style={{ fontSize: "48px", fontWeight: "600", color: "#fef3ec", fontFamily: "Hanken Grotesk" }}
      >
        About Campkuns
      </div>
      <div className="about_description" style={{ marginTop: "10px", fontFamily: "Hanken Grotesk" }}>
        To me Campkuns is a collaborative canvas, for sharing space with the intention of sharing ideas and expressing emotions.
        <br />
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Widget } from "@uploadcare/react-widget";
import axios from "axios";

function SettingsProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [formData, setFormData] = useState({});
  const [img, setImg] = useState(user.profile_Img);
  const API_URL = process.env.REACT_APP_API;
  const navigate = useNavigate("/");
  const [userUpdate, setUserUpdate] = useState(user);
  const [detectChange, setDetectChange] = useState(false);

  console.log(user.profile_Img);
  console.log(user);

  useEffect(
    () => {
      // Updating Local Storage
      let data = "";

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: API_URL + "/users/" + user.id,
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: data
      };

      if (detectChange === true) {
        axios
          .request(config)
          .then(response => {
            if (user !== userUpdate) {
              setUserUpdate({ ...user, profile_Img: response.profile_Img });
              localStorage.setItem("user", JSON.stringify(userUpdate));
            }
            alert("y");
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    [img, userUpdate, user, API_URL, detectChange]
  );

  // Post to DB
  const handleSubmit = () => {
    if (user.profile_Img !== img && img !== "") {
      //   setFormData({ ...formData, user });
      // formData.user = user

      axios
        .patch(API_URL + "/users/" + user.id, formData, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`
          }
        })
        .then(result => {
          setFormData({});
          alert("Changes Saved");
          navigate("/account/grid-view");
          setDetectChange(true);

          //   console.log(userUpdate);
        })
        .catch(err => {
          alert("Error Saving...");
          console.log(err);
          console.log(formData);
        });
    } else {
      return null;
    }
  };

  const back = () => {
    window.history.back();
  };

  return (
    <div className="settings_profile_wrap" style={{ margin: "0 auto", maxWidth: "470px" }}>
      <div className="upload-header header-wrap">
        <div className="" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <i className="ri-arrow-left-line header-icon" onClick={e => back()} />
          <div className="header-text uploadHeader-text">Edit Profile</div>
        </div>
      </div>
      <form style={{ padding: "20px 20px 20px 0" }}>
        <div
          className="edit_img"
          style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}
        >
          <img
            src={img === "" ? "https://ucarecdn.com/3cfda29f-3620-4ce6-b488-7f0757853c6d/" : img}
            alt="edit_image"
            style={{ width: "180px", height: "180px", borderRadius: "100%", objectFit: "cover", border: "solid 0.5px #3E3E3E" }}
          />
          <Widget
            publicKey="bc3b6c954405f4e975b2"
            onChange={fileInfo => {
              setImg(fileInfo?.originalUrl);
              console.log(fileInfo);
              setFormData({
                ...formData,
                profile_Img: fileInfo?.originalUrl
              });
            }}
          />
        </div>
        <div className="section1_wrap">
          <input
            className="uploadTitle uploadInput"
            style={{ marginBottom: "10px", padding: "15px" }}
            type="text"
            placeholder="Profile Name"
            // onChange={e => titleProg(e)}
            required
          />
          <input
            className="uploadTitle uploadInput"
            style={{ marginBottom: "10px", padding: "15px" }}
            type="text"
            placeholder="Username"
            // onChange={e => titleProg(e)}
            required
          />
          <textarea
            style={{ height: "90px", marginBottom: "10px", padding: "15px", resize: "none" }}
            className="uploadDescription uploadInput"
            type="text"
            placeholder="Bio"
            // onChange={e => setFormData({ ...formData, description: e.target.value })}
          />
        </div>
        <div className="submit-btnWrap">
          <button
            type="submit"
            className="submit-btn"
            id="submit-btn"
            onClick={e => {
              handleSubmit();
              e.preventDefault();
            }}
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default SettingsProfile;

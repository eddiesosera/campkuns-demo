import React, { useEffect, useState } from "react";
import { SimlarPicks } from "../../additional/components/similarPicks";
import axios from "axios";

function AccountGridView({ myPosts }) {
  //Show Navbar
  //document.querySelector('#app_nav_wrap').style.display = 'block'

  const [imgArr, setImgArr] = useState([myPosts]);
  const [ef, seEf] = useState(1);
  console.log(imgArr);

  useEffect(
    () => {
      seEf(ef + 1);
      setImgArr([myPosts]);
    },
    [myPosts, ef]
  );

  return (
    <div style={{ padding: "5px", marginBottom: "60px" }}>
      {/* COLLECTIONS SECTION */}

      {/* <hr style={{ width: '100vw', maxWidth: '470px', margin: '20px auto', border: '0.5px solid #292929', position: 'absolute', left: '0', right: '0' }} /> */}

      <div
        className="gridposts-wrap"
        style={{
          width: "100%",
          marginBottom: "0px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: "2px"
        }}
      >
        {/* https://ucarecdn.com/0741b9fc-75ab-464d-b442-a80cb2c1e033/870f608f74c132310fabf55d88328559.jpg */}
        {myPosts.map(myimgs => {
          return (
            imgArr[0].length !== 0 && (
              <img
                style={{ width: "49.5%", height: "50vw", maxHeight: "228.800px", borderRadius: "3px", objectFit: "cover" }}
                className="gridImg"
                src={myimgs.images[0]}
                alt="gridImg"
              />
            )
          );
        })}
        {imgArr[0].length === 0 && (
          <div
            style={{
              fontSize: "36px",
              fontWeight: "500",
              fontFamily: "Montserrat",
              color: "#2b2b2b",
              margin: "0 auto",
              userSelect: "none"
            }}
          >
            No art yet
          </div>
        )}
      </div>

      {/* <hr style={{ width: '100vw', maxWidth: '470px', margin: '20px auto', border: '0.5px solid #292929', position: 'absolute', left: '0', right: '0' }} /> */}

      <div className="gridposts-wrap" style={{ width: "100%", marginTop: "40px", marginBottom: "40px", display: "flex" }}>
        {imgArr[0].length !== 0 ? <SimlarPicks /> : null}
        {/* {
                    <div style={{ display: 'none' }}>{ef + 1}</div>
                } */}
      </div>
    </div>
  );
}

export default AccountGridView;

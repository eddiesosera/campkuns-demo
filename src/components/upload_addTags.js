import React, { createContext, useEffect, useState } from "react";
import "./upload_addTags.css";

export default function UploadAddTags({ tagList, type, symbol }) {
  const [index, setIndex] = useState(0);
  const [tagVal, setTagVal] = useState("");
  const [deleteTag, setDeleteTag] = useState(true);
  const [tagsList, setTagsList] = useState([{ tag: "", key: "" }]);
  const [expSessTags, setExpSessTags] = useState([]);
  const [symblTgl, setSymblTgl] = useState(false);

  useEffect(
    () => {
      console.log(tagsList);
      // tagsList.map((i)=>i.tag)
    },
    [index, tagsList, tagVal, expSessTags]
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
      <form className="addTag-wrap">
        <div style={{ fontWeight: "600", color: "#757575" }}>{symbol}</div>
        <input
          className="tagInput"
          value={tagVal}
          onChange={e => {
            setTagVal(e.target.value.replace(/ /g, "").toLowerCase());
          }}
          onFocus={e => setSymblTgl(true)}
          onBlur={e => setSymblTgl(false)}
          type="text"
          placeholder={"enter-" + type.toLowerCase() + "-link.com"}
          required
        />
        <button
          id="addTag-icon-wrap"
          type="submit"
          onClick={e => {
            if (tagVal !== "") {
              setIndex(index + 1);
              tagsList.unshift({ tag: tagVal.replace(/ /g, ""), key: index });
              e.preventDefault();
              console.log(tagsList);
              setTagVal("");

              // Send array to parent
              const rmvEmpty = tagsList.filter(tagFll => tagFll.tag !== "");
              tagList(rmvEmpty.map(tags => tags.tag));
            } else {
              return null;
            }
          }}
        >
          <i className="ri-add-line addTag-icon" />
        </button>
      </form>

      <ul
        className="ul-parent"
        style={{
          padding: 0,
          display: "flex",
          gap: "10px",
          marginTop: "10px",
          flexFlow: "wrap",
          marginBottom: "60px",
          height: "fit-content"
        }}
      >
        {tagsList.map(tagItem =>
          tagItem.tag !== "" ? (
            <li
              key={tagItem}
              className="newTag-wrap"
              onClick={e => {
                setIndex(index - 1);
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  className="newTag-txt"
                  style={{
                    marginRight: "5px",
                    color: "#FDE5D7",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "600",
                    textDecoration: "underline"
                  }}
                >
                  <div>{symbol}</div>
                  {
                    <a style={{ color: "#FFE7D9" }} href={"https://www." + tagItem.tag.toLowerCase()}>
                      {tagItem.tag.toLowerCase()}
                    </a>
                  }
                </div>
                <i
                  onClick={e => {
                    for (let i = 0; i <= tagsList.length; i++) {
                      tagItem.tag === tagsList[i].tag ? (tagsList[i].tag = "") : (tagsList[i].key = null);
                    }

                    //Removing empty array
                    const rmvEmpty2 = tagsList.filter(tagFll => tagFll.tag !== "");
                    tagList(rmvEmpty2.map(tags => tags.tag));
                  }}
                  className="ri-close-line deleteTag-icon"
                />
              </div>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}

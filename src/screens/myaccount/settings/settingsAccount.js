import React from "react";

function SettingsAccount() {
  const back = () => {
    window.history.back();
  };
  return (
    <div className="settings_account_wrap" style={{ margin: "0 auto", maxWidth: "470px" }}>
      <div className="upload-header header-wrap">
        <div className="" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <i className="ri-arrow-left-line header-icon" onClick={e => back()} />
          <div className="header-text uploadHeader-text">Account Settings</div>
        </div>
      </div>
      <form>
        <div className="submit-btnWrap">
          <button
            type="submit"
            className="submit-btn"
            id="submit-btn"
            onClick={e => {
              // console.log(formData);
              // handleSubmit();
              e.preventDefault();
              sessionStorage.clear("tags");
            }}
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default SettingsAccount;

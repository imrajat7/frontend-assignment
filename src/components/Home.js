import React from "react";

// Home Component where user will be redirected on successfull login.
// This component Consists of a button which whill logout the user.

function Home() {
  const handleLogout = () => {
    alert("Are you sure ?");
    window.location = "/";
  };
  return (
    <div className="home-container" style={{ textAlign: "center" }}>
      Hello. You are at Home URL.<br></br>
      If you are signed in via facebook/google than you have to logout your
      fb/google account to logout completely.
      <button
        type="button"
        id="logout-button"
        onClick={handleLogout}
        style={{ margin: "20px" }}
      >
        logout
      </button>
    </div>
  );
}

export default Home;

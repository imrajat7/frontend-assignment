import React from "react";

// Home Component where user will be redirected on successfull login.
// This component Consists of a button which whill logout the user.

function Home() {
  const handleLogout = () => {
    alert("Are you sure ?");
    window.location = "/";
  };
  return (
    <div className="home-container">
      Hello. You are at Home URL.
      <button type="button" id="logout-button" onClick={handleLogout}>
        logout
      </button>
    </div>
  );
}

export default Home;

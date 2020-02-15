import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark  p-2">
      <div className="mainContainer">
        <div className="logo">
          <a href="/" className="navbar-brand">
            <img
              src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png"
              alt=""
              width="100px"
            />
          </a>
        </div>
        <div className="search">
          <input type="text" className="" placeholder="Search"/>
          <div className="searchButton">
              <i className="material-icons ">
search
</i>
          </div>
        </div>
        <div className="extras">
          <i className="material-icons">menu</i>

          <i className="material-icons">notifications</i>

          <i className="material-icons">account_circle</i>
        </div>
      </div>
    </nav>
  );
}

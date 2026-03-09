import React from "react";
import Image from "next/image";

import "./navbar.css";

const navbar = () => {
  return (
    <div className="NavbarComponent">
      <div className="NavbarComponent__in">
        <div className="navbar__one">
          {/* <Image src="/bluedate.io.png" alt="logo" width={50} height={50} /> */}
          <h1>bluedate.io</h1>
        </div>
        <div className="navbar__two">
            <button>Join Waiting List</button>
        </div>
      </div>
    </div>
  );
};

export default navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

function Header() {
  return (
    <div>
      <nav className="header">
        <section className="clone">
          <img src="instacopy.png" alt="clone"></img>
        </section>
        <section className="icon">
          {/* <a href="/upload">
          <img src="insta1.png" alt="icon" ></img>
          </a> */}

            <Link className="camera" to="/upload">
              <button>
                <img src="insta1.png" alt="icon" />
              </button>
            </Link>


        </section>
      </nav>
    </div>
  );
}

export default Header;

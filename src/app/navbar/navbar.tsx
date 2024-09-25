import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">Developers.</div>
        <div className="nav-links">
          <Link href={"/"} className="links">
            <h3>Home</h3>
          </Link>
          <Link href={"/courses"} className="links">
            <h3>Courses</h3>
          </Link>
          <Link href={"/apply"} className="links">
            <h3>Apply</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

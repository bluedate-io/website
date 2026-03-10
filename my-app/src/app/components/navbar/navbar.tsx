import Link from "next/link";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="NavbarComponent">
      <div className="NavbarComponent__in">
        <div className="navbar__one">
          <h1>bluedate.io</h1>
        </div>
        <div className="navbar__two">
          <Link href="/join"><button>Join Waiting List</button></Link>
        </div>
      </div>
    </div>
  );
};

export default navbar;

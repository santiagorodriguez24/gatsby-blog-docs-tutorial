import * as React from "react";
import { Link } from "gatsby";

// When you use CSS Modules with Gatsby Your kebab-case class names (nav-links) in your .module.css files will automatically be converted to camel-case variables (navLinks) that you can import in your .js files.
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

// Props destructuring: “Take the object that gets passed into this function, and unpack its pageTitle and children properties into their own variables.”
const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;

import "./ContentLi.css";

import { Link } from "react-router-dom";

export const ContentLi = () => {
  return (
    <>
      <li class="li">
        <Link class="a" to="/">
          Home
        </Link>
      </li>
      <li class="li">
        <Link class="a" to="/AboutUs">
          About Us
        </Link>
      </li>
      <li class="li">
        <Link class="a" to="/ContactUs">
          Contact Us
        </Link>
      </li>
      <li class="li">
        <Link class="a" to="">
          Other Home
        </Link>
      </li>
    </>
  );
};

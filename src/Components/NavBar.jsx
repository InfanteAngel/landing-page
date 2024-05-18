import React from "react";

export const navData = {
  nav1: "Products",
  nav2: "Services",
  nav3: "Contact Us",
  nav4: "Media",
  nav5: "Gallery",
};

export const downArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
);

export const bars = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
)

export default function NavBar(props) {
  const { nav1, nav2, nav3, nav4, nav5 } = props;
  return (
    <>
      <div className="navBar ">
        <div className="nav_wrap container">
          <ul>
            <li className="list-item-logo">
              {" "}
              <h1>WSM</h1>
            </li>
            <li className="list-item">
              <p>{nav1}</p>
              {downArrow}
            </li>
            <li className="list-item">
              <p>{nav2}</p>
              {downArrow}
            </li>
            <li className="list-item">
              <p>{nav3}</p>
            </li>
            <li className="list-item">
              <p>{nav4}</p>
            </li>
            <li className="list-item">
              <p>{nav5}</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb_nav">
        <div className="mb_nav_wrap">
          <ul>
            <li>{bars}</li>
            <li className="list-item-logo">
              {" "}
              <h1>WSM</h1>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

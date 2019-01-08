import React from "react";

export const MenuItem = props => (
  <nav className={"c-menu-item" + (props.active ? " c-menu-item" : null)}>
    <span>{props.children || "Soy un menú."}</span>
  </nav>
);

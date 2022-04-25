import React from "react";
import TypeIt from "typeit-react";

const SuperStrong = ({ children }) => {
  return <strong style={{ fontSize: "80px" }}>{children}</strong>;
};

function Letter(props) {
  return <TypeIt>This will be typed in a `span` element!</TypeIt>;
}

export default Letter;

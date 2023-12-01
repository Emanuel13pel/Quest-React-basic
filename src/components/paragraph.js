import React from "react";

const Paragraph = ({ color, text }) => {
return <p style={{ color: color }}>{text.toUpperCase()}</p>;};

export default Paragraph;
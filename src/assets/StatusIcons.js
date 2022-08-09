import React from 'react';
import { MdOutlineDone } from "react-icons/md";

export const DeliveredIcon = () => {
  return (
    <>
      <MdOutlineDone style={{}} />
      <MdOutlineDone
        style={{ marginLeft: "-0.65rem", marginTop: "0.025rem" }}
      />
    </>
  );
};

export const SeenIcon = () => {
  return (
    <>
      <MdOutlineDone style={{ color: "#53bdeb" }} />
      <MdOutlineDone
        style={{
          color: "#53bdeb",
          marginLeft: "-0.65rem",
          marginTop: "0.025rem",
        }}
      />
    </>
  );
};

import React from "react";
import "./loader.scss";
import { MutatingDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loader-component">
      <MutatingDots
        color="rgb(17, 24, 39)"
        secondaryColor="rgb(17, 24, 39)"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        visible={true}
      />
    </div>
  );
}

import React from "react";
import css from "./picture.module.css";

export default function Picture({ imageSource, description }) {
  return (
    <div>
      <img
        src={imageSource}
        alt={description}
        title={description}
        className={css.picture}
      />
    </div>
  );
}

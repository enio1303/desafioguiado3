import React from "react";
import Position from "./Position";
import Picture from "./Picture";
import Info from "./Info";
import Name from "./Name";
import Percentage from "./Percentage";
import Votes from "./Votes";
import Popularity from "./Popularity";

import css from './candidate.module.css';
import { formatNumber, formatPercentage } from "../helpers/formathelper";

export default function Candidate({ candidate, position }) {
  const { name, votes, id, percentagem, popularity } = candidate;
  const imageSource = `${id}.jpg`;
  return (
    <div className={css.flexRow}>
      <Position>{position}</Position>
      <Picture imageSource={imageSource} description={name} />
      <Info>
        <Name>{name}</Name>
        <Votes>{formatNumber(votes)}</Votes>
        <Percentage>{formatPercentage(percentagem/100)}</Percentage>
        <Popularity value={popularity} />
      </Info>
    </div>
  );
}

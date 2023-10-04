import uniqid from "uniqid";
import Star from "./star";
import React from "react";

const Stars: React.FC<IStarsProps> = ({ count = 0 }) => {
  const notValidRating = !Number.isInteger(count) || count < 1 || count > 5;

  return notValidRating ? null : (
    <ul className="card-body-stars">
      {[...Array(count)].map(() => (
        <Star key={uniqid()}/>
      ))}
    </ul>
  );
}

export default Stars

interface IStarsProps {
  count: number,
}
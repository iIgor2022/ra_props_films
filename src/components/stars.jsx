import uniqid from "uniqid";
import PropTypes from "prop-types";
import Star from "./star";

export default function Stars({ count = 0 }) {
  const notValidRating = !Number.isInteger(count) || count < 1 || count > 5;

  return notValidRating ? null : (
    <ul className="card-body-stars">
      {[...Array(count)].map(() => (
        <Star key={uniqid()}/>
      ))}
    </ul>
  );
}

Stars.propTypes = {
  count: PropTypes.number,
}
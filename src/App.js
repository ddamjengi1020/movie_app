import React from "react";
import propTypes from "prop-types";

const Food = ({ name, rating }) => {
  return (
    <div>
      <h2>I like {name}</h2>
      <h3>rating: {rating}</h3>
    </div>
  );
};

Food.propTypes = {
  name: propTypes.string.isRequired,
  rating: propTypes.number
};

const foodList = [
  {
    id: 1,
    name: "test1"
  },
  {
    id: 2,
    name: "test2",
    rating: 4
  },
  {
    id: 3,
    name: "test3",
    rating: 3
  }
];

const App = () => {
  return (
    <div>
      {foodList.map(el => (
        <Food key={el.id} name={el.name} rating={el.rating} />
      ))}
    </div>
  );
};

export default App;

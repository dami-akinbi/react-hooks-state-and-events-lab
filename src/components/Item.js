import React, { useState } from "react";

function Item({ name, category }) {
  const [toggleCart, setToggleCart] = useState(false);

  function handleItemClick() {
    setToggleCart((toggleCart) => !toggleCart);
    // console.log(event.target.parentNode);
    // event.target.parentNode.classList.add("in-cart");
  }

  return (
    <li className={toggleCart ? `in-cart` : ``}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleItemClick}>
        {toggleCart ? `Remove From Cart` : `Add to Cart`}
      </button>
    </li>
  );
}

export default Item;

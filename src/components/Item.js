import React, {useState} from "react";

function Item({ name, category }) {
  const [isItem, setIsItem] = useState("")

  function handleCart() {
    setIsItem(isItem => isItem ? "" : "in-cart")
  }

  return (
    <li className={isItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{isItem ? "Added" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

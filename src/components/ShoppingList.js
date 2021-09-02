import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [isFiltered, setIsFiltered] = useState('All')

  function handleFilter(event) {
    setIsFiltered(event.target.value)
  }

  const foodToDisplay = items.filter(item => {
    if (isFiltered === "All") {
      return true
    } else {
      return isFiltered === item.category
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

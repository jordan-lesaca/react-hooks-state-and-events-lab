import React from "react";
import Item from "./Item";
import {useState} from 'react'

function ShoppingList({ items }) {

  function handleChange(e){
    setSelectedCategory(e.target.value)
  }

  const [selectedCategory, setSelectedCategory] = useState("All")

  const filtered = items.filter((i) => selectedCategory === "All" ? 
  true : i.category === selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e) => handleChange(e)}  name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filtered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

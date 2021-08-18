import React from "react";
import { useState } from 'react'

function Item({ name, category }) {

  const [attribute, setAttribute] = useState("")

  function clicked(){
      !attribute ? setAttribute("in-cart") : setAttribute("")
  }

  return (
    <li className={attribute}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={clicked}>Add to Cart</button>
    </li>
  );
}

export default Item;

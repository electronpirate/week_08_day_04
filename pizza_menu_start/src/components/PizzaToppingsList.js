import React from 'react';
import './List.css';

const PizzaToppingsList = (props) => {

  const listItems = []

  for (const topping in props.toppings) {
    const item = <li key={topping}>{props.toppings[topping]}</li>
    listItems.push(item);
  }

  return <ul>{listItems}</ul>;



}

export default PizzaToppingsList;

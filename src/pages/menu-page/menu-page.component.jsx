import React from "react";
import { Link } from "react-router-dom";

const MenuPage = (props) => {
  return (
    <div>
      <ul className="list-group">
        <h3>Menu Categories</h3>
        <li>
          <Link to={`${props.match.url}/SS`}>Soups and Salad - (SS)</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/VG`}>Vegetables - (VG)</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/C`}>Ceviche - (C)</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/MP`}>Meat and Poultry - (MP)</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/SF`}>Seafood - (SF)</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/P`}>Paella - (P)</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/SO`}>Side Orders - (SO)</Link>
        </li>
        <li>
          <Link to={`${props.match.url}/DS`}>Desserts - (DS)</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuPage;

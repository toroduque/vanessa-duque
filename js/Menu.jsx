import React from "react";
import { Link } from "react-router-dom";
import preload from "../data.json";

const collections = preload.collections;
const menuColOne = [];
const menuColTwo = [];

for (let i = 0; i < collections.length; i++) {
  if (i < 3) {
    menuColOne.push(
      <li>
        <Link to={collections[i].url}>
          <h2>{collections[i].title}</h2>
        </Link>
      </li>
    );
  } else {
    menuColTwo.push(
      <li>
        <Link to={collections[i].url}>
          <h2>{collections[i].title}</h2>
        </Link>
      </li>
    );
  }
}

const Menu = () => (
  <section className="menu">
    <article className="title">
      <Link to="/">
        <h1>
          Collective perceptions,<br /> social interactions and everyday
          situations
        </h1>
      </Link>
    </article>

    <article className="navbar">
      <ul>{menuColOne}</ul>
      <ul>{menuColTwo}</ul>
    </article>
  </section>
);

export default Menu;

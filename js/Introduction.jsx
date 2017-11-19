import React from "react";
import Menu from "./Menu";
import preload from "../data.json";

const introduction = preload.collections[0];
const introductionText = introduction.description.split("\n").map((item) => (
    <p> {item}<br /></p> ))

const Introduction = () => (
  <section>
    <Menu />
    <div className="introduction">
      <h3>{introduction.title}</h3>
      {introductionText}
    </div>
  </section>
);

export default Introduction;

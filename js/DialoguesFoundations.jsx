import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import preload from "../data.json";

const collection = preload.collections[3];

class DialoguesFoundations extends Component {
  constructor() {
    super();
    this.state = {
      activeCategory: "About",
      aboutText: "Explores multiple ways to relate and engage with everyday denim objects, presenting a series of artifacts with a sense of replications and associated with specific information that is coded by cultural and social references. The collection approaches gestures of the body and how they function as a metaphor for creating alternative dialogues and a language of signs in everyday context."
    };
    this.setCategory = this.setCategory.bind(this);
    this.props = {};
  }

  setCategory(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    return (
      <section className="category-container">
        <h3>{collection.title}</h3>
        <Link to="/">
          <p>BACK</p>
        </Link>
        <p>
          {collection.tag} - {collection.date}
        </p>
        <ul>
          {collection.categories.map((category, index) => (
            <li key={index} onClick={() => this.setCategory(category.name)}>
              <h4>{category.name}</h4>
            </li>
          ))}
        </ul>
        <section>
          {collection.categories.map(category => {
            if(this.state.activeCategory === "About") {
              return(
                <Card
                  title="About"
                  img={" "}
                  description={this.state.aboutText}
                />
              )
            }
            else if (this.state.activeCategory === category.name) {
              return category.images.map(img => (
                <Card
                  title={" "}
                  img={img.url}
                  description={img.description}
                />
              ));
            }
          })}
        </section>
      </section>
    );
  }
}

export default DialoguesFoundations;

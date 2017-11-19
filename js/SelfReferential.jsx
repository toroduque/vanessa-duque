import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import preload from "../data.json";

const collection = preload.collections[1];
const imgTest = `https://images.reverb.com/image/upload/s--shbpUiDn--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1360301822/mpk0ux9htglk6ldgyaxk.jpg`;

class SelfReferential extends Component {
  constructor() {
    super();
    this.state = {
      activeCategory: "The flat the shape and the form"
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
        <section>
          {collection.categories.map(category => (
            <Card
              title={category.name}
              img={category.img}
              description={category.description}
              references={category.references}
            />
          ))}
        </section>
      </section>
    );
  }
}

export default SelfReferential;

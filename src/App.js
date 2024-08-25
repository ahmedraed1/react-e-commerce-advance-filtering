import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

import Categories from "./Sidebar/Category/Category";
import Prices from "./Sidebar/Price/Price";
import Colors from "./Sidebar/Colors/Colors";

function App() {
  const [selectedCategory, setSelectedCategory] = useState({
    category: "",
    color: "",
    company: "",
    newPrice: "",
  });

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleColors = (event) => {
    setSelectedCategory({ ...selectedCategory, color: event.target.value });
    console.log(event.target.value);
  };

  const handleCompanies = (event) => {
    setSelectedCategory({ ...selectedCategory, company: event.target.value });
    console.log(selectedCategory);
  };

  const handlePrices = (event) => {
    setSelectedCategory({ ...selectedCategory, newPrice: event.target.value });
    console.log(selectedCategory);
  };

  const handleCategories = (event) => {
    setSelectedCategory({ ...selectedCategory, category: event.target.value });
    console.log(selectedCategory);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
      // console.log(query);
    }

    // Applying selected filter

    if (selected.category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selected.category
      );
    }

    if (selected.color) {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === selected.color
      );
    }

    if (selected.company) {
      filteredProducts = filteredProducts.filter(
        (product) => product.company === selected.company
      );
    }

    if (selected.newPrice) {
      filteredProducts = filteredProducts.filter(
        (product) => product.newPrice === selected.newPrice
      );
    }

    // From old code , it needs some fixes
    // if (selected) {
    //   filteredProducts = filteredProducts.filter(
    //     ({ category, color, company, newPrice, title }) =>
    //       category === selected ||
    //       color === selected ||
    //       company === selected ||
    //       newPrice === selected ||
    //       title === selected
    //   );
    // }

    return filteredProducts.map(
      ({
        img,
        title,
        star,
        reviews,
        prevPrice,
        newPrice,
        stock,
        color,
        category,
        company,
      }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          status={stock}
          color={color}
          category={category}
          company={company}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar>
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Categories handleCategory={handleCategories} />
        <Prices handlePrice={handlePrices} />
        <Colors handleColor={handleColors} />
      </Sidebar>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended
        handleCompanies={handleCompanies}
        lengthOfProducts={result.length}
      />
      <Products result={result} />
    </>
  );
}

export default App;

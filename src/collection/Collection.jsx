import React from "react";
import CollectionItem from "./CollectionItem";
import "./indexCollection.scss";

const Collection = () => {
  //state for render
  const [collection, setCollection] = React.useState([]);

  // first render
  React.useEffect(() => {
    fetch("https://62ffc85b9350a1e548e65559.mockapi.io/collection")
      .then((res) => res.json())
      .then((json) => {
        setCollection(json);
        console.log(json);
      })
      .catch((err) => {
        alert("Loading Error. Please try again.");
      });
  }, []);

  return (
    <div className="wrapper__collection">
      <h1>My photo collection</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">All</li>
          <li>Mountains</li>
          <li>Sea</li>
          <li>Architecture</li>
          <li>Cities</li>
        </ul>
        <input className="search-input" placeholder="Search ..." />
      </div>
      <div className="content">
        {collection.map((obj) => (
          <CollectionItem name={obj.name} images={obj.photos} />
        ))}
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
};
export default Collection;

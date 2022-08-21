import React from "react";
import CollectionItem from "./CollectionItem";
import "./indexCollection.scss";

const category = [
  { name: "All" },
  { name: "Mountaints" },
  { name: "Sea" },
  { name: "Architecture" },
  { name: "Cities" },
];

const Collection = () => {
  //state for render
  const [collection, setCollection] = React.useState([]);
  // searchValue
  const [searchValue, setSearchValue] = React.useState("");
  //state fro category
  const [categoryId, setCategoryId] = React.useState(0);
  // state for loading
  const [isloading, setIsLoading] = React.useState(true);
  // state for pagination
  const [page, setPage] = React.useState(1);

  // first render
  React.useEffect(() => {
    setIsLoading(true);
    //category
    const category = categoryId ? `category=${categoryId}` : "";
    fetch(
      `https://62ffc85b9350a1e548e65559.mockapi.io/collection?page=${page}&limit=2&${category}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollection(json);
        // console.log(json);
      })
      .catch((err) => {
        alert("Loading Error. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryId, page]);

  // search Value on Change
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper__collection">
      <h1>My photo collection</h1>
      <div className="top">
        <ul className="tags">
          {/* render all categories */}
          {category.map((obj, i) => (
            <li
              onClick={() => setCategoryId(i)}
              className={categoryId === i ? "active" : ""}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={onChangeSearchValue}
          className="search-input"
          placeholder="Search ..."
        />
      </div>
      <div className="content">
        {isloading ? (
          <h2>Loading data ...</h2>
        ) : (
          collection
            .filter((obj) => {
              const name = obj.name.toLowerCase();
              if (name.includes(searchValue.toLowerCase())) {
                return true;
              }
            })
            .map((obj) => (
              <CollectionItem
                key={obj.id}
                name={obj.name}
                images={obj.photos}
              />
            ))
        )}
      </div>
      <ul className="pagination">
        {[...Array(4)].map((_, i) => (
          <li
            key={i}
            className={page === i + 1 ? "active" : ""}
            onClick={() => setPage(i)}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Collection;

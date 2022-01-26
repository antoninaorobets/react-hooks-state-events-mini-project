import React from "react";

function CategoryFilter({ categories, filterBy, onCategoryClik }) {


  function selected (category) { return <button className="selected" onClick={onCategoryClik} key={category}>{category}</button> }
  function notSelected (category){ return <button onClick={onCategoryClik} key={category}>{category}</button> }

  let categoriesList
  if (filterBy === "All") {
    categoriesList = categories.map((category) =>  selected(category) )
  }
  else {
    categoriesList = categories.map((category) => {
      if (filterBy === category) {return selected(category) }
      else {return notSelected(category) }
    })
}
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesList}
    </div>
  );
}

export default CategoryFilter;

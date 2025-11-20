import React from "react";

function CategoryFilter({ categories, selected, onSelectCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat) => (
        <button
          key={cat}
          className={cat === selected ? "selected" : ""}
          onClick={() => onSelectCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

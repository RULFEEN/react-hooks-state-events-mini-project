import React from "react";

function CategoryFilter({Categories, filter, setFilter}) {

  
  function handleFilter(e) {
    setFilter((filter) => e.target.value);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {Categories.map((category, index) => {
        return <button 
                  key={index}
                  className={filter === category ? "selected" : ""}
                  onClick={handleFilter}
                  value={category}>
                    {category}
                  </button>
      })}
    </div>
  );
}

export default CategoryFilter;

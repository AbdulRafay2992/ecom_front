import React, { useState } from 'react';

const SubCategory = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  let category = {
    id: 1, name: "Electronics", subcategory: [
      {
        id: 4, name: "Mobiles", subcategory: [
          { id: 5, name: "VivoY90", subcategory: [] },
          { id: 6, name: "Samsung Galaxy", subcategory: [] }
        ]
      },
      { id: 3, name: "Laptops", subcategory: [] }
    ]
  }
  function toggle_display() {
    setIsExpanded(!isExpanded)
  }
  function add_new(parent_id) {

  }
  let list = category.subcategory.map((cat) => {
    if (cat.subcategory.length > 0) {
      return (
        <>
          <div>
            <span onClick={toggle_display}>{(isExpanded) ? "-" : "+"}</span>&nbsp;
            {cat.name}
          </div>
          <li>
            
            <span key={cat.id}>{cat.name}</span>
            <button onClick={() => add_new(cat.id)}><b>+</b></button>
          </li>
        </>

      )
    }
    else {
      return (
        <li>
          <span key={cat.id}>{cat.name}</span>
          <button><b>+</b></button>
        </li>
      )
    }
  })
  const toggleList = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <ul>
      {list}
    </ul>
    // <div>
    //   <button onClick={toggleList}>
    //     {isExpanded ? 'Collapse List' : 'Expand List'}
    //   </button>
    //   {isExpanded && (
    //     <ul>
    //       <li>Item 1</li>
    //       <li>Item 2</li>
    //       <li>Item 3</li>
    //     </ul>
    //   )}
    // </div>
  );
}

export default SubCategory;

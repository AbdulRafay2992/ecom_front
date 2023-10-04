import React, { useState } from 'react';

const SubCategory = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [category, setCategory] = useState(props.category);

  let a = {
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

  function toggle_display(event) {
    let element=event.target.parent
    setIsExpanded(!isExpanded)
  }

  function add_new(parent_id) {

  }

  let children = category.subcategory.map((cat) => {
    return (
      <li>
        &nbsp;&nbsp;&nbsp;&nbsp;<SubCategory category={cat} />
      </li>
    )
  })

  let no_child = 
    <li>
      {category.name}
      &nbsp;&nbsp;<button>add</button>
    </li>
  let with_children =
    <li>
      <span onClick={(event)=>toggle_display(event)}>
        {isExpanded ? '-' : '+'}
      </span>
      &nbsp;{category.name}
      &nbsp;&nbsp;<button>add</button>
    </li>

  return (
    <ul>
      {(category.subcategory.length == 0) ? no_child : with_children}
      {children}
    </ul>
  );
}

export default SubCategory;

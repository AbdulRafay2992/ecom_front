import React, { useState, useContext } from 'react';
import { postData } from '../Methods';
import Context from './Context';

const SubCategory = (props) => {
  const [newCategory, setnewCategory] = useState()
  const [isExpanded, setIsExpanded] = useState(false);
  const [UI, setUI] = useState(<button onClick={saveCancel_UI}>Add</button>)

  const { isEditing, setisEditing } = useContext(Context);

  const category = props.category;
  const ID = props.id
  const setcategories = props.setcategories;

  const AddUI = <button onClick={saveCancel_UI}>Add</button>

  function saveCancel_UI() {
    setisEditing((isEditing) => {
      if (!isEditing) {
        setUI(
          <>
            <input type="text" onChange={(event) => setnewCategory(event.target.value)} />
            <button onClick={save}>Save</button>
            <button onClick={cancel}>Cancel</button>
          </>);
      }
      return true;
    })
  }


  function save() {
    if (!isEditing) {
      setnewCategory((newCategory) => {
        postData('addcategory/', { 'name': newCategory, 'parent_category': ID }, setcategories);
        return;
      });
      setUI(AddUI)
      setisEditing(false)
    }
  }
  function cancel() {
    if (!isEditing) {
      setUI(AddUI)
      setisEditing(false)
    }
  }

  function toggle_display() {
    setIsExpanded(!isExpanded)
  }

  const expand_reduce = {
    display: isExpanded ? 'block' : 'none'
  };

  let no_child =
    <li key={0}>
      {category.name}
      &nbsp;&nbsp;&nbsp;&nbsp;
      {UI}
    </li>
  let with_children =
    <li key={0}>
      <span onClick={(event) => toggle_display(event)}>
        {isExpanded ? <span>&#8595;</span> : <span>&#8594;</span>}
      </span>
      {category.name}
      &nbsp;&nbsp;&nbsp;&nbsp;
      {UI}
    </li>

  return (
    <ul style={props.style}>
      {category.subcategory.length === 0 ? no_child : (
        <>
          {with_children}
          {category.subcategory.map((cat, index) => {
            return (
              <li key={index}>
                <SubCategory id={cat.id} category={cat} style={expand_reduce} setcategories={setcategories} />
              </li>
            )
          })}
        </>
      )}
    </ul>
  );
}

export default SubCategory;

import SubCategory from "./SubCategory";
import { categories_tree, fetchData } from "../Methods";
import { useState, useEffect } from "react";
import ContextProvider from "./ContextProvider";

function Category() {

  const [categories, setCategory] = useState([])
  useEffect(() => {
    fetchData('/getcategories',setCategories)
  }, [])

  function setCategories(data) {
    setCategory(categories_tree(data));
    setCategory((prevNewCategory) => {
      return prevNewCategory;
    });
  }

  return (
    <ContextProvider>
      {
        categories.map((categorie, index) => {
          return (
            <SubCategory key={index} id={categorie.id} category={categorie} setcategories={setCategories} />
          )
        })
      }
    </ContextProvider>
  )
}
export default Category;
import { Link } from "react-router-dom";
import {useState,useEffect} from 'react';
import { fetchData } from "../Methods";

const Products = () => {

  const [categories, setCategory] = useState([])
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchData('/getproducts', setProducts)
    fetchData('/getcategories', setCategory)
  }, [])

  const tableRows = products.map((record) => (
    <tr key={record.id}>
      <td>{categories.find(item => item.id === record.category_id).name}</td>
      <td><Link to={window.location.origin + "/product/" + record.id}>{record.name}</Link></td>
      <td>{record.description}</td>
      <td>Yes</td>
    </tr>
  ));

  return (
    <div className="your-component">
      <h1>Products</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Description</th>
            <th>Variation</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>

      <div className="add-row">
        <input type="text" placeholder="Name" />
        <select>
          <option>-- Select --</option>
          {
            categories.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))
          }
        </select>
        <button className="add-button">Add</button>
      </div>
    </div>
  );
};
export default Products;
import React from 'react';
import { useEffect, useState } from 'react';
import { fetchData, postData } from '../Methods'

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [inputData, setinputData] = useState();
    useEffect(() => {
        fetchData('/get_categories', setCategories)
    }, []);
    function add_category() {
        if(inputData!=null){
            if (inputData.name!=='' && inputData.parent>-1) {
                postData('addcategory/',inputData,setCategories)
                return
            }
            alert("Enter correct data")
        }
    }
    return (
        <div className="your-component">
            <h1>Categories</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parent</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>{category.parent_category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <label>Name: </label>
                <input type="text" name="name" onChange={(event)=>setinputData({ ...inputData, name: event.target.value })} />
                <label>Category: </label>
                <select name='category' onChange={(event)=>setinputData({ ...inputData, parent: event.target.value })}>
                    <option>-- Select --</option>
                    <option value={0}>New Category</option>
                    {
                        categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))
                    }
                </select>
                <button onClick={(add_category)}>Save</button>
            </div>
        </div>
    );
};
export default Category;
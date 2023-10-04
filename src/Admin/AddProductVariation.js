const ProductVariation = () => {
    const data = [
      {
        id: 1,
        product_id: 1,
        name: 'Laptop',
        description: 'Powerful laptop with high-resolution display.',
      },
      {
        id: 2,
        category: 0,
        name: 'Smartphone',
        description: 'The latest smartphone with a stunning camera.',
      },
      {
        id: 3,
        category: 0,
        name: 'Headphones',
        description: 'Wireless headphones for an immersive music experience.',
      },
      {
        id: 4,
        category: 0,
        name: 'Coffee Maker',
        description: 'A coffee maker that brews your favorite coffee in minutes.',
      },
      {
        id: 5,
        category: 0,
        name: 'Hiking Backpack',
        description: 'Durable backpack for all your outdoor adventures.',
      },
      {
        id: 6,
        category: 0,
        name: 'Gaming Console',
        description: 'Next-gen gaming console for a superior gaming experience.',
      },
      {
        id: 7,
        category: 0,
        name: 'Digital Camera',
        description: 'High-quality digital camera for photography enthusiasts.',
      },
      {
        id: 8,
        category: 0,
        name: 'Fitness Tracker',
        description: 'Stay active and monitor your fitness with this tracker.',
      }
    ];
    
    const categories=["Electronics","Clothes","Toys"];
    
    const tableRows = data.map((record) => (
        <tr key={record.id}>
            <td>{record.id}</td>
            <td>{record.name}</td>
            <td>{record.category}</td>
            <td>{record.description}</td>
            <td>
                <button className="edit-button">
                    <div class="edit-icon"></div>
                </button>
                <button className="delete-button">
                    <div class="delete-icon"></div>
                </button>
            </td>
        </tr>
    ));
    const categoriez=categories.map((category) => (
        <option>{category}</option>
    ));

    return (
        <div className="your-component">
            <h1>Products</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>{tableRows}</tbody>
            </table>
        
            {/* Add the new records input row */}
            <div className="add-row">
                <input type="text" placeholder="Name" />
                <select>
                    <option>-- Select --</option>
                    {categoriez}
                </select>
                <button className="add-button">Add</button>
            </div>
        </div>
    );
};
export default ProductVariation;
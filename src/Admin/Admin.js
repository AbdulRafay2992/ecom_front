import Category from './Category/Category';
import Products from './Products/Products';
import Attributes from './Attributes/Attributes';
import Product from './Product/Product';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const Admin = () => {
  return (
    <>
      <div>
        <span className="h-item">
          <a href='/categories'>Categories</a>
        </span>
        <span className="h-item">
          <a href='/products'>products</a>
        </span>
        <span className="h-item">
          <a href='/attributes'>attributes</a>
        </span>
        <span className="h-item">
          <a href='/product/1'>product</a>
        </span>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<h1>HELLO Main Page</h1>} />
          <Route path="categories" element={<Category />} />
          <Route path="products/" element={<Products />} />
          <Route path="attributes" element={<Attributes />} />
          <Route path="product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Admin;
function Categories({data}) {
    return (
        <div className="categories">
            <nav className="product-categories">
                <ul>
                {data.map((item,index) => (
                    <li key={index}><a href="#">{item}</a></li>
                ))}  
                </ul>
            </nav>
        </div>
    );
}
export default Categories;

export default function Filters({data}) {
    return (
        <div className="filter_categories">
            {data.map((category, cat_index) => {
            return (
                <div key={cat_index} id={"filter-categories"+cat_index} className="filter_category">
                    <h3>{category.title}</h3>
                {
                    category.types.map((item, item_index) =>(
                        <div key={item_index} id={"filter-category"+item_index}>
                            <input type="checkbox" value={item} />{item}
                        </div>
                    ))
                }
                </div>
            )
        })}
        </div>
    );
}
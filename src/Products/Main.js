import Filters from "./Filter";
import Products from "./Products";

export default function Main() {
    let filter_data=[
        {title:'Size',types:[
            'small','large','Extra large'
        ]},
        {title:'Color',types:[
            'Red','Orange','Green','blue'
        ]},
        {title:'Brand',types:[
            'Adidas','Bonvita','Gucci'
        ]},
    ];
    return (
        <div className="main-body">
            <Filters data={filter_data} />
            <Products />
        </div>
    );
}
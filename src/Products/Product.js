export default function Product({data}) {
    return (
        <div className="product">
            <div className="img-cont">
                <img className="prod-img" src={data.image} alt={data.description} />                        
            </div>
            <div className="prod-title">{data.description.split(' ')[0]+' '+data.description.split(' ')[1]}</div>
            <div className="prod-desc">{data.description}</div>
            <div className="prod-price">{data.price}</div>
        </div>
    );
}
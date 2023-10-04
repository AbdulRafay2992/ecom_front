import SubCategory from "./SubCategory";

function Category() {
    let category = {
        id: 1, name: "Electronics", subcategory: [
            {
                id: 6, name: "Mobiles", subcategory: [
                    { id: 7, name: "VivoY90", subcategory: [
                        { id: 9, name: "V1", subcategory: [
                            { id: 10, name: "V1_1", subcategory: [] }
                        ] }
                    ] },
                    { id: 8, name: "Samsung Galaxy", subcategory: [] }
                ]
            },
            { id: 3, name: "Laptops", subcategory: [] },
            { id: 4, name: "Cameras", subcategory: [] },
            { id: 5, name: "LEDs", subcategory: [] },
        ]
    }
    return (<SubCategory category={category} />)
}
export default Category;
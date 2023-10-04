import render from "@testing-library/react";
import Product from "./Product";

describe(Product, () => {
    it("data provided to product object is correct", () => {
        const {} = render(<Product data={{
            "image": "https://static-01.daraz.pk/p/89a2a2c36e0cd49060b44a8e129a5f67.jpg",
            "description": "T Shirt for women n girls Summer collection in stylish New BEARS printed round neck half sleeves T shirt",
            "price": "Rs. 354"
        }}/>)
    })
})
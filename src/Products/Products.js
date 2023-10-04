import Product from "./Product";

export default function Products({data}) {
    let prod_data=[
        {
            "image": "https://static-01.daraz.pk/p/89a2a2c36e0cd49060b44a8e129a5f67.jpg",
            "description": "T Shirt for women n girls Summer collection in stylish New BEARS printed round neck half sleeves T shirt",
            "price": "Rs. 354"
        },
        {
            "image": "https://static-01.daraz.pk/p/4c144f32553c6b08eef44088664e0a2c.jpg",
            "description": "lonely Kitty Printed T-Shirts for Girls & Women's",
            "price": "Rs. 342"
        },
        {
            "image": "https://static-01.daraz.pk/p/ae2cbe5507cb837e2827b1c0393d4ac1.jpg",
            "description": "Designer Fully Heavy Embroidered Flower Stitched Silk Maxi With Embroidered Koti for Girls/Designer Maxi / New Long Style Maxi /Stylish Maxi / Ready to Wear /Wedding Dress For Girls/Ladies/Women Article Dec-002",
            "price": "Rs. 1,473"
        },
        {
            "image": "https://static-01.daraz.pk/p/7bb2b18e30b3feb1e21cd8c8695ab990.jpg",
            "description": "T Shirt For Ladies Women & Girls Mickey mouse Printed Round Neck half Sleeves Best Quality For Casual Wear Cotton",
            "price": "Rs. 377"
        },
        {
            "image": "https://static-01.daraz.pk/p/4f27b8ca9b1465d29738f4c8cd19285d.jpg",
            "description": "New chunri 2 piece",
            "price": "Rs. 940"
        },
        {
            "image": "https://static-01.daraz.pk/p/a7c72d6a49f6381f2fc34cf5ed4a27ba.jpg",
            "description": "T Shirt for women n girls Summer collection in stylish new CUTE printed round neck half sleeves T shirt",
            "price": "Rs. 373"
        },
        {
            "image": "https://static-01.daraz.pk/p/a2ae48f7a207fb674bbc07306281e111.jpg",
            "description": "Pack OF 3 Printed T Shirts For Girls & Women",
            "price": "Rs. 959"
        },
        {
            "image": "https://static-01.daraz.pk/p/914b0a3815cdd1ea41f5f8b5991cda41.jpg",
            "description": "Los Angeles California Cotton Half Sleeves O Neck T Shirt For Women",
            "price": "Rs. 484"
        },
        {
            "image": "https://static-01.daraz.pk/p/5368653d3f1a7a04365a2343045eba2f.jpg",
            "description": "Trendy Arabic lawn printed 2Pc High Quality suits for Women's",
            "price": "Rs. 959"
        },
        {
            "image": "https://static-01.daraz.pk/p/ec5fbc46f54f188ade7f8c1b375e5516.jpg",
            "description": "Free Bear Printed Summer Tracksuit For Women",
            "price": "Rs. 1,163"
        },
        {
            "image": "https://static-01.daraz.pk/p/e9b9b40bedac54c9e0eec864212bff12.jpg",
            "description": "Top Trending And Stylish Designer Lace /Net Maxi For Women 2021",
            "price": "Rs. 1,099"
        },
        {
            "image": "https://static-01.daraz.pk/p/9d898e893083061ce59b82e12a275810.jpg",
            "description": "Grey Butterfly Printed Summer Tracksuit For Women",
            "price": "Rs. 1,163"
        },
        {
            "image": "https://static-01.daraz.pk/p/4344a323fca487576e3d5a27d4b6a1b2.jpg",
            "description": "lawn 2 piece suit stitched sale",
            "price": "Rs. 1,055"
        },
        {
            "image": "https://static-01.daraz.pk/p/f9c238059ff0abd3b527eeb305a26138.jpg",
            "description": "2 Pc Stitched Embrioded Silk Dress for Girls (Shirt & Trouser) - Multicolor Embroidered Suit 2 pc for Girls/ Wedding Wear by Fabricia",
            "price": "Rs. 1,599"
        },
        {
            "image": "https://static-01.daraz.pk/p/0229ddeb320be40625d8befc7c1953da.jpg",
            "description": "Blackpink Printed Tracksuit Summer Cotton Half Sleeves O Neck Trouser & Tshirt For Women & Girls",
            "price": "Rs. 920"
        },
        {
            "image": "https://static-01.daraz.pk/p/e18a67330aaa6981f4d0c885acfaff15.jpg",
            "description": "Libaas Hub Stitched Block Print 2pc Suit For Women & Girls",
            "price": "Rs. 959"
        },
        {
            "image": "https://static-01.daraz.pk/p/802ba056f2d82b21d746a7a77845fbbe.jpg",
            "description": "Tracksuit Black Heart Shape Printed Summer t-shirt and trouser for girls and women",
            "price": "Rs. 949"
        },
        {
            "image": "https://static-01.daraz.pk/p/eebaf07c47f8a000d59beadaa9f6299d.jpg",
            "description": "2 PC Heavy Flower Embrioded Linen Stitched Readymade Shirt & Trouser for Girls - Multicolor Dress with Open Picture by Fabricia",
            "price": "Rs. 1,499"
        },
        {
            "image": "https://static-01.daraz.pk/p/6cf060e57bef4acbe1048c004be72208.jpg",
            "description": "The Vintage Clothing black premium quality full sleeves T shirt top for women",
            "price": "Rs. 399"
        },
        {
            "image": "https://static-01.daraz.pk/p/f04f84e49f17c224232c4aa6d27a24e8.jpg",
            "description": "Oversized Womens Tshirts Dropped Shoulder Short Sleeve Tops Summer New Korean Style Loose Fit T-shirt",
            "price": "Rs. 685"
        },
        {
            "image": "https://static-01.daraz.pk/p/a8be939677c5bcb677c8d27237b26da0.jpg",
            "description": "Black BTS Printed Full Sleeves T-Shirt and Trouser for Girls and Women",
            "price": "Rs. 1,249"
        },
        {
            "image": "https://static-01.daraz.pk/p/e550ab3b1ab5bc7adece6ac0208a870e.jpg",
            "description": "Pink BTS Signature Printed T-Shirt and a black Trouser For Girls and Women",
            "price": "Rs. 1,099"
        },
        {
            "image": "https://static-01.daraz.pk/p/7d5c69db5208ef9942f56b3899e7cfb9.jpg",
            "description": "Pack of 2 BTS Printed Summer cotton T-shirt for girls and women",
            "price": "Rs. 849"
        },
        {
            "image": "https://static-01.daraz.pk/p/5921690049995534a30a1134f20e05bf.jpg",
            "description": "Black BTS Signature Printed T-Shirt and a trouser For Girls and women",
            "price": "Rs. 899"
        },
        {
            "image": "https://static-01.daraz.pk/p/356138631750bba995a7c0127de361d6.jpg",
            "description": "Western Style 3 Piece Stitched Dress/ Artical Zebra Dress for Women/ Girls",
            "price": "Rs. 1,399"
        },
        {
            "image": "https://static-01.daraz.pk/p/744c61a5122a4826d9c73b5f04bcd82d.jpg",
            "description": "2 PC Stitched Stylish Gala (Shirt & Trouser) Linen Dress for Girls & Women - Multicolor by Fabricia",
            "price": "Rs. 1,163"
        },
        {
            "image": "https://static-01.daraz.pk/p/c2dee6b1cf42c60ceb581dd1ce82074b.jpg",
            "description": "Pink Butterfly and stars Printed T-Shirt and Black Trouser for Girls and Women",
            "price": "Rs. 999"
        },
        {
            "image": "https://static-01.daraz.pk/p/d17c3af6c5091c23a0e5b1d2e33ada7a.jpg",
            "description": "Stitched Long Cut Maxi Dress For Girls With Trouser (Two Piece Suit) Maxi Dresses For Women",
            "price": "Rs. 1,357"
        },
        {
            "image": "https://static-01.daraz.pk/p/0bc7aa0e11ace4113d9eaba57e52649e.jpg",
            "description": "The Vintage Clothing white premium quality full sleeves T shirt top for women",
            "price": "Rs. 399"
        },
        {
            "image": "https://static-01.daraz.pk/p/68062e915d245bfe68c39dd90eff2152.jpg",
            "description": "The Vintage Clothing black premium quality T shirt top for women",
            "price": "Rs. 350"
        },
        {
            "image": "https://static-01.daraz.pk/p/76e82d39f2a1a4605ca105bae296bd31.jpg",
            "description": "Black Cartoon Printed T-Shirt and a Trouser For Girls and Women",
            "price": "Rs. 899"
        },
        {
            "image": "https://static-01.daraz.pk/p/9a4da228381b15d09ca8bc546c1b3da4.jpg",
            "description": "Generation Sindhi Damask Dholni Koti Dress for girls/ women",
            "price": "Rs. 1,608"
        },
        {
            "image": "https://static-01.daraz.pk/p/479fd567a5d7afefd6751c8b351828e1.png",
            "description": "1 PC Unstitched | Poly Satin Shirt",
            "price": "Rs. 1,499"
        },
        {
            "image": "https://static-01.daraz.pk/p/29443f972a06c50a2b87476e60410a70.jpg",
            "description": "Safwa 1 Piece Stitched Suit For Women Kurti For Girls Printed Shirt Lawn Pret",
            "price": "Rs. 2,359"
        },
        {
            "image": "https://static-01.daraz.pk/p/c682146a415c3feb5f8df1fc9fb2195c.png",
            "description": "2 PC Unstitched | Embroidered Cambric Shirt + Trouser",
            "price": "Rs. 2,999"
        },
        {
            "image": "https://static-01.daraz.pk/p/308d61cb94df309ecc2ea0d07c4da46a.png",
            "description": "1 PC Unstitched | Embroidered Lawn Shirt",
            "price": "Rs. 1,799"
        },
        {
            "image": "https://static-01.daraz.pk/p/e6c3533ec55e708ae09294a2fcf866b4.jpg",
            "description": "Safwa 1 Piece Unstitched Kurti For Girls Embroidered Shirt For Women Lawn Pret",
            "price": "Rs. 2,287"
        },
        {
            "image": "https://static-01.daraz.pk/p/3a8f045c40dc5179fbb10523e82cb8ce.jpg",
            "description": "DHANAK - Trousers for Women in Cotton (S-XXL) - BTL01 - Black & White",
            "price": "Rs. 720"
        },
        {
            "image": "https://static-01.daraz.pk/p/2b75e60588f41327f51b10f7ab439e70.jpg",
            "description": "3 Pc Stitched Chiffon Sareee (Blouse Petticoat & 7 Yard Stitched Ready Made Sareee for women Wedding Wear New Fashion by Fabricia",
            "price": "Rs. 1,842"
        },
        {
            "image": "https://static-01.daraz.pk/p/8374375566d36dc4fdf22f1696d1e73c.jpg",
            "description": "Pack of 2 - Bra Extenders - Elastic 2 Hook Soft Bra Extension (SKIN & BLACK)",
            "price": "Rs. 104"
        }
    ];

    return (
        <div className="products">
            {
                prod_data.map((prod)=>{
                    return <Product data={prod} />
                })
            }
        </div>
    );
}
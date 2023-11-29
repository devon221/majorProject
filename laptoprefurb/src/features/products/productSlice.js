import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import img1 from "../../components/image2.jpeg"
import img2 from "../../components/image3.jpeg"
import img3 from "../../components/image4.jpeg"
const initialState = {
  items: [],
  status: null,
};

// data fetching
export const productFetching = createAsyncThunk(
  "products/productFetching ",
  async () => {
    const res = await axios.get(
      "https://eager-sable-airedale.glitch.me/products"
    );
    return [ {
      "id": 1,
      "name": "Dell Inspiron 15",
      "description": "refurbished",
      "price": 79900.99,
      "link" : "https://www.amazon.in/Refurbished-Dell-Inspiron-Webcam-Win-10/dp/B0CHVNLYQ7/ref=sr_1_4?crid=3DO9T543Q20T1&keywords=dell+inspiron+refurbished&qid=1701198080&sprefix=dell+inspiron+refur%2Caps%2C284&sr=8-4",
      "image":img1
  
    },
    {
      "id": 2,
      "name": "HP Pavilion x360",
      "description": "refurbished",
      "price": 64900.99,
      "link" : "https://www.amazon.in/Refurbished-HP-Pavilion-Touchscreen-Graphics/dp/B0CKZCRW5N/ref=sr_1_1?crid=1Z5QRVZBZPZ8D&keywords=HP+Pavilion+x360+refurbished&qid=1701198138&sprefix=hp+pavilion+x360+refurbished%2Caps%2C245&sr=8-1",
      "image": img2
    },
    {
      "id": 3,
      "name": "Lenovo ThinkPad T480",
      "description": "refurbished",
      "price": 33990.99,
      "link" : "https://www.amazon.in/Refurbished-Lenovo-ThinkPad-Touchscreen-Bluetooth/dp/B0CBJZWJQL/ref=sr_1_3?crid=15A236T1KCWEK&keywords=Lenovo+ThinkPad+T480&qid=1701198771&sprefix=lenovo+thinkpad+t480%2Caps%2C236&sr=8-3",
      "image": img3
    },
    {
      "id": 4,
      "name": "Asus VivoBook S14",
      "description": "refurbished",
      "price": 40222.99,
      "link" : "https://www.amazon.in/ASUS-VivoBook-14-0-inch-i5-10210U-S433FL-EB167TS/dp/B09BP4JPJF/ref=sr_1_8?crid=15R3V354XAE9O&keywords=Asus+VivoBook+S14&qid=1701198804&sprefix=asus+vivobook+s14%2Caps%2C231&sr=8-8",
      "image":img1
    },
    {
      "id": 5,
      "name": "Acer Predator Helios 300",
      "description": "refurbished",
      "price": 45966.99,
      "link" : "https://www.amazon.in/Refurbished-Acer-Predator-Processor-PHN16-71/dp/B0CC5MZGW6/ref=sr_1_3?crid=19SQXY81GKN6Y&keywords=Acer+Predator+Helios+300+refurbished&qid=1701199502&sprefix=acer+predator+helios+300+refurbishe%2Caps%2C212&sr=8-3",
      "image": img2
    },
    {
      "id": 6,
      "name": "Apple MacBook Air",
      "description": "refurbished",
      "price": 51886.99,
      "link" : "https://www.amazon.in/2022-Apple-MacBook-Laptop-chip/dp/B0B3BMKMGP/ref=sr_1_4?crid=2OVBVGOOTFRKL&keywords=Apple+MacBook+Air+refurbished&qid=1701199544&sprefix=apple+macbook+air+refurbished%2Caps%2C206&sr=8-4",
      "image":img3
    },
    {
      "id": 7,
      "name": "Microsoft Surface Laptop 4",
      "description": "new",
      "price": 90000.99,
      "link" : "https://www.amazon.in/Microsoft-Surface-Laptop-i5-1135G7-5AI-00121/dp/B0B1DTBVKW/ref=sr_1_3?crid=2VPEK6MM85IR1&keywords=Microsoft+Surface+Laptop+4&qid=1701199594&sprefix=microsoft+surface+laptop+4%2Caps%2C210&sr=8-3",
      "image":img2
    },
    {
      "id": 8,
      "name": "Dell XPS 13",
      "description": "new",
      "price": 20990.99,
      "link" : "https://www.amazon.in/Dell-Generation-Corei5-1021U-Windows-Laptop/dp/B07SGD54KK/ref=sr_1_3?crid=3EVD6PDR8PEK3&keywords=Dell+XPS+13&qid=1701199643&sprefix=dell+xps+13%2Caps%2C209&sr=8-3",
      "image":img1
    },
    {
      "id": 9,
      "name": "HP Envy 13",
      "description": "new",
      "price": 20099.99,
      "link" : "https://www.amazon.in/HP-Gorilla-Laptop-Graphics-13-ay1062AU/dp/B0B5DK2LDP/ref=sr_1_2?crid=3NLY2WMIHKAB4&keywords=HP+Envy+13&qid=1701199673&sprefix=hp+envy+13%2Caps%2C212&sr=8-2",
      "image":img3
    },
    {
      "id": 10,
      "name": "Lenovo Legion 5",
      "description": "new",
      "price": 111299.99,
      "link" : "https://www.amazon.in/Lenovo-Legion-Intel-Core-10th/dp/B09Z2R77Z1/ref=sr_1_4?crid=3HPI30GXYTO4O&keywords=Lenovo+Legion+5&qid=1701199695&sprefix=lenovo+legion+5%2Caps%2C223&sr=8-4",
      "image": img1
    },
    {
      "id": 11,
      "name": "Asus ROG Zephyrus G14",
      "description": "new",
      "price": 240699.99,
      "link" : "https://www.amazon.in/ASUS-Zephyrus-Battery-Windows-GA402XZ-N2020WS/dp/B0C4TX5R12/ref=sr_1_3?crid=10R6GFVGUBKJZ&keywords=Asus+ROG+Zephyrus+G14&qid=1701199722&sprefix=asus+rog+zephyrus+g14%2Caps%2C228&sr=8-3",
      "image": img2
    },
    {
      "id": 12,
      "name": "Acer Aspire 5",
      "description": "new",
      "price": 37000.99,
      "link" : "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3MDQxMzEwODEzNjQ2OTY6MTcwMTE5OTc0NjpzcF9hdGY6MzAwMDE2NjQzMzg3MjMyOjowOjo&url=%2FAcer-Premium-Windows-AL15-41-Display%2Fdp%2FB0CB7S1RTX%2Fref%3Dsr_1_2_sspa%3Fcrid%3D3QOTQFGLA778N%26keywords%3DAcer%2BAspire%2B5%26qid%3D1701199746%26sprefix%3Dacer%2Baspire%2B5%252Caps%252C216%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      "image":img3
    },
    {
      "id": 13,
      "name": "Apple MacBook Pro 16-inch",
      "description": "new",
      "price": 132000.99,
      "link" : "https://www.amazon.in/Apple-MacBook-15-inch-10%E2%80%91core-Unified/dp/B0C75YN898/ref=sr_1_6?crid=BWJ6OT2F8I1I&keywords=Apple+MacBook+Pro+16-inch&qid=1701199781&sprefix=apple+macbook+pro+16-inch%2Caps%2C215&sr=8-6",
      "image": img2
    }, 
    {
      "id": 15,
      "name": "Samsung Galaxy Book Pro",
      "description": "new",
      "price": 179000.99,
      "link" : "https://www.amazon.in/Samsung-40-62cm-Touchscreen-Graphite-NP960QFG-KA3IN/dp/B0BS9GT77Q/ref=sr_1_3?crid=VHYEFXJP6IH6&keywords=Samsung+Galaxy+Book+Pro&qid=1701199857&sprefix=samsung+galaxy+book+pro%2Caps%2C215&sr=8-3",
      "image":img2
    }];
  }
);
/** 
export const productFetching = [
  {
    "id": 1,
    "name": "Dell Inspiron 15",
    "description": "Powerful laptop with Intel Core i5 processor and 8GB RAM",
    "price": 799.99,
    "image":"https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    "category": "refurbished"
  },
  {
    "id": 2,
    "name": "HP Pavilion x360",
    "description": "Convertible laptop with touch screen and AMD Ryzen 5",
    "price": 649.99,
    "image": "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    "category": "refurbished"
  },
  {
    "id": 3,
    "name": "Lenovo ThinkPad T480",
    "description": "Business-class laptop with Intel Core i7 and 16GB RAM",
    "price": 1099.99,
    "image": "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    "category": "refurbished"
  },
  {
    "id": 4,
    "name": "Asus VivoBook S14",
    "description": "Slim and lightweight laptop with Intel Core i3 processor",
    "price": 549.99,
    "image":"https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    "category": "refurbished"
  },
  {
    "id": 5,
    "name": "Acer Predator Helios 300",
    "description": "Gaming laptop with NVIDIA GeForce GTX 1660 Ti",
    "price": 1299.99,
    "image": "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    "category": "refurbished"
  },
  {
    "id": 6,
    "name": "Apple MacBook Air",
    "description": "Ultra-thin laptop with Apple M1 chip and 8-core GPU",
    "price": 1199.99,
    "image":"https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    "category": "refurbished"
  },
  {
    "id": 7,
    "name": "Microsoft Surface Laptop 4",
    "description": "Premium laptop with 11th Gen Intel Core i5 and Alcantara keyboard",
    "price": 1499.99,
    "image":"https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    "category": "refurbished"
  },
  {
    "id": 8,
    "name": "Dell XPS 13",
    "description": "Ultrabook with InfinityEdge display and Intel Core i7",
    "price": 1599.99,
    "image": "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    "category": "refurbished"
  },
  {
    "id": 9,
    "name": "HP Envy 13",
    "description": "Sleek laptop with AMD Ryzen 7 and NVIDIA GeForce MX450",
    "price": 1099.99,
    "image":"https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    "category": "refurbished"
  },
  {
    "id": 10,
    "name": "Lenovo Legion 5",
    "description": "Gaming laptop with AMD Ryzen 7 and NVIDIA GTX 1660 Ti",
    "price": 1299.99,
    "image": "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    "category": "refurbished"
  },
  {
    "id": 11,
    "name": "Asus ROG Zephyrus G14",
    "description": "Compact gaming laptop with AMD Ryzen 9 and RTX 3060",
    "price": 1699.99,
    "image": "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    "category": "refurbished"
  },
  {
    "id": 12,
    "name": "Acer Aspire 5",
    "description": "Budget-friendly laptop with AMD Ryzen 5 and Full HD display",
    "price": 499.99,
    "image": "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    "category": "refurbished"
  },
  {
    "id": 13,
    "name": "Apple MacBook Pro 16-inch",
    "description": "Professional-grade laptop with Intel Core i9 and AMD Radeon Pro 5500M",
    "price": 2399.99,
    "image": "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    "category": "refurbished"
  },
  {
    "id": 14,
    "name": "Razer Blade 15",
    "description": "High-performance gaming laptop with Intel Core i7 and RTX 3070",
    "price": 1999.99,
    "image": "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    "category": "refurbished"
  },
  {
    "id": 15,
    "name": "Samsung Galaxy Book Pro",
    "description": "Ultra-light laptop with Super AMOLED display and Intel Core i5",
    "price": 1299.99,
    "image": "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    "category": "refurbished"
  }
];*/

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productFetching.pending, (state, action) => {
      state.status = "loading..";
    });
    builder.addCase(productFetching.fulfilled, (state, action) => {
      state.status = "";
      state.items = action.payload;
    });
    builder.addCase(productFetching.rejected, (state, action) => {
      state.status = "something went wrong";
    });
  },
});

export default productSlice.reducer;

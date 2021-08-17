// import SimpleInputWithHooks from "./components/SimpleInputWithHooks";
// import BasicForm from "./components/BasicForm";
// import InputDebounce from "./components/InputDebounce";
import Product from "./components/Product";
import React, {useState, useEffect} from "react";

function App() {

   const [boots, setBoots] = useState([
      {id: 1, bootName: "Canvases", bootModel: "Off white jordan 1 canvas", price: {min : 32.00, max : 120.00}},
      {id: 2, bootName: "Posters", bootModel: "Jezzy Boost 360", price: {min : 16.00, max : 32.00}},
      {id: 3, bootName: "Stickers", bootModel: "Zebra sticker", price: {min : 5.00, max : null}},
      {id: 4, bootName: "Adidas", bootModel: "Calabasas Poster", price: {min : 16.00, max : 32.00}},
      {id: 5, bootName: "Jordans", bootModel: "Air Jordan suede Poster", price: {min : 16.00, max : 32.00}},
      {id: 6, bootName: "Balenciaga", bootModel: "Triple S Poster", price: {min : 16.00, max : 32.00}},
      {id: 7, bootName: "Nike", bootModel: "Blazier mid sacai", price: {min : 16.00, max : 32.00}},
      {id: 8, bootName: "Artists", bootModel: "Lil peep poster", price: {min : 16.00, max : 32.00}},
   ]);


   return (
       <div className="app">
          {/*<SimpleInputWithHooks/>*/}
          {/*<InputDebounce/>*/}
          {/*<BasicForm/>*/}
          {boots.map((oneBoot) => (
              <Product oneBoot={oneBoot}/>
          ))}

       </div>
   );
}

export default App;

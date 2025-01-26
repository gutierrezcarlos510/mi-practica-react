import './App.css'

import Home from './screens/Home.jsx';
import Counter from "./Components/Counter/Counter.jsx";
import FilterableProductTable from "./Components/Product/FilterableProductTable";

const PRODUCTS = [
    {category: "Frutas", price: "$1", stocked: true, name: "Manzana"},
    {category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón"},
    {category: "Frutas", price: "$2", stocked: false, name: "Maracuyá"},
    {category: "Verduras", price: "$2", stocked: true, name: "Espinaca"},
    {category: "Verduras", price: "$4", stocked: false, name: "Calabaza"},
    {category: "Verduras", price: "$1", stocked: true, name: "Guisantes"}
];

function App() {
  return (
    <>
        <Home />
        <Counter />
        <FilterableProductTable products={PRODUCTS}/>
    </>
  )
}

export default App;

import FilterableProductTable from "../Components/Product/FilterableProductTable";
import {useSelector} from "react-redux";

const Product = ()=> {
    const dataProducts = useSelector((state) => state.product.PRODUCTS);
    return (
        <FilterableProductTable products={dataProducts}/>
    )
}
export default Product;
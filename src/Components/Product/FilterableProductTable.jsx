import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import {useDispatch, useSelector} from "react-redux";
import {setFilterText, setInStockOnly} from "../../store/features/product/productSlice.js";

const FilterableProductTable = ({products}) => {
    const filterText = useSelector((state) => state.product.filterText);
    const inStockOnly = useSelector((state) => state.product.inStockOnly);
    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}  />
        </div>
    );
}
export default FilterableProductTable;
import {useDispatch} from "react-redux";
import {setFilterText, setInStockOnly} from "../../store/features/product/productSlice";

const SearchBar = ({filterText, inStockOnly}) => {
    const dispatch = useDispatch()
    return (
        <form className={"mt-3"}>
            <input type="text" className={"form-control"} value={filterText} placeholder="Buscar....." onChange={(e)=>dispatch(setFilterText(e.target.value))}/>
            <label>
                <input type="checkbox" checked={inStockOnly} onChange={(e)=>dispatch(setInStockOnly(e.target.checked))}/>
                {'  '}
                Mostrar solo los productos en stock
            </label>
        </form>
    );
}
export default SearchBar;
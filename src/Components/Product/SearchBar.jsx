const SearchBar = () => {
    return (
        <form>
            <input type="text" placeholder="Buscar....."/>
            <label>
                <input type="checkbox"/>
                {'  '}
                Mostrar solo los productos en stock
            </label>
        </form>
    );
}
export default SearchBar;
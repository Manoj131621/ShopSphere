import'./SearchBar.scss'
function SearchBar({ value, onChange}){
    return(
        <div>
        <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e)=> onChange(e.target.value)}
        />
        </div>
    )
}

export default SearchBar;
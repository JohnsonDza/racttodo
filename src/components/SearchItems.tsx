
import { Item } from "../App";

type SearchProps = {
    search:string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
    items: Item[];
    setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

function SearchItems( {search,setSearch}:SearchProps) {

  return (
    <form>
        <input 

         type="text"
         className="border-2 border-blue-2000 m-2"
         placeholder="search"
         value={search}
         onChange={(e)=>setSearch(e.target.value)}

        
        />
    </form>
  )
}

export default SearchItems
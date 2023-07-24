import { Item } from "../App";



type ContentProps = {
    search:string;
    items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

function Content({ items, setItems, search }: ContentProps) {
  const handleChange = (id: number) => {
    const updatedList = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(updatedList);
    // localStorage.setItem("shoppinglist", JSON.stringify(updatedList));
  };

  const handleDelete = (id: number) => {
    const updatedList = items.filter((item) => {
      return item.id != id;
    });
    setItems(updatedList);
    // localStorage.setItem("shoppinglist", JSON.stringify(updatedList));
  };

  
  return (
    <form className="m-2">
      {items.length > 0 ? (
        <ul>
            
          {items.filter(item=>(item.item).toLowerCase().includes(search.toLowerCase())).map((item) => {
            return (
              <li className="m-2" key={item.id}>
                <input
                  type="checkbox"
                  onChange={() => {
                    handleChange(item.id);
                  }}
                  checked={item.checked}
                />
                <label
                  style={
                    item.checked
                      ? { textDecoration: "line-through" }
                      : undefined
                  }
                >
                  {item.item}
                </label>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-slate-500"
                >
                  {" "}
                  Delete{" "}
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>List is Empty </p>
      )}
    </form>
  );
}

export default Content;

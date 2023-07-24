import { useRef, useState } from "react"
import { Item } from "../App"


type AddItemsProps={
    items:Item[],
   setItems: React.Dispatch<React.SetStateAction<Item[]>>
}

function AddItems({items,setItems}:AddItemsProps) {

    const [addItems, setAddItems] = useState('')

    const inputRef = useRef<HTMLInputElement | null>(null);
    
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!addItems)return
        handleAddItems()
        setAddItems('')
       
        
    }
    const handleAddItems =()=>{
       
        const id = items.length===0?1:items[items.length-1].id+1;
        const checked=false;
        const item = addItems;
        const updatedList = [...items,{
            id:id,
            checked:checked,
            item:item
        }]
         setItems(updatedList)
        // localStorage.setItem("shoppinglist", JSON.stringify(updatedList));

        

    }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
        <input
        ref={inputRef}
        autoFocus
        type="text"
        placeholder="Add Items"
        className="border-l-neutral-950 border-2 m-2"
        value={addItems}
        onChange={e=>setAddItems(e.target.value)}

        />
        <button 
        onClick={()=>inputRef.current?.focus()}
        
        className="border-2">ADD ITEMS</button>
    </form>
  )
}

export default AddItems
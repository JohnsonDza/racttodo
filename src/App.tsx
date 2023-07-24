
import './App.css'
import Header from "./components/Navbar.tsx"
import Footer from "./components/Footer.tsx"
import Content from "./components/Content.tsx"
import AddItems from "./components/AddItems.tsx"
import { useEffect, useState } from "react"
import SearchItems from "./components/SearchItems.tsx"

export type Item = {
  id: number;
  checked: boolean;
  item: string;
};

// Helper function to get data from localStorage
function getItemFromLocalStorage(key: string): Item[] {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

function App() {
  const [items, setItems] = useState<Item[]>(getItemFromLocalStorage('shoppinglist'));// using the helper function 
  // const [items, setItems] = useState<Item[]>(JSON.parse(localStorage.getItem('shoppinglist')!) || []); //// using ! for type assertion 
  // const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []); ///bug
  
  // const [items, setItems] = useState<Item[]>([
  //   {
  //     id: 1,
  //     checked: true,
  //     item: "This is item one ",
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: "This is item two ",
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     item: "This is item three ",
  //   },
  // ]);
  
  const [search, setSearch] = useState('')
  
  // console.log(items)
 
  useEffect(() => {
  localStorage.setItem("shoppinglist", JSON.stringify(items));  
 }, [items])
 

  return (
    <>
    <Header/>
    <AddItems items={items} setItems={setItems}/>
    <SearchItems items={items} setItems={setItems} search={search} setSearch={setSearch}/>

    <Content items={items} setItems={setItems} search={search}/>
    <Footer/>
   
    
    </>
  )
}

export default App

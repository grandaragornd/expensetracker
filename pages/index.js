import React, {useState, useEffect} from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./fb/fb.js";

export default function Home() {
  const [items, setItems] = useState([
    {name: 'Watch', price: '120.30'},
    {name: 'Perfume', price: '80.30'},
    {name: 'earrings', price: '60.39'}
  ])
  const [newItem, setNewItem] = useState({name: '', price: ''})
  const [total, setTotal] =useState(0)
  // ad item database
  const addItem = async (e) => {
    e.preventDefault()
    if(newItem.name !== newItem.price !== ''){
      setItems([...items, newItem])
      await addDoc(collection(db, 'items'), {
        name: newItem.name.trim(),
        price: newItem.price,
      })
    }
  }
  //read item database

  // delete item from database


  return (
    <main className='flex min-h-screen flex-col items-center justify-between sm:p-24 p-4'>
    <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm '>
      <h1 className='text-4xl p-4 text-center'>Expense Tracker</h1>
      <div className='bg-slate-800 p-4 rounded-lg'>
        <form className='grid grid-cols-6 items-center text-black'>
          <input value={newItem.name} onChange={(e) => setNewItem({...newItem, name: e.target.value})} type="text" className="col-span-3 p-3 border" placeholder="Item"></input>
          <input value={newItem.price} onChange={(e) => setNewItem({...newItem, price: e.target.value})} type="number" className="col-span-2 p-3 border mx-3" placeholder="€"></input>
          <button type="submit" className="text-white hover:bg-slate-900 p-3 text-md">Add Expense</button>
        </form>
        <ul>{items.map((item, id) => (
          <li key={id} className="my-4 w-full flex justify-between items-center bg-slate-950">
            <div className="p-4 w-full flex justify-between">
              <span className="capitalize">{item.name}</span>
              <span>€{item.price}</span>
            </div>
            <div>
              <button onClick={addItem} className="p-4 border-l-2 border-slate-900 hover:bg-slate-900">Delete</button>
            </div>
          </li>
        ))}</ul>
        {items.length < 1 ? ('') : (<div className="flex justify-between p-3">
          <span>Total</span>
          <span>{total}€</span>
        </div>)}

      </div>
    </div>
  </main>
  );
}

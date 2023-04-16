import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const allCategories =['all',...new Set(items.map((item) => item.category))] 
console.log(allCategories)

function App() {
  //initializing the menuItems with start value of the array in data.js
  const [menuItems,setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  //function that allows us to pass in a string and then sets menu items to those that match the string
  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items)
      return
    }
    //we must always iterate over the original array as it is imutable 
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return(
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>

        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;

import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  //initializing the menuItems with start value of the array in data.js
  const [menuItems,setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])

  return(
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>

        <Categories/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;

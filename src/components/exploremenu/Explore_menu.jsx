import React from 'react'
import "./explore_menu.css"
import { menu_list } from '../../assets/assets'


const Explore_menu = ({ category, setCategory }) => {
  return (
    <div>
      <div className="explore_menu" id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore_menu_text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur porro quam labore. Amet dignissimos veritatis praesentium maiores, expedita a quisquam dolorem vitae quo excepturi ipsa.
        </p>
        <div className="explore_menu_list">
          {menu_list.map((item, index) => {
            return (
              <div onClick={() => { setCategory(pre => pre === item.menu_name ? "All" : item.menu_name) }} className="explore_menu_list_item" key={index}>
                <img className={category===item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
              </div>
            )
          })}
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Explore_menu
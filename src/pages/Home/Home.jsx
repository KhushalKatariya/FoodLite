import React, { useState } from 'react'
import "./home.css";
import Header from '../../components/Header/Header';
import Explore_menu from '../../components/exploremenu/Explore_menu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Explore_menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home
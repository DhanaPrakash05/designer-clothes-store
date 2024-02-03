import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import Categories from './components/Categories.js';
import TailorCategories from "./components/TailorCategories.js";
import Dummy from "./components/dummy.js";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/components/Categories' element={<Categories/>}/>
      <Route path='/components/TailorCategories' element={<TailorCategories/>}/>
      {/* <Route path='/components/dummy' element={<Dummy/>}/> */}
    </Routes>
    </BrowserRouter>
     
  );
}
export default App;

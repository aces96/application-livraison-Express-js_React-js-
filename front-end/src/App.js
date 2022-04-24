import './App.css';
import Home from './containers/homepage';
import MealsPage from './containers/mealsPage';
import CartPage from './containers/cartPage';
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/meals' element={<MealsPage/>} />
        <Route path= '/cart' element= {<CartPage/>}/>
        <Route path='/' element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;

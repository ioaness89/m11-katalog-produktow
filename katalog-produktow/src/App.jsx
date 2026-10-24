import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router';
import Dashboard from './Pages/Dashboard';
import ProductsPage from './Pages/ProductsPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import FavoritesPage from './Pages/FavoritesPage';
import ApiInfoPage from './Pages/ApiInfoPage';
import MainNavbar from './Components/MainNavbar';

function App() {

  return (
    <>
      <MainNavbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/products/:id' element={<ProductDetailsPage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
        <Route path='/about-api' element={<ApiInfoPage/>}/>
      </Routes>
    </>
  )
}

export default App

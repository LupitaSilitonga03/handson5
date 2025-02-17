import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Product from './assets/pages/Product';
import Contact from './assets/pages/Contact';
import Jobs from './assets/pages/Jobs';
import RootLayout from './assets/layouts/RootLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path = "about" element={<About/>}/>
        <Route path = "product" element={<Product/>}/>
        <Route path = "contact" element={<Contact/>}/>
        <Route path = "jobs" element={<Jobs/>}/>
        </Route>
    )
  );
  return (
    <RouterProvider router={router}/>
  )
}

export default App

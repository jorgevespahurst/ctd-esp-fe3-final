import {
  BrowserRouter, 
  Routes, 
  Route,
} from 'react-router-dom';
import Home from "./Routes/Home";
import NoPage from "./Routes/NoPage";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Layout from './Routes/Layout';
import Favs from "./Routes/Favs";
import './App.css'
import { ContextProvider } from './Components/utils/global.context';

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='detail/:id' element={<Detail/>}/>
            <Route path="contact" element={<Contact/>} />
            <Route path="favs" element={<Favs/>} />
            <Route path="*" element={<NoPage/>} />
          </Route>
      </Routes>

    </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
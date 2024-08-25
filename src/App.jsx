
import './App.css'
import Create from './Create'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Read from './Read';
import Update from './Update';

function App() {
  

  return (

   <>
<BrowserRouter>
<Routes>
<Route exact path='/' element={<Read/>} ></Route>   //browse page to this path 
<Route exact path='/read' element={<Read/>} ></Route>
<Route exact path='/create' element={<Create/>} ></Route>
<Route exact path='/update' element={<Update/>} ></Route>


</Routes>
</BrowserRouter>
 
  
   </>
  )
}

export default App

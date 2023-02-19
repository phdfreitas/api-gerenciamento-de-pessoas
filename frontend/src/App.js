import './App.css';

import ListaPessoas from './pages/ListaPessoas';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path='/listaPessoas' element={<ListaPessoas/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

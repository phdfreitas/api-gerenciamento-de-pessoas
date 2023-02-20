import './App.css';

import ListaPessoas from './pages/ListaPessoas';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import CadastraPessoa from './pages/CadastraPessoa';
import ConsultarPessoa from './pages/ConsultarPessoa';
import AtualizarDados from './pages/AtualizarDados';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar/>
        
        <Routes>
          <Route path='/listaPessoas' element={<ListaPessoas/>} />
          <Route path='/cadastrarPessoa' element={<CadastraPessoa/>} />
          <Route path='/consultar/:id' element={<ConsultarPessoa/>} />
          <Route path='/atualizarDados/:id' element={<AtualizarDados/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

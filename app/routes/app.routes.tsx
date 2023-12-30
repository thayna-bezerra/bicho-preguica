import { Routes, Route} from 'react-router-dom';

import { App } from '../src/App'
import Cadastro from '../src/Cadastro';

export function AppRoutes(){
    return(
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
      </Routes>
    )
  }
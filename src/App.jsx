
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IndexOrigin } from './pages/IndexOrigin/IndexOrigin'
import { CadastroSchool } from './pages/Cadastro/indexCadastro'
import { LoginSchool } from './pages/LoginSchool/indexLogin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexOrigin />} />
        <Route path='/cadastroSchool' element={<CadastroSchool />} />
        <Route path='/loginSchool' element={<LoginSchool />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

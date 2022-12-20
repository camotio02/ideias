
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { IndexOrigin } from './pages/IndexOrigin/IndexOrigin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexOrigin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

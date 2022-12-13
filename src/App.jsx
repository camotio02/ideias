import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  const [docs, setDocs] = useState({
    username: '',
    phone: '',
    email: '',
    password: ''
  })

  const HandleDocs = (e) => {
    const newEmail = e.target.value
    const name = e.target.name
    setDocs(newEmail, name)
  }
  const Submit = () => {
    const alerts = alert('passou')
    if (docs.email.includes('@') && docs.email.includes('.com')) {
      alerts
      setTimeout(() => {
        alerts == undefined
      }, "1000")

    } else {
      alert('errado')
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <form action="submit">
          <input name='password' onChange={HandleDocs} value={docs.username} type="text" />
          <input name='phone' onChange={HandleDocs} value={docs.phone} type="number" />
          <input name='email' onChange={HandleDocs} value={docs.email} type="email" />
          <input name='password' onChange={HandleDocs} value={docs.password} type="password" />
        </form>
        <button onClick={Submit} type='submit'>submit </button>
      </header>
    </div>
  )
}

export default App

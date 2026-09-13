import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-white p-4 rounded-xl mb-4">
        tailwind test
      </h1>

      <Card
        username="chaiaurcode"
        btnText="click me"
      />

      <Card
        username="mariyam"
        btnText="visit me"
      />
    </>
  )
}

export default App
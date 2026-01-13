import React from 'react'
import { Button } from 'reproduction-aria'

function App() {
  return (
    <div>
      <h1>Component Library Test</h1>
        <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import Home from './pages/Home'

const App = () => {
  const [mode, setMode] = useState('warm')

  useEffect(() => {
    document.documentElement.dataset.theme = mode
  }, [mode])

  return <div className='min-h-screen w-full overflow-hidden'>
    <Home mode={mode} setMode={setMode} />
  </div>
}

export default App

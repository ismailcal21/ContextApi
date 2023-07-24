import React, { useEffect, useState } from 'react'
import SwitchTheme from '../SwitchTheme'
import Language from '../Language'

const Footer = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("component render oldu", count)
    })
    useEffect(() => {
        console.log("component render oldu Mount", count)
    },[count])
    
  return (
      <div>
          
          Footer
          
          <SwitchTheme />
          <Language />
          <button onClick={() => setCount(count => count + 1)}>Artir</button>
          <button onClick={() => setCount(count => count - 1)}>Azalt</button>
          {count}
      </div>
  )
}

export default Footer
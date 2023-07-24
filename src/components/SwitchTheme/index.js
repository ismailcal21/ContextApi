import React from 'react'
import  {useSite} from '../../context/SiteContext'

const SwitchTheme = () => {
    const {color ,setColor} = useSite()
    
  return (
      <div>
           <button onClick={() => setColor(color === "green" ? "light" : "green")}>Change color</button>
          {color}
          <br />
          
          
    </div>
  )
}

export default SwitchTheme
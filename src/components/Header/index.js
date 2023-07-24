import React from 'react'
import SwitchTheme from '../SwitchTheme'
import Language from '../Language'
import { useAuth } from '../../context/AuthContext'
const Header = () => {

    const { user, setUser } = useAuth()
    
    const Login = () => {
        setUser({
            name: "ismail",
            id:1
        })
    }

    const Logout = () => {
        setUser(false)
    }
  
    return (
      <div>Header <br />
          
          {user && <button onClick={Logout}>Cikis Yap</button> || <button onClick={Login}>Giris Yap</button> }
          
        <SwitchTheme />
          <Language/>
      </div>
  )
}

export default Header
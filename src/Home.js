import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useAuth } from './context/AuthContext'

const Home = () => {
    const { user }= useAuth()
  return (
      <div>
          <Header  />
          App
          {user && (
              <div style={{padding:"10", border:"1px solid red"}}>
                  Bu alan sadece giris yapilinca gorunur
              </div>
          )}
      <Footer />
    </div>
  )
}

export default Home
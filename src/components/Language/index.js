import React from 'react'
import { useContext } from 'react'
import {useSite} from '../../context/SiteContext'

const Language = () => {
    const {language, setLanguage}= useSite()
  return (
      <div>
          <button onClick={() => setLanguage(language === "tr" ? "swedish" : "tr")}>Change language</button>
          {language} 
    </div>
  )
}

export default Language
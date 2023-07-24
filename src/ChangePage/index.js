import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ChangePage = () => {
    const [post, SetPost] = useState(1)
    const [datas,setDatas]= useState(null)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${post}`)
            .then(res => {
                console.log("post", post)
                setDatas(res.data)
                console.log("res",res)
                console.log("datas",datas,)
        })
    }, [post])

     if (datas === null) {
         return (
             <div>
             Loading.. 
          </div> 
         )
        
     }
  return (
      <div>
          {/* {
              datas.map((item) => {
                  return (
                      <div>
                          {item}
                      </div>
                  )
              })
          } */}
         
              
          <button onClick={()=>SetPost(post=>post+1)}>ChangePage</button>
    {post}
      </div>
  )
}

export default ChangePage
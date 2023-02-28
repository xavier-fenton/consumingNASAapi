import React, { useState, useEffect } from 'react'
import HttpClient from './HttpClient'
import './App.css'


const App = () => {
  const [apod, setApod] = useState<string | any>()


  useEffect(() => {
    HttpClient.getApod().then((apodData) => {
      const newData = apodData.data.photos.slice(800, 855)
      setApod(newData)
      
    })
   
  }, [])

 
    
  
  return (
  
    <div style={{ maxWidth: 900, padding: 30 }}>
      {/* <h1>NASA API</h1> */}
      
    
      
    {/* <div> */}
    {apod && apod.map((data: { img_src: string ; id: React.Key | any, full_name: string }) => {
      return (
        <div id='wrap' >
          {/* <h2>Name {data.full_name}</h2> */}
          
          <img src={data.img_src} id={data.id}alt="APOD" key={data.id}/>
          

          
            {/* <article>
            <pre
              style={{
                overflowX: 'auto',
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
              }}
            >
              <hr />
              {JSON.stringify(apod, null, 2)}
            </pre>
          </article>  */}
      
        </div>
        )
    })
          

     }
  </div>
    
  
)
}
export default App

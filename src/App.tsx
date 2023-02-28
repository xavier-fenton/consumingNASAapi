import React, { useState, useEffect } from 'react'
import HttpClient from './HttpClient'



const App = () => {
  const [apod, setApod] = useState<string | any>()

  useEffect(() => {
    HttpClient.getApod().then((apodData) => {
      const newData = apodData.data.photos.slice(0, 300)
      setApod(newData)
      // console.log('this us new data', newData) 
    })
  }, [])

 
    
  
  return (
  
    <div style={{ maxWidth: 900, padding: 30 }}>
      {/* <h1>NASA API</h1> */}
      
    
      
    {/* <div> */}
    {apod && apod.map((data: { img_src: string ; id: React.Key | any, full_name: string }) => {
      return (
        <div>
          {/* <h2>Name {data.full_name}</h2> */}
          <ul>
          <img src={data.img_src} id={data.id}alt="APOD" width="auto" height="auto" key={data.id}/></ul>
          
          
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

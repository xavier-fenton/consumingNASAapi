import React, { useState, useEffect } from 'react'
import HttpClient from './HttpClient'
import './App.css'


const App = () => {
  const [apod, setApod] = useState<string | any>()


  useEffect(() => {
    HttpClient.getApod().then((apodData) => {
      const newData = apodData.data.photos.slice(0, 900)
      setApod(newData) 
    })
   
  }, [])

 
    
  
  return (
  
    <div> 
      <div className='wrap'>
      {apod && apod.map((data: { img_src: string ; id: React.Key | any, full_name: string }) => {

        return (
          <div className='image-div'>
            
            
            <img className='image' src={data.img_src} id={data.id}alt="APOD" key={data.id} />
            

            
              
        
          </div>
          )
      })
            

      }
      </div>
            <article>
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
            </article> 
  
    </div>
    
)
}
export default App

import React, { useState, useEffect } from 'react'
import HttpClient from '../HttpClient'
import '../App.css'
import { Link, useLocation, Route, Routes } from 'react-router-dom'
import ImageComponent from './ImageComponent'

const RoverImages= () => {
  const [apod, setApod] = useState<string | any>()
  const location = useLocation()

  // function handleClick(event: React.MouseEvent<HTMLElement>) {
  //  let x = document.getElementById('a-tag')
  //  console.log(x);
   
    
  // }
  useEffect(()=> {
    console.log(location)
  },[location])

  useEffect(() => {
    HttpClient.getApod().then((apodData) => {
      const newData = apodData.data.photos.slice(0, 10)
      setApod(newData) 
      
    })
   
  }, [])

 
    
  
  return (
  
    <div> 
      <h1> hello read me</h1>
      <div className='wrap'>
      {apod && apod.map((data: { img_src: string ; id: React.Key | any, full_name: string , camera: {id: number, name: string, rover_id: number}}) => {

        
        return (
          <div>
          <div className='image-div'>
            <Link to={<ImageComponent data={data}/>}> 
            
            <img className='image' src={data.img_src} id={data.id}alt="APOD" key={data.id} />
            </Link>
            
          </div>

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
export default RoverImages

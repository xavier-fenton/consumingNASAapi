import * as React from 'react';
import { useState, useEffect } from 'react';
import { setEnvironmentData } from 'worker_threads';


const NewComponent = () => {
  const [data, setData] = useState();

  

  useEffect(() => {
    fetch('https://images-api.nasa.gov/search?q=space&media_type=image')
    .then(response => response.json())
    .then((data) => {
      const collectedData = data.collection.items
      setData(collectedData)
      console.log(collectedData)
    })
  }, [])


  return (<>hello</>  );
}
 
export default NewComponent;
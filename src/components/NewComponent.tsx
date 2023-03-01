import * as React from 'react';
import { useState, useEffect } from 'react';


const NewComponent = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('https://images-api.nasa.gov/search?q=apollo11').then(response => response.json()).then(data => console.log(data);
    )
    
  }, []);
  return (  );
}
 
export default NewComponent;
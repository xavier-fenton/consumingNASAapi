import * as React from 'react'
import { useState, useEffect } from 'react'

const NewComponent = () => {
  const [data, setData]: Array<any> = useState()

  useEffect(() => {
    fetch('https://images-api.nasa.gov/search?q=space&media_type=image')
      .then((response) => response.json())
      .then((data) => {
        const collectedData = data.collection.items
        // setData(collectedData)
        const mappedData = collectedData.map((data: { links: string }) => {
          return data.links
        })
        const mappedData2 = mappedData.map((data: Array<any>) => {
          const firstIndex: {href: string} = data[0]
          const intoIndex = firstIndex.href
          return intoIndex
        })
        setData(mappedData2)
      })
  }, [])

  return (
    <>
      <h1>NASA Image Data</h1>
      {data &&
        data.map((data:{id?: string | any}) => {
          return (
            <>
              <img
                className="image"
                src={data}
                id={data.id}
                alt="APOD"
                key={data.id}
              />
            </>
          )
        })}
    </>
  )
}

export default NewComponent

import { useEffect, useState } from 'react'


function App() {
  const [data, setData] = useState({mensaje:"Loading"})

  useEffect(() => {
    setTimeout(()=>{
      setData({mensaje:"Datos cargados"})
    },5000)
  }, [data])

  return (
    <>
    <div>
      <strong>{data.mensaje}</strong>
    </div>
    </>
  )
}

export default App

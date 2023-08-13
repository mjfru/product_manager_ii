import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const DisplayOneProduct = () => {
  const {id} = useParams()
  const [ product, setProduct ] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then((res) =>{
        console.log(res.data)
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="border p-2">
      <h4>{product.title}</h4>
      <p className='m-1'>Retail Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <Link to={'/'} className='btn btn-primary btn-sm'>Back to Homepage</Link>
    </div>
  )
}

export default DisplayOneProduct
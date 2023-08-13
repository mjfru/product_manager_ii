/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
const DisplayProducts = (props) => {
  const { products, setProducts } = props;
  console.log(props)
  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then((response) => {
        setProducts(response.data)
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  
  return (
    <>
      <h3 className='mt-5 mb-3'>All Products:</h3>
      <div className='d-flex flex wrap justify-content-between'>
        {
          products.map((product) => (
            <div key={product._id} className='border m-2 p-2'>
              <h4>{product.title}</h4>
              <Link to={`/product/${product._id}`} className='btn btn-success'>Details</Link>
              <button className='btn btn-info mx-2'>Edit</button>
              <button className='btn btn-danger'>Delete</button>
            </div>
          ))
        }
      </div>
    </>
  )
}
export default DisplayProducts
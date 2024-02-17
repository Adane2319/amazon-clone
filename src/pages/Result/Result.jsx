import React from 'react'
import classes from "./Result.module.css"
import LayOut from '../../componets/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'

function Result() {
  const {categoryName} = useParams()
  // console.log(categoryName)
  // axios.get(`${productUrl}/products/category/${categoryName}`)
  //   .then((res)=>{
  //     console.log(res)

  //   })
  return (
    <LayOut>
      <div>Result</div>
    </LayOut>
    
  )
}

export default Result
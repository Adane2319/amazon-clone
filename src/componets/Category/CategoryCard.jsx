import React from 'react'
import classes from '../Category/Category.module.css'
// import { Link } from 'react-router-dom'

function CategoryCard({data}) {
  return (
    <div className= {classes.category}>

      <a href={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imageLink} alt="" />
        <p>shop now</p>
      </a>
    </div>
  )
}

export default CategoryCard
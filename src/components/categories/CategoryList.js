import React from 'react'
import Category from './Category'

const CategoryList = (props) => {

  return (
    <tbody>
      {
        props.categories.map(category => (
          <Category
            category={category}
          />
        ))
      }
    </tbody>
  )
}

export default CategoryList
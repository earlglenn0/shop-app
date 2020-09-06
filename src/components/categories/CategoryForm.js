import React from 'react'

const CategoryForm = (props) => {
  return (
    <div>
      <h2>New Category</h2>
      <input
        id='name'
        label='Category Name'
        value={props.categoryForm.name}
        onChange={props.handleInputChange}
        style={{ margin: 8 }}
      />
      <br />
      <input
        id='status'
        label='Status'
        value={props.categoryForm.status}
        onChange={props.handleInputChange}
        style={{ margin: 8 }}
      />
      <div>
        <button color='primary' variant='contained' onClick={props.handleCategorySave} style={{ margin: 10 }}>
          Add
        </button>
      </div>
    </div>
  )
}

export default CategoryForm
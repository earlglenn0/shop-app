import React from 'react'

const Category = (props) => {
  console.log('@categories', props.category)
  return (
    <>
      {
        props.category.editMode ?
          <tr>
            <td>
              <input id='newName' defaultValue={props.category.name} onChange={props.handleInputChange} />
            </td>
            <td>
              <input value={props.category.status} />
            </td>
            <td>
              <button
                color='default'
                
                onClick={() => props.updateCategory(props.category)}
              >Update</button>
              <button
                color='secondary'
                
                onClick={() => props.cancelUpdate(props.category)}
              >
                Cancel
              </button>
            </td>
          </tr> :
        <tr>
          <td>{props.category.name}</td>
          <td>{props.category.status}</td>
          <td>
              <button
                color='default'
                
                onClick={() => props.handleCategoryEdit(props.category)}
              >Edit</button>
              <button
                color='secondary'
                
                onClick={() => props.handleCategoryDelete(props.category)}
              >
                Delete
              </button>
          </td>
        </tr>
      }
    </>
  )
}

export default Category
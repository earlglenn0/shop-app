import React from 'react'
import { connect } from 'react-redux'
import { GET_CATEGORIES } from '../../redux/actions'
import CategoryList from './CategoryList'
import CategoryForm from './CategoryForm'

class Categories extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      categoryForm: {
        name: '',
        status: ''
      },
      // searchField: '',
      updatedCategory: ''
    }
  }

  componentDidMount() {
    this.props.getCategories()
  }

  handleInputChange = e => {
    const { id, value } = e.target
    const { categoryForm } = this.state

    this.setState({
      categoryForm: {
        ...categoryForm,
        [id]: value
      }
    })
  }

  handleCategorySave = e => {
    e.preventDefault();
    const {
      categoryForm: {
        name,
        status
      }
    } = this.state
    const { addCategory } = this.props

    addCategory({
      name,
      status
    })

    this.setState({
      categoryForm: {
        name: '',
        status: ''
      }
    })
  }
render() {
  const { categoryForm } = this.state
    const { categories } = this.props

    console.log('categories', this.props)
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <CategoryList
          categories={categories}/>
        </table>
        </div>
      <hr />
      <CategoryForm
          handleInputChange={this.handleInputChange}
          categoryForm={categoryForm}
          handleCategorySave={this.handleCategorySave}
        />
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => {
      dispatch({ type: GET_CATEGORIES })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Categories)
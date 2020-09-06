import { wGetCategories } from './categories'
// import { wGetProducts } from './products'
// import { wGetOrders } from './orders'

export default function* rootSaga() {
  yield [
    
    wGetCategories(),
    
  ]
  console.log("Root saga")
}
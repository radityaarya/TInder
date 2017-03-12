const data = require('../db/data')

// search
export default (state=data, action) => {
  switch (action.type) {
    case 'PEOPLE_SEARCH':
      return data.filter( x => (x.name === null ? '' : x.name).match( new RegExp(action.payload, 'i')) )
    default :
      return state
  }
}

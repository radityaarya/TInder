import data from '../db/data'

// search
export default (state=data, action) => {
  switch (action.type) {
    case 'CHAT_SEARCH':
      return action.payload
    default :
      return state
  }
}

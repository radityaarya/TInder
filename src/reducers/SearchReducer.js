// search
export default (state='', action) => {
  switch (action.type) {
    case 'CHAT_SEARCH':
      return action.payload
    default :
      return state
  }
}

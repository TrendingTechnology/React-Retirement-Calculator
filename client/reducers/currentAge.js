
/* ------------   INITIAL STATE     ------------------ */
const initialState = {
  currentAge: '26'
}

/* -----------------    ACTION TYPES     ------------------ */
const ADD_CURRENT_AGE = 'ADD_CURRENT_AGE';


/* ------------  SYNC ACTION CREATORS     ------------------ */
export const addCurrentAge = currentAge => ({ type: ADD_CURRENT_AGE, currentAge });

/* ------------       REDUCER    ------------------ */
export default ( state = initialState, action ) => {
  const newState = Object.assign( {}, state )
  switch( action.type ) {
    case ADD_CURRENT_AGE:
      newState.currentAge = action.currentAge
      break;
    default:
      return state
  }
  return newState
}

import * as actionTypes from './actions';
const initialState = {
       start_data: null,
       test: 'from state'
}


const reducer = (state = initialState, action) => {
switch (action.type) {
     case "FETCH_START_DATA" :
     return{
         ...state,
         start_data : action.start_data,
     };
      default :
      return state;
     

}
};


export default reducer;
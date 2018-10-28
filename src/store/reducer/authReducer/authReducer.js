const initialState = {
   token:null,
}
 
const authReducer = (state = initialState, action) => {
    switch (action.type){
       case 'RESAVE_USER':
       return{
         ...state,
         token: action.usrtData
       };
       case 'LOGOUT':
       return {
         ...state,
         token:null
       }

       default :
       return state;

       
    }
}

export default authReducer;
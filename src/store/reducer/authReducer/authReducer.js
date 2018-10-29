const initialState = {
   token:null,
   userInfo:null,
   loader:false,
   expTime:null,
}
 
const authReducer = (state = initialState, action) => {
    switch (action.type){
       case 'RESAVE_USER':
       return{
         ...state,
         token: action.usrtData,
         userInfo: action.userInfo
       };
       case 'LOGOUT':
       return {
         ...state,
         token:null,
         userInfo: null
       };
       case 'SAVE_USER_INFO':
       return{
         ...state,
        userInfo:action.userInfo,

       }
       case 'LOADING_DATA':
        return{
          ...state,
          loader: true
        };
        case 'STOP_LOADING':
        return{
          ...state,
          loader: false
        };

        case 'EXPIRATION_TIME':
        return{
          ...state,
          expTime:action.expTime
        }

       default :
       return state;

       
    }
}

export default authReducer;
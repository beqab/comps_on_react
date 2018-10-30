const initialState = {
      starterData: {},
};

const starterReducer = (state = initialState, action) =>{
       switch (action.type) {
                 case 'FEATCH_STARTER':
                 return{
                     ...state,
                     starterData:action.starterData
                 };
                 default:
                 return{
                     state
                 }
       }
}


export default starterReducer
export function resaveUser (usrtData, userInfo){
    return {
      type: 'RESAVE_USER',
      usrtData: usrtData,
      userInfo: userInfo
    }
}

export function checkAuthTimeout(expirationTime){
  return dispatch =>{
   setTimeout(() => {
    // dispatch(logout())
    console.log('ttttttttttttt')
   
  }, expirationTime*1 )

}
  console.log(expirationTime, 'fron action')
      //  return{
      //    type:'EXPIRATION_TIME',
      //    expTime: expirationTime,
      //  }
}

export function logout () {
  localStorage.removeItem('token');
  localStorage.removeItem('userInfo')
  return{
    type: 'LOGOUT',
  }
}

export function  loadingData(){
    return{
      type: 'LOADING_DATA'
    }
}

export function stopLoading(){
  return{
    type: 'STOP_LOADING'
  }
};

export function saveUserInfo (data) {
    return{
      type:'SAVE_USER_INFO',
      userInfo:data
    }
}
export function resaveUser (usrtData){
    return {
      type: 'RESAVE_USER',
      usrtData: usrtData
    }
}

export function logout () {
  localStorage.removeItem('token')
  return{
    type: 'LOGOUT',
  }
}
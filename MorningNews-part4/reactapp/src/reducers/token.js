export default function(token = '', action) {
    
    console.log('token', action.tokenUser);
    
    if(action.type === 'token') {
      var newToken = action.tokenUser
        return newToken;
    } else {
        return token;
    }
  }
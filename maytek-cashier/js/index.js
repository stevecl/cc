import './rem.js'

const { createApp } = Vue

function queryParse(query){
  let queryText = "";
  for(let key in query){
    queryText += `${key}=${query[key]}&`;
  }
  return queryText.slice(0, -1);
};

createApp({
  setup() {
    const handleLogin = async () => {
      console.log('login')
      let clientId = '428a8310cd442757ae699df5d894f051'
      let test = await fetch('/api/test', {
        method: 'get'
      })
      test.json().then(json => {
        console.log('test json: ', json)
      })
      let res = await fetch("/prod-api/auth/login", {
        method: "POST",
        headers: {
          // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId,
          grantType: "passwordApp",
          username: "xinchong",
          password:"123456"
        })
      })
      res.json().then(json => {
        let { code, data, msg } = json
        let { access_token } = data
        localStorage.setItem('token', access_token)
        localStorage.setItem('clientId', clientId)
        console.log('json:', access_token)
        // location.href = './cashier.html'
      })
    }
    return {
      message: 'sadasssd',
      handleLogin
    }
  }

}).mount('#app')

console.log('createApp', createApp)
import axios from 'axios'

export const register = newUser => {
  return axios
    .post('/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {

      if(response.data == '1'){
        alert("email atau password anda salah")
      }else{
      localStorage.setItem('usertoken', response.data)
        return response.data
      }

    })
    .catch(err => {
      console.log(err)
    })
}
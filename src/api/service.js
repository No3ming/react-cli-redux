import axios from 'axios'

// Global axios defaults
axios.defaults.timeout = 3000
let status = false

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (status) {
    // window.location.replace('/login')
    return false
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  // if (response.data.code === 8) {
  //   if (response.config.headers.Token === 'unknown') {
  //     window.location.replace('/login')
  //   } else {
  //     window.location.replace('/login?status=tokenExpire')
  //   }
  //
  //   status = true
  // }
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

function transformResponse (response) {
  return Promise.all([response.status, response.statusText, response.data])
}

function validateStatus ([status, statusText, data]) {
  if (status >= 200 && status < 300) {
    return data
  } else {
    let error = new Error(statusText)
    error.status = status
    error.error_message = data
    return Promise.reject(error)
  }
}

function handleError (error) {
  console.log(error)
}

const getToken = () => {
  const token = localStorage.getItem('token')
  if (token && token.split(';')[1]) {
    return token ? (parseInt(token.split(';')[1].split('=')[1], 10) > new Date().getTime() ? token.split(';')[0] : '') : ''
  } else {
    return ''
  }
}
function getHeaders () {
  return {
    Token: getToken() || 'unknown'
  }
}

export default {
  get (url, params = {}) {
    const headers = getHeaders()
    return axios
      .get(url, {params, headers})
      .then(transformResponse)
      .then(validateStatus)
      .catch(error => handleError(error))
  },
  post (url, params = {}) {
    const headers = getHeaders()
    return axios
      .post(url, {...params}, {headers})
      .then(transformResponse)
      .then(validateStatus)
      .catch(error => handleError(error))
  }
}

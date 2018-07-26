import service from '../service'

export default {
  login (payload) {
    return service.post('/api/nstore/user/login', payload)
  },
  getTokenInfo (payload) {
    return service.post('/api/commonservice/user/token', payload)
  }
}
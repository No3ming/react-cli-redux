import { observable, action } from 'mobx'

const setToken = (token) => {
  localStorage.setItem('token', `${token};expire=${new Date().getTime() + 6 * 60 * 60 * 1000}`)
}

const getToken = () => {
  const token = localStorage.getItem('token')
  if (token && token.split(';')[1]) {
    return token ? (parseInt(token.split(';')[1].split('=')[1], 10) > new Date().getTime() ? token.split(';')[0] : '') : ''
  } else {
    return ''
  }
}
class AppStore {
  localStorageTokenInfo = JSON.parse(localStorage.getItem('tokenInfo') ? localStorage.getItem('tokenInfo') : JSON.stringify({}))
  @observable token = getToken()
  @observable tokenInfo = {
    userId: this.localStorageTokenInfo.userId || 0,
    username: this.localStorageTokenInfo.username || '',
    nickname: this.localStorageTokenInfo.nickname || '',
    type: this.localStorageTokenInfo.type || 0,
    enterpriseName: this.localStorageTokenInfo.enterpriseName || '',
    storeName: this.localStorageTokenInfo.storeName || '',
    isTaobaoStore: false
  }

  @action setToken (token) {
    setToken(token)
    // localStorage.setItem('token', token)
    this.token = token
  }

  @action setTokenInfo (tokenInfo) {
    localStorage.setItem('tokenInfo', JSON.stringify(tokenInfo))
    this.tokenInfo = tokenInfo
  }
}

export default new AppStore()
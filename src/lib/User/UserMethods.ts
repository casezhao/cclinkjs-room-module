import axios from 'axios'
import User from './User'
import { IUserAutoLogin, IUserToken, IUserInfo, IRoomUserLoginProtocol } from './UserInterface'

const ajax = axios.create({
  baseURL: 'https://cc.163.com/',
  timeout: 3000,
  withCredentials: true,
})

export default class UserMethods extends User {
  public static setCookie(CCTOKEN: string): void {
    User.cctoken = CCTOKEN
    ajax.defaults.headers.Cookie = `CCTOKEN=${User.cctoken}; Path=/; Domain=cc.163.com; HttpOnly;`
  }

  /**
   * @deprecated 尚未理清 web 登陆步骤前，暂不推荐使用
   */
  public static userAutoLogin(): Promise<IUserAutoLogin> {
    if (!ajax.defaults.headers.Cookie) {
      return Promise.reject('Invalid Cookie')
    }

    return new Promise((resolve, reject) => {
      ajax
        .get('/api/common/autologin')
        .then((response) => {
          if (response.status === 200) {
            const userAutoLogin = <IUserAutoLogin>response.data
            if (userAutoLogin.data.login) {
              User.loginStatus = true
              resolve(userAutoLogin)
            } else {
              reject(userAutoLogin)
            }
          }
          reject(`Http Error: ${response.status} ${response.statusText}`)
        })
        .catch((reason) => reject(reason))
    })
  }

  public static async userLogin(): Promise<void> {
    if (!ajax.defaults.headers.Cookie) {
      return Promise.reject('Invalid Cookie')
    }

    try {
      const userInfo = await UserMethods.getUserInfo()
      const userToken = await UserMethods.getUserToken()

      User.loginStatus = true
      User.loginInfo = {
        userInfo,
        userToken
      }
    } catch (error) {
      User.loginInfo = {
        userInfo: null,
        userToken: null
      }
      User.loginStatus = false
    }
  }

  public static async getUserToken(): Promise<IUserToken> {
    if (!ajax.defaults.headers.Cookie) {
      return Promise.reject('Invalid Cookie')
    }

    return new Promise((resolve, reject) => {
      ajax
        .get('/token')
        .then((response) => {
          if (response.status === 200) {
            const userToken = <IUserToken>response.data
            if (userToken.status) {
              resolve(userToken)
            } else {
              reject('Invalid CCTOKEN: ' + userToken.message)
            }
          } else {
            reject(`Http Error: ${response.status} ${response.statusText}`)
          }
        })
        .catch((reason) => reject(reason))
    })
  }

  public static async getUserInfo(): Promise<IUserInfo> {
    if (!ajax.defaults.headers.Cookie) {
      return Promise.reject('Invalid Cookie')
    }

    return new Promise((resolve, reject) => {
      ajax
        .get('user/info/?format=json')
        .then((response) => {
          if (response.status === 200) {
            const userInfo = <IUserInfo>response.data
            resolve(userInfo)
          } else {
            reject(`Http Error: ${response.status} ${response.statusText}`)
          }
        })
        .catch((reason) => reject(reason))
    })
  }

  public static roomUserLoginProtocol(token: string, urs: string): IRoomUserLoginProtocol {
    return {
      ccsid: User.id.send.ccsid,
      cccid: User.id.send.cccid,
      token,
      urs,
    }
  }
}

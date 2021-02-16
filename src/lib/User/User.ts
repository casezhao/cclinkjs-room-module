import { IUserInfo, IUserToken } from './UserInterface'

export default class User {
  public static id: {
    send: {
      ccsid: number
      cccid: number
    }
    recv: {
      ccsid: number
      cccid: number
    }
  }

  public static loginStatus: boolean
  public static loginInfo: {
    userInfo: IUserInfo | null
    userToken: IUserToken | null
  }
  public static cctoken: string

  id = {
    send: {
      ccsid: 2,
      cccid: 2,
    },
    recv: {
      ccsid: 2,
      cccid: 2,
    },
  }

  loginStatus = false
  loginInfo = {
    userInfo: null,
    userToken: null,
  }
  cctoken = ''
}

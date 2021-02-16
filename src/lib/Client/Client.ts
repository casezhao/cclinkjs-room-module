import { IClientInfo } from './ClientInterface'

export default class Client {
  static ccsid: number
  static cccid: number
  
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

  id = {
    send: {
      ccsid: 6144,
      cccid: 2,
    },
    recv: {
      ccsid: 6144,
      cccid: 2,
    },
  }
}

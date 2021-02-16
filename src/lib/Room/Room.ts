export default class Room {
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
      ccsid: 512,
      cccid: 1,
    },
    recv: {
      ccsid: 512,
      cccid: 32784,
    },
  }
}

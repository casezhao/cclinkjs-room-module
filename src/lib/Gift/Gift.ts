export default class Gift {
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
      ccsid: 41016,
      cccid: -1,
    },
    recv: {
      ccsid: 41016,
      cccid: 4,
    },
  }
}

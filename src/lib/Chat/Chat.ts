export default class Chat {
  public static ccsid: number
  public static cccid: number
  
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
      ccsid: 515,
      cccid: 1,
    },
    recv: {
      ccsid: 515,
      cccid: 32785,
    },
  }
}

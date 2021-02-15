import { ICCRecvJsonData } from '@hhui64/cclinkjs'
import Gift from './Gift'
import { IGiftMsg, IGiftMsgData } from './GiftInterface'

export default class GiftListener extends Gift {
  static EventName(): string {
    return `${GiftListener.ccsid}-${GiftListener.cccid}`
  }

  static EventListener(cb: (giftMsg: IGiftMsg) => void): (data: ICCRecvJsonData) => void {
    return (data: ICCRecvJsonData): void => {
      const giftMsgData = <IGiftMsgData>data
      const giftMsg = giftMsgData.data
      cb(giftMsg)
    }
  }
}

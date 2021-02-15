import { ICCRecvJsonData } from '@hhui64/cclinkjs'
import Chat from './Chat'
import { IChatMsg, IChatMsgData } from './ChatInterface'

export default class ChatListener extends Chat {
  static EventName(): string {
    return `${ChatListener.ccsid}-${ChatListener.cccid}`
  }

  static EventListener(cb: (chatMsg: IChatMsg) => void): (data: ICCRecvJsonData) => void {
    return (data: ICCRecvJsonData): void => {
      const chatMsgData = <IChatMsgData>data
      for (let index = 0; index < chatMsgData.msg.length; index++) {
        const chatMsg = chatMsgData.msg[index]
        cb(chatMsg)
      }
    }
  }
}

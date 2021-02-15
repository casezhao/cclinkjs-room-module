import { ICCRecvJsonData } from '@hhui64/cclinkjs'
import Room from './Room'
import { IUserJoinRoomMsg, IUserJoinRoomMsgData } from './RoomInterface'

export default class RoomListener extends Room {
  static EventName(): string {
    return `${RoomListener.id.recv.ccsid}-${RoomListener.id.recv.cccid}`
  }

  static EventListener(cb: (userJoinRoomMsg: IUserJoinRoomMsg) => void): (data: ICCRecvJsonData) => void {
    return (data: ICCRecvJsonData): void => {
      const userJoinRoomMsgData = <IUserJoinRoomMsgData>data
      for (let index = 0; index < userJoinRoomMsgData.data.msg_list.length; index++) {
        const userJoinRoomMsg = userJoinRoomMsgData.data.msg_list[index]
        cb(userJoinRoomMsg)
      }
    }
  }
}

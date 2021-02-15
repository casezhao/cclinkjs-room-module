import { ICCJsonData, ICCRecvJsonData } from '@hhui64/cclinkjs'

interface IUserJoinRoomMsg {
  name: string
  clienttype: number
  uid: number
  noble: number
  protect: number
  userlevel: number
  wealth: number
  [propName: string]: unknown
}

interface IUserJoinRoomMsgData extends ICCRecvJsonData {
  data: {
    cid: number
    msg_list: Array<IUserJoinRoomMsg>
    [propName: string]: unknown
  }
}

export { IUserJoinRoomMsg, IUserJoinRoomMsgData }

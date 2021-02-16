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

interface IJoinLiveProtocol extends ICCJsonData {
  account_id: string
  cid: number
  client_source: string
  client_type: number
  gametype: number
  motive: string
  recom_token: string
  roomId: number
  room_sessid: string
}

export { IUserJoinRoomMsg, IUserJoinRoomMsgData, IJoinLiveProtocol }

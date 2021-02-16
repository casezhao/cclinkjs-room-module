import Room from './Room'
import { v4 as uuidv4 } from 'uuid'
import { IJoinLiveProtocol } from './RoomInterface'

export default class RoomMethods extends Room {
  static ccsid = 512
  static cccid = 1

  public static joinLiveProtocol(
    roomId: number,
    cid: number,
    gametype: number,
    account_id?: string,
    room_sessid?: string
  ): IJoinLiveProtocol {
    return {
      ccsid: RoomMethods.ccsid,
      cccid: RoomMethods.cccid,
      account_id: account_id || `${uuidv4()}@web.cc.163.com`,
      cid,
      client_source: '-2',
      client_type: 9000,
      gametype,
      motive: 'join',
      recom_token: '-2',
      roomId,
      room_sessid: room_sessid || uuidv4().toUpperCase(),
    }
  }
}

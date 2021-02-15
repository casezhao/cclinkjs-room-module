import { ICCJsonData, ICCRecvJsonData } from '@hhui64/cclinkjs'

interface IGiftListData {
  gametype_category_gifts?: unknown
  version?: number
  gametype_gifts?: unknown
  conf: Array<{
    name: string
    saleid: number
    [propName: string]: unknown
  }>
  coopgame_gift?: unknown
  default_category_gifts?: unknown
  [propName: string]: unknown
}

interface IGiftMsg {
  active: unknown
  badge: unknown
  combo: number
  comboid: string
  fromid: number
  fromnick: string
  frompurl: string
  gametype: number
  num: number
  saleid: number
  toid: number
  tonick: string
  topcid: number
  wealth: number
  [propName: string]: unknown
}

interface IGiftMsgData extends ICCRecvJsonData {
  data: IGiftMsg
}

export { IGiftMsg, IGiftMsgData }

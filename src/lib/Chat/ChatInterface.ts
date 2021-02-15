import { ICCJsonData, ICCRecvJsonData } from '@hhui64/cclinkjs'

interface IChatMsg {
  '1'?: string
  '3'?: string
  '4': string
  /** 发言时间 */
  '5'?: string
  '7'?: unknown
  '9'?: string
  '99': string
  '197': string
  [propName: string]: unknown
}

interface IChatMsgData extends ICCRecvJsonData {
  msg: Array<IChatMsg>
}

export { IChatMsg, IChatMsgData }

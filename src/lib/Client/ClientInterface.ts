import { ICCJsonData, ICCRecvJsonData } from '@hhui64/cclinkjs'

interface IClientInfo extends ICCJsonData {
  account_id: string
  client_type: number
  device_token: string
  macAdd: string
  memory: number
  page_uuid: string
  system: string // win
  update_req_info?: {
    22: number
    23: number
    24: string // web
    25: string
    29: string
    30: string
    31: string
    39: number
  }
  version: number
  'web-cc': number
  webccType: number // 4000
}

export { IClientInfo }

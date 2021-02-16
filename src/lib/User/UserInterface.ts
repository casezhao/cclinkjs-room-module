import { ICCJsonData, ICCRecvJsonData } from '@hhui64/cclinkjs'

interface IUserAutoLogin {
  msg: string
  code: number
  data: {
    game_redirect: string
    login: boolean
    ban_result: string
    next: string
  }
  time: number
}

interface IUserInfo {
  uinfo: {
    is_mobile_urs?: number
    cuteidrecycletime?: number
    ccid: number
    can_close?: number
    mobile?: string
    cquan?: {
      paid: number
      free: number
      ent_coin: number
    }
    can_recruit?: boolean
    urs: string
    wealth_level?: {
      nextlevelexp: number
      curlevelexp: number
      uid: number
      exp: number
      level: number
    }
    realname_status?: number
    urs_login?: number
    anchor_level?: {
      uid: string
      sublevel: number
      mainlevel: number
      exp: number
      nextlevelexp: number
      curlevelexp: number
    }
    cuteidgrade?: number
    pop_window?: number
    sign_type?: number
    update_purl_status?: number
    tips?: string
    purl: string
    nickname: string
    uid: number
  }
}

interface IRoomUserLoginProtocol extends ICCJsonData {
  token: string
  urs: string
}

interface IUserToken extends IRoomUserLoginProtocol {
  status: boolean
  message?: string
}

export { IRoomUserLoginProtocol, IUserAutoLogin, IUserInfo, IUserToken }
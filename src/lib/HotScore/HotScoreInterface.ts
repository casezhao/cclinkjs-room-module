import { ICCJsonData, ICCRecvJsonData } from '@hhui64/cclinkjs'

interface IHotScoreData extends ICCRecvJsonData {
  hot_score: number
  usercount: number
  roomId: number
}

export { IHotScoreData }

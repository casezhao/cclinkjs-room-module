import { ICCRecvJsonData } from '@hhui64/cclinkjs'
import HotScore from './HotScore'
import { IHotScoreData } from './HotScoreInterface'

export default class HotScoreListener extends HotScore {
  static ccsid = 6144
  static cccid = 10

  static EventName(): string {
    return `${HotScoreListener.ccsid}-${HotScoreListener.cccid}`
  }

  static EventListener(cb: (hotScoreData: IHotScoreData) => void): (data: ICCRecvJsonData) => void {
    return (data: ICCRecvJsonData): void => {
      const hotScoreData = <IHotScoreData>data
      cb(hotScoreData)
    }
  }
}

import Client from './Client'
import { IClientInfo } from './ClientInterface'
import { v4 as uuidv4 } from 'uuid'

export default class ClientMethods extends Client {
  static ccsid = 6144
  static cccid = 2

  public static clientInfoProtocol(account_id?: string, uuid?: string): IClientInfo {
    const _uuid = uuid || uuidv4()

    const clientInfo = {
      ccsid: ClientMethods.ccsid,
      cccid: ClientMethods.cccid,
      account_id: account_id || `${_uuid}@web.cc.163.com`,
      client_type: 9000,
      device_token: `${_uuid}@web.cc.163.com`,
      macAdd: `${_uuid}@web.cc.163.com`,
      memory: 1,
      page_uuid: `${_uuid}`,
      system: 'win',
      update_req_info: {
        22: 1080,
        23: 1920,
        24: 'web',
        25: 'Mac OS 10.15.3',
        29: '163_cc',
        30: '',
        31: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
        39: -2,
      },
      version: 1,
      'web-cc': Date.now(),
      webccType: 9000, // 4000
    }

    return clientInfo
  }
}

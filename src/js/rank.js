import jsonp from 'js/jsonp'
import {commonParams, options} from 'api/jsonpconfig'

export function getRank () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1,
    notice: 0,
    uin: 0
  })

  return jsonp(url, data, options)
}

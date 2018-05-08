import jsonp from 'js/jsonp'
import {commonParams, options} from 'api/jsonpconfig'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1,
    notice: 0,
    uin: 0
  })

  return jsonp(url, data, options)
}

export function getDisList () {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/p.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

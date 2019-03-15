const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}
function fib(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}
/**
   * methods： 请求方式
   * url: 请求地址
   * data： 要传递的参数
   * callback： 请求成功回调函数
   * errFun： 请求失败回调函数
   */
function appRequest(methods, url, data, callback, errFun){
  wx.request({
    url: url,
    method: methods,
    header: {
      'content-type': methods == 'GET' ? 'application/json' : 'application/x-www-form-urlencoded'
    },
    dataType: 'json',
    data: data,
    success: function (res) {
      callback(res.data);
    },
    fail: function (err) {
      errFun(err);
    }
  })
}

module.exports = {
  formatTime: formatTime,
  formatLocation,
  fib,
  appRequest
}

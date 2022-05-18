function getUrlParams(name: string) {
  // 获取问号后的字符串
  const query = window.location.hash.substring(1)
  const paramArr = query.split('&')
  for (let i = 0; i < paramArr.length; i++) {
    const pair = paramArr[i].split('=')
    if (pair[0] === name) {
      return pair[1]
    }
  }
  return false
}
export default {
  getUrlParams
}

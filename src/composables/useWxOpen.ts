import wx from 'weixin-js-sdk'

/**
 * 为当前页配置微信 JS-SDK 签名
 */
export async function useWxConfig() {
  // 请求获取签名信息
  const {
    data: {
      value: { code, data: res, msg },
    },
  } = await useFetch(
    `${import.meta.env.VITE_BASE_URL}/api/wx/web/grant/wx/config?url=${
      location.href.split('#')[0]
    }`,
  )
    .post()
    .json()

  if (code !== 'success') {
    alert('签名失败！')
    return console.error('签名失败！', msg)
  }

  const { appId, nonceStr, signature, timestamp } = res
  wx.config({
    // debug: true, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
    appId, // 必填，公众号的唯一标识
    timestamp, // 必填，生成签名的时间戳
    nonceStr, // 必填，生成签名的随机串
    signature, // 必填，签名
    jsApiList: ['updateAppMessageShareData'], // 必填，需要使用的JS接口列表
    openTagList: ['wx-open-launch-weapp'], // 可选，需要使用的开放标签列表，例如 ['wx-open-launch-weapp']
  })

  wx.ready(() => {})

  wx.error((res: { errMsg: string }) => {
    console.error('失败:', res)
    // config 信息验证失败会执行 error 函数，如签名过期导致验证失败，具体错误信息可以打开 config 的 debug 模式查看，也可以在返回的 res 参数中查看，对于 SPA 可以在这里更新签名。
  })
}

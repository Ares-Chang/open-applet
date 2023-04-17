# open-applet

快速生成通过 `H5` 跳转打开微信小程序模板。

此方案通过微信提供的接口生成 [URL Scheme](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/url-scheme/generateScheme.html) 进行跳转。

详情可以参考 [在 H5 中打开小程序](https://areschang.top/web/uni-app/wx-URL-Scheme.html)

## 使用

1. 需自行提供后端接口
2. 配置要跳转小程序名称及图标
3. 替换要跳转小程序 `username` (微信小程序后台查看)。
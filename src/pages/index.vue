<script setup lang="ts">
const isMobile = navigator.userAgent.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|IEMobile)/i,
)

/**
 * 跳转微信 打开小程序
 * @see {@link https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-scheme.html URL Scheme Document}
 */
async function goTo() {
  const {
    data: {
      value: { code, data: href, msg },
    },
  } = await useFetch(
    `${import.meta.env.VITE_BASE_URL}/api/wx/web/grant/urlscheme/generate`,
  )
    .post()
    .json()
  if (code !== 'success')
    return alert(msg)

  window.location.href = href
}
isMobile && goTo() // 首次进入直接导航至小程序
</script>

<template>
  <template v-if="isMobile">
    <div flex="~ wrap" justify-center translate-y-26>
      <img w-16 rd-50 src="/icon.png" alt="">
      <span w-full py-2>粮谷E+</span>
      <div flex text="sm neutral">
        <svg
          width="14"
          height="14"
          viewBox="0 0 1025 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M740.672 37.504c156.352 0 283.52 115.584 283.52 258.496 0 44.416-13.056 87.872-36.608 127.04-35.648 57.216-92.672 99.584-161.664 119.744a161.408 161.408 0 0 1-45.184 7.36 52.8 52.8 0 0 1-53.76-52.928c0-29.76 23.68-52.864 53.76-52.864 2.112 0 6.528 0 11.904-2.048 46.336-12.8 82.944-39.168 103.424-74.24 13.952-22.144 20.48-46.72 20.48-72.064 0-83.84-78.72-152.512-174.72-152.512a197.76 197.76 0 0 0-94.72 24.32c-50.816 28.544-80.896 76.16-80.896 128.192v443.904c0 89.984-50.752 172.672-134.848 219.328-45.184 25.408-96 38.272-147.712 38.272-156.288 0-283.52-115.648-283.52-258.56 0-44.352 13.12-87.872 36.608-127.04 35.648-57.216 92.736-99.584 161.664-119.68 19.328-5.312 32.384-7.36 45.184-7.36 30.272 0 53.824 23.36 53.824 52.864a52.8 52.8 0 0 1-53.76 52.928c-2.176 0-6.592 0-11.904 2.048-46.4 13.76-82.944 40.32-103.424 74.176-14.016 22.208-20.48 46.72-20.48 72.128 0 83.84 78.72 152.448 175.616 152.448a197.76 197.76 0 0 0 94.784-24.256c50.752-28.608 80.832-76.224 80.832-128.192V296.192c0-89.984 50.752-172.608 134.848-219.328a283.52 283.52 0 0 1 146.752-39.36z"
            fill="#b2b2b2"
            p-id="3432"
          />
        </svg>
        <em m-l-1>小程序</em>
      </div>
    </div>

    <div absolute w-full bottom-10>
      <button
        block
        w-200px
        h-45px
        text-center
        text-17px
        m="auto"
        border-none
        rd-4px
        color-white
        bg="#07c160"
        @click="goTo"
      >
        前往微信打开
      </button>

      <p text="sm neutral" mt-2>
        等待超时未跳转时，可点击前往微信打开
      </p>
    </div>
  </template>
  <div v-else h-100vh lh-80vh select-none>
    请使用手机打开网页链接
  </div>
</template>

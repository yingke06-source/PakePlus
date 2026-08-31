window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});const hookClick = (e) => {
  const origin = e.target.closest('a')
  const isBaseTargetBlank = document.querySelector('head base[target="_blank"]')
  console.log('origin', origin, isBaseTargetBlank)
  if (
    (origin && origin.href && origin.href.length>0)
  ) {
    e.preventDefault()
    let realUrl = origin.href
    // 移除wloc8.com中转跳转
    if(realUrl.includes('wloc8.com')){
       const params = new URLSearchParams(realUrl.split('?')[1])
       realUrl = params.get('url') || params.get('redirect') || realUrl
    }
    console.log('handle origin', realUrl)
    location.href = realUrl
  } else {
    console.log('not handle origin',)
  }
}
document.addEventListener('click',hookClick,true)
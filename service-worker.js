if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-cab25c8f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.aef9919b.css",revision:"120a54d59644ff807b37de368f0c9484"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/20.a3fcc597.js",revision:"13f90795078eb8784264c786f29897f0"},{url:"assets/js/21.0abb26fe.js",revision:"5db261426f81f86d855f82a570faafd4"},{url:"assets/js/22.39ecb1b6.js",revision:"84456b44f1558c7abb50f7d41c9d6d4c"},{url:"assets/js/23.2267df1e.js",revision:"bc32be46010785f10ec13da07a278d2e"},{url:"assets/js/24.b90b5b93.js",revision:"e3edcd36e54f575e106498cee66df970"},{url:"assets/js/app.dff5b1f4.js",revision:"326f362e3f812afe5c1fe6c93264d25f"},{url:"assets/js/layout-Blog.5bc58fc2.js",revision:"8a9dc45889cfe7eeb365ce2deb00d5a3"},{url:"assets/js/layout-Layout.68b7c274.js",revision:"c2f290c6390011ce3a599fb3b2adddda"},{url:"assets/js/layout-NotFound.f5ccb5fa.js",revision:"388834e16c2118b2a8d933d1c978288b"},{url:"assets/js/layout-Slide.02856527.js",revision:"9b9d0cd2f884da70d75e5538e0aa5cf1"},{url:"assets/js/page-安装.fc518b2f.js",revision:"e7f8c85781043b3d01ba9310fcb73349"},{url:"assets/js/page-个人介绍.6cd912fd.js",revision:"5633b45905caee608707a3b31c7ca5b5"},{url:"assets/js/page-工具集推荐.57d06f03.js",revision:"3408067149a65fbc367294821476d342"},{url:"assets/js/page-教程.cba3166c.js",revision:"31d3ffb58ad07ccd388ea2a918de2d69"},{url:"assets/js/page-介绍.175a6224.js",revision:"10987086e6afdc466d7beeafebf233b9"},{url:"assets/js/page-实例.a21dc3a4.js",revision:"6e4ce8b76a81ab855a50c39a636b04d4"},{url:"assets/js/page-Home.42c2bd50.js",revision:"5bfe0da03c2eb42edaabac08310f2d3a"},{url:"assets/js/vendors~flowchart.333ace31.js",revision:"d7b696d5f145802a8fad57c03e0cd4f3"},{url:"assets/js/vendors~layout-Blog~layout-Layout.b3cff166.js",revision:"232ce33938e9ebc95c6effccea2bb336"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.f2fca602.js",revision:"dfb1e03944cf624a89eb8ec4db255c19"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.a70f3c09.js",revision:"76c2d491b337d81dee8608d202ac88d4"},{url:"assets/js/vendors~photo-swipe.e4b6d60f.js",revision:"dc56cfca764516354e409c1af55e93f7"},{url:"assets/js/vendors~reveal.ddcef5ae.js",revision:"0b0fcbd5f86771b5a22f664b7f112ccd"},{url:"assets/js/vendors~valine.43a6540e.js",revision:"c3f7c5f99be4ae90912707f13ed819c4"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"5f31ef79a1ebe7bcb1bab95f5490ca4c"},{url:"about/author/index.html",revision:"35212d9c5f68b366d5517f1bc9b43ca0"},{url:"article/index.html",revision:"9f1eb020a3754b9ab4967cd24caf8616"},{url:"category/index.html",revision:"be593a6e05c98f0c67ae09dce87275d7"},{url:"category/Vue/index.html",revision:"383529ded273d29a44e7a1c26c22247f"},{url:"encrypt/index.html",revision:"3acd64145416eb7ef6e761881df79d97"},{url:"index.html",revision:"6dc0e1101c6f0e67dced08d46f669c93"},{url:"markmap/markmap.html",revision:"574a9c5b109ef1e6cba785f4b931fbd8"},{url:"slide/index.html",revision:"be49ef5b96284ed034e2a59c5e4dfd03"},{url:"star/index.html",revision:"d4de478734b088b47a4e5cdb1c619fa2"},{url:"tag/源码解析/index.html",revision:"587bad641a098e6c6f223c840418e744"},{url:"tag/index.html",revision:"fef50a6257941df51d3191513d1dff8a"},{url:"tag/Vue/index.html",revision:"a7407b574ae0fca0c51d64178c97fe90"},{url:"timeline/index.html",revision:"f3b73ea9249615c683f738bd0d17a1cc"},{url:"vue/guide/index.html",revision:"143797581b55508266eae381a7d09bcd"},{url:"vue/guide/installation/index.html",revision:"60b6f4dbabd3abf139d9c93480300c5c"},{url:"vue/guide/Instance/index.html",revision:"844d3ca42d421579f94d809a2e98213b"},{url:"vue/guide/introduction/index.html",revision:"ba1fd3354b701628820b2385a841dcda"},{url:"vue/index.html",revision:"901ce59ef3a5771dcbf26c238ada5c05"},{url:"vue/tools/index.html",revision:"fe07f7ad2a852fea15d54fa8abe521e9"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});

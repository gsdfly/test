<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html,body ,#app{
  width: 100%;
  height: 100%;
  font-size: 24px;
  font-family:PingFangSC-Regular;
  font-weight:400;
}
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, p, pre, q, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
ul,li{
  list-style: none;
}
input{
  border: none;
  outline: none;
}
body{
  padding-bottom: constant(safe-area-inset-bottom);
}

</style>

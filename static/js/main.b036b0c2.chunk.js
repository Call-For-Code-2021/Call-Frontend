(this["webpackJsonpcall-front"]=this["webpackJsonpcall-front"]||[]).push([[0],{37:function(A,e,t){},47:function(A,e,t){},48:function(A,e,t){},75:function(A,e,t){},77:function(A,e,t){},79:function(A,e,t){},80:function(A,e,t){},81:function(A,e,t){"use strict";t.r(e);var n=t(1),c=t(39),a=t.n(c),s=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,82)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;t(A),n(A),c(A),a(A),s(A)}))},i=(t(47),t(5)),r=(t(48),t.p+"static/media/home.031c88ab.png"),j=t.p+"static/media/loupe.3e402355.png",o=t.p+"static/media/leaf.c2f375dd.png",l=t.p+"static/media/user.ae3a914b.png",d=t(0);var h=function(){return Object(d.jsx)("div",{className:"nav-section",children:Object(d.jsxs)("div",{className:"nav-container",children:[Object(d.jsx)("div",{className:"nav-child",children:Object(d.jsx)(i.b,{className:"nav-link",to:"/map_main",children:Object(d.jsx)("img",{src:r,alt:"Home",id:"PageIcon"})})}),Object(d.jsx)("div",{className:"nav-child",children:Object(d.jsx)(i.b,{className:"nav-link",to:"/query",children:Object(d.jsx)("img",{src:j,alt:"Search",id:"PageIcon"})})}),Object(d.jsx)("div",{className:"nav-child",children:Object(d.jsx)(i.b,{className:"nav-link",to:"/notice",children:Object(d.jsx)("img",{src:o,alt:"Leaf",id:"PageIcon"})})}),Object(d.jsx)("div",{className:"nav-child",children:Object(d.jsx)(i.b,{className:"nav-link",to:"/mypage",children:Object(d.jsx)("img",{src:l,alt:"User",id:"PageIcon"})})})]})})},b=t(12),g=t(11),O=t(2),u=t(10),p=t.n(u),w=t(21);var x,m,v=function(){var A=new w.a,e=Object(n.useState)({userid:"",userpw:""}),t=Object(O.a)(e,2),c=t[0],a=t[1],s=c.userid,r=c.userpw,j=function(A){var e=A.target,t=e.value,n=e.name;a(Object(g.a)(Object(g.a)({},c),{},Object(b.a)({},n,t)))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{name:"userid",value:s,onChange:j}),Object(d.jsx)("input",{name:"userpw",value:r,type:"password",onChange:j}),Object(d.jsx)("button",{onClick:function(){console.log(s),console.log(r),p()({method:"post",url:"https://charong.herokuapp.com/auth/login",data:{id:s,password:r}}).then((function(e){A.remove("UTG",{path:"/"}),console.log(e.status),console.log(e.data),A.set("UTG",e.data.jwt_token,{path:"/"}),console.log(A.get("UTG")),alert(s+"\ub2d8 \ub85c\uadf8\uc778\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")})).catch((function(A){console.log(A),400===A?(console.log("\ub85c\uadf8\uc778 \ud615\uc2dd \uc624\ub958"),alert("\ub85c\uadf8\uc778 \ud615\uc2dd\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")):401===A&&(console.log("\ub85c\uadf8\uc778 \uc2e4\ud328"),alert("\ub85c\uadf8\uc778 \ud2b8\ub798\ud53d \uc99d\uac00\ub85c \ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.\n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc2ed\uc2dc\uc624."))}))},children:"Login"}),Object(d.jsx)(i.b,{className:"nav-link",to:"/register",children:Object(d.jsx)("button",{children:"Register"})}),Object(d.jsx)(i.b,{className:"nav-link",to:"/getuserinfo",children:Object(d.jsx)("button",{children:"Userinfo"})})]})},C=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"query_section",children:Object(d.jsx)(i.b,{className:"nav-link",to:"/map_main",children:"\ub9f5\uc73c\ub85c"})}),Object(d.jsx)(v,{})]})},Q=t(18),f=(t(75),t(19)),E=window.kakao,I=f.a.div(x||(x=Object(Q.a)(["\nwidth: auto;\nheight: 100vh;\n"]))),M=function(A){var e=A.searchPlace,t=Object(n.useState)([]),c=Object(O.a)(t,2),a=(c[0],c[1]);return Object(n.useEffect)((function(){var A=new E.maps.InfoWindow({zIndex:1}),t=document.getElementById("map"),n={center:new E.maps.LatLng(37.57813143829081,126.9773018596565),level:5},c=new E.maps.Map(t,n);if(navigator.geolocation)navigator.geolocation.getCurrentPosition((function(A){var e=A.coords.latitude,t=A.coords.longitude;s(new E.maps.LatLng(e,t),'<div style="padding:5px;">\ud604\uc704\uce58</div>')}));else{s(new E.maps.LatLng(37.5677463677699,126.9153946742084),"\uc704\uce58 \uc815\ubcf4 \uc0ac\uc6a9\uc774 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4.\nLocation information is not available.")}function s(A,e){var t=new E.maps.Marker({map:c,position:A}),n=e;new E.maps.InfoWindow({content:n,removable:!0}).open(c,t),c.setCenter(A)}function i(e){var t=new E.maps.Marker({map:c,position:new E.maps.LatLng(e.y,e.x)});E.maps.event.addListener(t,"click",(function(){A.setContent('<div id="CSPing"><span id="pl_name">'+e.place_name+"</span></div>"),A.open(c,t)}))}(new E.maps.services.Places).keywordSearch(e,(function(A,e,t){if(e===E.maps.services.Status.OK){for(var n=new E.maps.LatLngBounds,s=0;s<A.length;s++)i(A[s]),n.extend(new E.maps.LatLng(A[s].y,A[s].x));c.setBounds(n),a(A)}else{if(e===E.maps.services.Status.ZERO_RESULT)return void alert("\uac80\uc0c9 \uacb0\uacfc\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\nSearch results do not exist.");if(e===E.maps.services.Status.ERROR)return void alert("\uac80\uc0c9 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\nAn error occurred while searching.")}}))}),[e]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(I,{id:"map"})})},D=(t(37),t(38),function(){var A=Object(n.useState)(""),e=Object(O.a)(A,2),t=e[0],c=e[1],a=Object(n.useState)(""),s=Object(O.a)(a,2),i=s[0],r=s[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{id:"searchP",children:Object(d.jsxs)("form",{className:"d-flex",id:"inputForm",onSubmit:function(A){A.preventDefault(),r(t),c("")},children:[Object(d.jsx)("input",{className:"form-control me-2",id:"searchIn",type:"search",placeholder:"\uc7a5\uc18c\ub97c \uac80\uc0c9\ud558\uc138\uc694. Search for a place.","aria-label":"Search",onChange:function(A){c(A.target.value)},value:t}),Object(d.jsx)("button",{className:"btn btn-outline-success",id:"searchbtn",type:"submit",children:"Search"})]})}),Object(d.jsx)(M,{searchPlace:i})]})}),Y=(t(77),t.p+"static/media/call.f12b83b5.png"),N=t.p+"static/media/ping.40a225b7.png",B=t.p+"static/media/bt_main.2c6eb907.jpg",G=window.kakao,P=function(A){var e=A.searchPlace,t=Object(n.useState)([]),c=Object(O.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){(new G.maps.services.Places).keywordSearch(e,(function(A,e,t){if(e===G.maps.services.Status.OK)!function(A){var e,t=document.getElementById("pagination"),n=document.createDocumentFragment();for(;t.hasChildNodes();)t.removeChild(t.lastChild);for(e=1;e<=A.last;e++){var c=document.createElement("a");c.href="#",c.innerHTML=e,c.className="page-count",e===A.current?c.className="on":c.onclick=function(e){return function(){A.gotoPage(e)}}(e),n.appendChild(c)}t.appendChild(n)}(t),s(A);else{if(e===G.maps.services.Status.ZERO_RESULT)return void alert("\uac80\uc0c9 \uacb0\uacfc\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\nSearch results do not exist.");if(e===G.maps.services.Status.ERROR)return void alert("\uac80\uc0c9 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\nAn error occurred while searching.")}}))}),[e]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{id:"place_page_bg",children:Object(d.jsxs)("div",{id:"place_page",children:[Object(d.jsx)("img",{src:B,id:"bt_main"}),Object(d.jsx)("button",{onClick:function(){return document.getElementById("place_page_bg").style.visibility="hidden"},id:"X_box",children:Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAANlklEQVR4nO3dO24c1xIG4DKhRBAUMFNKeAPahhkydHJXww2QsYIL8HJTgnOmgqGIBsZBzwCXFB/z6POs7wNOYshUz+lT9RfEmekIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5vRb6wugus8R8XtEfImIT9v/9jMiHiLir4j4u9F1AeWpf0jkY0RcRcS3iPgeEZt31vftn73a/r/AuNQ/JHQRETcR8SPeL/rX1o/tz7iofO3AadQ/JHQeEbcR8RjHF/7z9bj9mecVXwdwOPUPSV3G8ru8tQr/+XrY/h1Af9Q/JHQWEddRrvCfr+vt3wm0p/4hqQ8RcRf1in+37rZ/N9CO+oekzqJN8e/W/0ITgFY+xFKDrer/LvxLADRT85/9DAHQj9bhv1vXpV8o8KvLaF/8hgCor5fw3y1vDISKzqPsu30NAdCn3sJ/E0sv8hFBqOQ22he9IQDq6jH8d+u24OsGti5i3S/5MARA/3oO/00sPck3BkJhN9G+2A0BUE/v4b9bN6U2AFgeznHKd3sbAmAso4T/Jpbe5AFCUMhVtC9yQwDUMVL479ZVkZ0A4lu0L3BDAJQ3YvhvYulRQAH7PM+7x2UIgP2NGv6bWHoUsLLP0b64DQFQ1sjhv1ufV98VSO5rtC9sQwCUM0P4b2LpVQzAgxzG8aX1Bazgz4j4bxgC4LkPsdTGn60vZAUz9KoUDADj+NT6AlZiCICnZgr/iHl61fQMALRgCIDFbOHPQAwA4/jZ+gJWZgggu1nDf7ZeBc3N8CZAbwyExSxv+PMmQKhg9I8BGgJgMXP4b8LHAKGIUb8IyBAAi9nD3xcBQSEjfhWwIQAWs4f/JnwVMBQz2sOADAGwyBD+m/AwIChmpMcBGwJgkSX8PQ4YCruJ9oVuCID9ZAn/TSy9CSjoIiIeo32xGwLgbZnC/zGW3gQUdhvtC94QAK/LFP6bWHoSUMF5RDxE+6I3BMCvsoX/Qyw9CajkMtoXviEAnsoW/puI+GOVnQMOch3ti98QAIuM4X+9ys4BBzuLiLto3wQMAWSXMfzvwgPloKmMjccQQE/UINCMBgRtqD2gOY0I6lJzQDc0JKhDrQHd0ZigLDUGdEuDgjLUFtA9jQrWpaaAYWhYsA61BAxH44LTqCFgWBoYHEftAMPTyOAwagaYhoYG+1ErwHQ0NnibGgGmpcHBy9QGMD2NDp5SE0AaGh4s1AKQjsZHdmoASEsDJCtnH0hPIyQbZx5gS0MkC2cd4BmNkdk54wCv0CCZlbMN8A6Nktk40wB70jCZhbMMcCCNk9E5wwBH0kAZlbMLcCKNlNE4swAr0VAZhbMKsDKNld45owCFaLD0ytkEKEyjpTfOJEAlGi69cBYBKtN4ac0ZBGhEA6YVZw+gMY2Y2pw5gE5oyNTirAF0RmOmNGcMoFMaNKU4WwCd06hZmzMFMAgNm7U4SwCD0bg5lTMEMCgNnGM5OwCD08g5lDMDMAkNnX05KwCT0dh5jzMCMCkNntc4GwCT0+h5zpkASELDZ8dZAEhG48cZAEhKAOTl3gMkJwjycc8BiAiBkIl7DcATgmF+7jEALxIQ83JvAXiToJiPewrAXgTGPNxLAA4iOMbnHgJwFAEyLvcOgJMIkvG4ZwCsQqCMw70CYFWCpX/uEQBFCJh+uTcAFCVo+uOeAFCFwOmHewFAVYKnPfcAgCYEUDv2HoCmBFF99hyALgikeuw1AF0RTOXZYwC6JKDKsbcAdE1Qrc+eAjAEgbUeewnAUATX6ewhAEMSYPZO+AMkJcjsmfAHSEqg2SvhD5CUYLNHwh8gKQFnb4Q/QFKCzp4If4CkBJ69EP4ASQk+ewBAUpkDMPNrB4CUQXi/Xa2vQ/gD0FTGISDTEv4AvMoQMOcS/gC8yxAw1xL+AOzNEDDHEv4AHMwQMPYS/gAczRAw5hL+AJzMEDDWEv4ArMYQMMYS/gCszhDQ9xL+ABRjCOhzCX8AijME9LWEPwDVGAL6WMIfgOoMAcIfgKQMAcIfgKQMAcIfgKQMAcIfgKQMAcIfgKQMAcIfgKQMAcIfgKQMAcIfgKQMAcIfgKQMAcIfgKQMAcIfgKQMAcIfgKQMAcIfgKQMAcIfgKQMAcIfgKQMAcIfgKSyDwHCH4C0PkTEfbQP49rrPoQ/NHXW+gIAACATvwLwrwAAJJM9/A0BAKQj/A0BACQj/A0BACQj/A0BACQj/A0BACQj/A0BACQj/A0BACQj/A0BACQj/A0BACQj/A0BACQj/A0BACQj/A0BACQj/A0BACQj/A0BACQj/A0BACQj/A0BACQj/PtYhgAAqhH+fS1DAADFCf8+lyEAgGKEf9/LEADA6oT/GMsQAMBqhP9YyxAAwMmE/5jLEADA0YT/2MsQAMDBhP8cyxAAwN6E/1zLEADAu4T/nMsQAMCrhP/cyxAAwC8yhv/9drW+DkMAAE1kDP9dEGZ+7QAkJgDtAQDJCD57YQgASEbg2RNDAEAygs7eGAIAkhFw9sgQAJCMYLNXhgCAZASaPTMEACQjyOydIQAgGQF2OnsIwFAE13rsJQBDEFjrs6cAdE1QlWNvAeiSgCrPHgPQFcFUj70GoAsCqT57DkBTgqgdew9AEwKoPfcAgKoETz/cCwCqEDj9cU8AKErQ9Mu9AaAIAdM/9wiAVQmWcbhXAKxCoIzHPQPgJIJkXO4dAEcRIONzDwE4iOCYh3sJwF4ExnzcUwDeJCjm5d4C8CIBMT/3GIAnBEMe7jUAESEQMnLPAZITBHm59wBJCQCcAYBkNH52nAWAJDR8nnMmACan0fMaZwNgUho873FGACajsbMvZwVgEho6h3JmAAankXMsZwdgUBo4p3KGAAajcbMWZwlgEBo2a3OmADqnUVOKswXQKQ2a0pwxgM5ozNTirAF0QkOmNmcOoDGNmFacPYBGNGBacwYBKtN46YWzCFCJhktvnEmAwjRaeuVsAhSiwdI7ZxRgZRoro3BWAVaioTIaZxbgRBopo3J2AY6kgTI6ZxjgQBons3CWAfakYTIbZxrgHRols3K2AV6hQTI7ZxzgGY2RLJx1gC0NkWyceSA9jZCsnH0gLQ2Q7NQAkI7GBwu1AKSh4cFTagKYnkYHL1MbwLQ0OHibGgGmo7HBftQKMA0NDQ6jZoDhaWRwHLUDDEsDg9OoIWA4GhesQy0Bw9CwYF1qCuieRgVlqC2gWxoUlKXGgO5oTFCHWgO6oSFBXWoOaE4jgjbUHtCMBgRtqUGgurOIuIv2zUDjIbuMQ8BdLD0IaOA62jcB4Q+LjEPA9So7BxzkMtoXv/CHpzIOAZer7Bywl/OIeIj2hS/84VfZhoCHWHoSUMFttC964Q+vyzYE3K6zbcBbLiLiMdoXvPCHt2UaAh5j6U1AQTfRvtiFP+wn0xBws9KeAS/4GBE/on2hC3/YX5Yh4EcsPQoo4CraF7nwh8NlGQKu1tow4Klv0b7AhT8cJ8MQ8G213QKe+B7tC1z4w/FmHwK+r7dVwM7naF/cwh9ON/sQ8Hm9rQIiIr5G+8IW/rCOmYeAryvuEwV5kMM4vrS+gALuI+I/EfFP6wuByv6J5ezft76QAmbsVVMyAIzjU+sLWJnwJ7tZh4DZetW0DAC0IPxhMesQwAAMAOP42foCViL84anZhoBZehV0Y4Y3AXrDH7xuljcGehMgrGz0jwEKf3jfDEOAjwFCAaN+EZDwh/2NPAT4IiAoZMSvAhb+cLhRhwBfBQyFjPYwIOEPxxtxCPAwIChkpMcBC3843UhDgMcBQ2E30b7QhT/UM8oQcFNqA4DFRUQ8RvtiF/5QT+9DwGMsvQko7DbaF7zwh7p6HgJuC75u4P+cR8RDtC964Q919TgEPMTSk4BKLqN94Qt/qK+3IeCPsi8XeMl1tC9+4Q/19TIEXJd+ocDLziLiLoQ/ZNR6CLgLD5SDpj5EmyHgLoQ/tKb+IbmzqPvrgOsw+UMv1D8Ql1H20wEP4Q0/0Cv1D8mdx/KZ3DW/LOhx+zN91Af6pv6BuIjlqzlPeXbAj+3P8A1fMBb1D8THWJ7Q9S2WZ3W/V/Tft3/2KjzYA0an/nnVb60vgOo+R8TvEfElIj5t/9vPWH6/91dE/N3ouoDy1D8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABM71/uAfcVd9b0nwAAAABJRU5ErkJggg==",id:"X"})})]})}),Object(d.jsx)("div",{style:{marginTop:"10vh"}}),Object(d.jsxs)("div",{id:"result-list",children:[a.map((function(A,e){return Object(d.jsx)("div",{style:{marginTop:"4vh"},children:Object(d.jsxs)("div",{id:"result-list-li",children:[Object(d.jsxs)("h2",{id:"place_name",children:[Object(d.jsxs)("span",{id:"place_count",children:[e+1,"  "]}),A.place_name,Object(d.jsx)("button",{onClick:function(){return document.getElementById("place_page_bg").style.visibility="visible"},id:"more",children:"\ub354\ubcf4\uae30"})]}),A.road_address_name?Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:N,id:"ping"}),Object(d.jsx)("span",{children:A.road_address_name}),Object(d.jsx)("span",{children:A.address_name})]}):Object(d.jsx)("span",{children:A.address_name}),Object(d.jsxs)("span",{children:[Object(d.jsx)("img",{src:Y,id:"call"}),A.phone]})]})},e)})),Object(d.jsx)("div",{id:"pagination"})]}),Object(d.jsx)("div",{style:{marginBottom:"12vh"}})]})},R=function(){var A=Object(n.useState)(""),e=Object(O.a)(A,2),t=e[0],c=e[1],a=Object(n.useState)(""),s=Object(O.a)(a,2),i=s[0],r=s[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{id:"searchP",children:Object(d.jsxs)("form",{className:"d-flex",id:"inputForm",onSubmit:function(A){A.preventDefault(),r(t),c("")},children:[Object(d.jsx)("input",{className:"form-control me-2",id:"searchIn",type:"search",placeholder:"\uc7a5\uc18c\ub97c \uac80\uc0c9\ud558\uc138\uc694. Search for a place.","aria-label":"Search",onChange:function(A){c(A.target.value)},value:t}),Object(d.jsx)("button",{className:"btn btn-outline-success",id:"searchbtn",type:"submit",children:"Search"})]})}),Object(d.jsx)(P,{searchPlace:i})]})},k=t(15),T=t.n(k),L=t(20),S=(t(79),t.p+"static/media/art_img_news1.8ddbf39f.png"),H=t.p+"static/media/art_img_skbrodband.83db4780.png";var F=f.a.div(m||(m=Object(Q.a)(["\nwidth: auto;\nheight: 94vh;\n"]))),K=function(){var A=Object(n.useState)(null),e=Object(O.a)(A,2),t=e[0],c=e[1],a=Object(n.useState)(!1),s=Object(O.a)(a,2),i=s[0],r=s[1],j=Object(n.useState)(null),o=Object(O.a)(j,2),l=o[0],h=o[1];return Object(n.useEffect)((function(){(function(){var A=Object(L.a)(T.a.mark((function A(){var e;return T.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,h(null),c(null),r(!0),A.next=6,p()({method:"get",url:"https://charong.herokuapp.com/newsget_all?from=0&limit=5",from:0,limit:5});case 6:e=A.sent,c(e.data),A.next=13;break;case 10:A.prev=10,A.t0=A.catch(0),h(A.t0);case 13:r(!1);case 14:case"end":return A.stop()}}),A,null,[[0,10]])})));return function(){return A.apply(this,arguments)}})()()}),[]),i?Object(d.jsx)("div",{children:"On Loading..."}):l?Object(d.jsx)("div",{children:"Error Occurred"}):t?Object(d.jsx)(F,{children:Object(d.jsxs)("div",{className:"notice",children:[Object(d.jsxs)("h3",{children:["\uc624\ub298, ",Object(d.jsx)("span",{children:"\uce5c\ud658\uacbd"})," \uc18c\uc2dd"]}),Object(d.jsxs)("article",{children:[Object(d.jsxs)("div",{className:"article_header",children:[Object(d.jsx)("img",{src:S,alt:"Article_Img_news"}),Object(d.jsxs)("h4",{children:["\ud658\uacbd \ub274\uc2a4 ",Object(d.jsx)("span",{children:"\xa0|\xa0 2021-05-19"})]})]}),Object(d.jsxs)("div",{className:"article_body",children:[Object(d.jsx)("h3",{children:"\uae00\ub85c\ubc8c \uae30\uc5c5 \uc11c\uc6b8\uc5d0 \ubaa8\uc5ec '\uae30\ud6c4\ubcc0\ud654\u2027\ud658\uacbd\ubb38\uc81c \ud574\ubc95' \ucc3e\ub294\ub2e4"}),Object(d.jsx)("p",{children:"\ub300\ud55c\uc0c1\uacf5\ud68c\uc758\uc18c\ub294 \uc624\ub294 27\uc77c '2021 P4G(Partnering for Green Growth and the Global Goals 2030)' \uc11c\uc6b8 \uc815\uc0c1\ud68c\uc758 \ube44\uc988\ub2c8\uc2a4 \ud3ec\ub7fc\u2019\uc744 \uc628\ub77c\uc778\uc73c\ub85c \uac1c\ucd5c\ud55c\ub2e4\uace0 19\uc77c \ubc1d\ud614\ub2e4."})]})]}),Object(d.jsxs)("article",{children:[Object(d.jsxs)("div",{className:"article_header",children:[Object(d.jsx)("img",{src:H,alt:"Article_Img_skb"}),Object(d.jsxs)("h4",{children:["\ud658\uacbd \ub274\uc2a4 ",Object(d.jsx)("span",{children:"\xa0|\xa0 2021-05-18"})]})]}),Object(d.jsxs)("div",{className:"article_body",children:[Object(d.jsx)("h3",{children:'\uad50\ud1b5\xb7\ud658\uacbd \ubb38\uc81c\ub85c \uace0\ud1b5\u2026 "GTX-D \ub4f1 \ubc18\uc601\ud574\uc57c"'}),Object(d.jsx)("p",{children:"\uc774\uc7ac\ud604 \uc11c\uad6c\uccad\uc7a5\uc740 \ud575\uc2ec\uc778 \uc11c\uc6b8\ub3c4 \uc8fc\uc7a5\ud558\ub294 \uc9c0\uc911\ud654 \uc5f0\uacb0 \ub178\uc120\uc774 \ube60\uc838 \uc788\uae30 \ub54c\ubb38\uc5d0 GTX-D \ub178\uc120\uc774 \uad6c\ucd95\ub3fc\uc57c \ud558\uace0 \uadf8\ub9ac\uace0 \uac15\ub0a8 \ubfd0\ub9cc \uc544\ub2c8\ub77c \uac15\ubd81\uc73c\ub85c \uc5f0\uacb0\ub418\ub294 2\ud638\uc120\uacfc 5\ud638\uc120\ub3c4 \uc774\ubc88 \uae30\ud68c\uc5d0 GTX-D\uc640 \ud55c\uaebc\ubc88\uc5d0 \ucd94\uc9c4\ub3fc\uc57c \ud558\uace0, \uac70\uae30\uc5d0 \ub9de\ub294 \ub300\uc548\uc774\ub77c\ub3c4 \uc7ac\uac80\ud1a0\ub3fc\uc57c \ud55c\ub2e4\uace0 \ubc1d\ud614\ub2e4."})]})]}),Object(d.jsxs)("article",{children:[Object(d.jsxs)("div",{className:"article_header",children:[Object(d.jsx)("img",{src:H,alt:"Article_Img_skb"}),Object(d.jsxs)("h4",{children:[t.map((function(A){return Object(d.jsx)("div",{children:A.writer},1===A.id)})),Object(d.jsx)("span",{children:"\xa0|\xa0 2021-05-18"})]})]}),Object(d.jsxs)("div",{className:"article_body",children:[Object(d.jsx)("h3",{children:'\uad50\ud1b5\xb7\ud658\uacbd \ubb38\uc81c\ub85c \uace0\ud1b5\u2026 "GTX-D \ub4f1 \ubc18\uc601\ud574\uc57c"'}),Object(d.jsx)("p",{children:"\uc774\uc7ac\ud604 \uc11c\uad6c\uccad\uc7a5\uc740 \ud575\uc2ec\uc778 \uc11c\uc6b8\ub3c4 \uc8fc\uc7a5\ud558\ub294 \uc9c0\uc911\ud654 \uc5f0\uacb0 \ub178\uc120\uc774 \ube60\uc838 \uc788\uae30 \ub54c\ubb38\uc5d0 GTX-D \ub178\uc120\uc774 \uad6c\ucd95\ub3fc\uc57c \ud558\uace0 \uadf8\ub9ac\uace0 \uac15\ub0a8 \ubfd0\ub9cc \uc544\ub2c8\ub77c \uac15\ubd81\uc73c\ub85c \uc5f0\uacb0\ub418\ub294 2\ud638\uc120\uacfc 5\ud638\uc120\ub3c4 \uc774\ubc88 \uae30\ud68c\uc5d0 GTX-D\uc640 \ud55c\uaebc\ubc88\uc5d0 \ucd94\uc9c4\ub3fc\uc57c \ud558\uace0, \uac70\uae30\uc5d0 \ub9de\ub294 \ub300\uc548\uc774\ub77c\ub3c4 \uc7ac\uac80\ud1a0\ub3fc\uc57c \ud55c\ub2e4\uace0 \ubc1d\ud614\ub2e4."})]})]})]})}):null};t(80);var Z=function(){var A=new w.a,e=Object(n.useState)(null),t=Object(O.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(O.a)(s,2),j=r[0],h=r[1],b=Object(n.useState)(null),g=Object(O.a)(b,2),u=g[0],x=g[1];return Object(n.useEffect)((function(){(function(){var e=Object(L.a)(T.a.mark((function e(){var t,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(null),a(null),h(!0),console.log(A.get("UTG")),e.next=7,p()({method:"get",url:"http://charong.herokuapp.com/auth/login?jwt_token="+A.get("UTG")});case 7:return t=e.sent,console.log(t.data),console.log(t.data.id),e.next=12,p()({method:"get",url:"https://charong.herokuapp.com/auth/get_user?id="+t.data.id});case 12:n=e.sent,a(n.data),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),x(e.t0);case 19:h(!1);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}})()()}),[]),j?Object(d.jsx)("div",{children:"On Loading..."}):u?Object(d.jsx)("div",{children:"Error Occurred"}):c?Object(d.jsx)("div",{className:"query_section",children:Object(d.jsxs)("div",{class:"div_my",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("h3",{children:"my\ud398\uc774\uc9c0"}),Object(d.jsx)(i.b,{className:"nav-link",to:"/login",children:Object(d.jsx)("button",{onClick:function(){A.remove("UTG",{path:"/"})},children:"Logout"})})]}),Object(d.jsxs)("section",{children:[Object(d.jsxs)("div",{class:"profile",children:[Object(d.jsx)("img",{src:l,alt:"User",id:"user"}),Object(d.jsxs)("span",{class:"UserInfo",children:[Object(d.jsx)("span",{id:"UserName",children:"\uc774\ud55c\ub098"}),"\xa0\ub2d8"]}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"/",class:"scrap_p",children:"\ucd1d \uc2a4\ud06c\ub7a9 \ud69f\uc218 : 5\ubc88"}),Object(d.jsx)("a",{href:"/",children:Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:"Edit",id:"edit"})})]}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{class:"st",children:"\uc774\ud55c\ub098 \ub2d8\uc758 \uc8fc\ubb38\uc73c\ub85c \uc808\uc57d\ub41c \ub098\ubb34"}),Object(d.jsx)("img",{src:o,alt:"Leaf",class:"leaf"}),Object(d.jsx)("img",{src:o,alt:"Leaf",class:"leaf"}),Object(d.jsx)("img",{src:o,alt:"Leaf",class:"leaf"}),Object(d.jsx)("p",{class:"st",children:"\uc0c8 \uc18c\uc2dd"}),Object(d.jsxs)("div",{class:"news",children:[Object(d.jsx)("span",{class:"n_name",children:"\ud658\uacbd\ub274\uc2a4"})," \ub2d8\uc758 \uc0c8\ub85c\uc6b4 \uae30\uc0ac\uac00 \uc788\uc5b4\uc694."]}),Object(d.jsxs)("div",{class:"read_news",children:[Object(d.jsx)("span",{class:"n_name",children:"\ud658\uacbd\ub274\uc2a4"})," \ub2d8\uc758 \uc0c8\ub85c\uc6b4 \uae30\uc0ac\uac00 \uc788\uc5b4\uc694."]}),Object(d.jsxs)("div",{class:"read_news",children:[Object(d.jsx)("span",{class:"n_name",children:"\ud658\uacbd\ub274\uc2a4"})," \ub2d8\uc758 \uc0c8\ub85c\uc6b4 \uae30\uc0ac\uac00 \uc788\uc5b4\uc694."]}),Object(d.jsx)("br",{})]})]})}):null};var U=function(){var A=Object(n.useState)({userid:"",userpw:"",userna:"",userad:""}),e=Object(O.a)(A,2),t=e[0],c=e[1],a=t.userid,s=t.userpw,r=t.userna,j=t.userad,o=function(A){var e=A.target,n=e.value,a=e.name;c(Object(g.a)(Object(g.a)({},t),{},Object(b.a)({},a,n)))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{name:"userid",value:a,onChange:o}),Object(d.jsx)("input",{name:"userpw",value:s,type:"password",onChange:o}),Object(d.jsx)("input",{name:"userna",value:r,onChange:o}),Object(d.jsx)("input",{name:"userad",value:j,onChange:o}),Object(d.jsx)("button",{onClick:function(){console.log(a),console.log(s),console.log(r),console.log(j),p()({method:"post",url:"https://charong.herokuapp.com/auth/join",data:{id:a,password:s,name:r,address:j}}).then((function(A){console.log(A.status)})).catch((function(A){console.log(A)}))},children:"Register"}),Object(d.jsx)(i.b,{className:"nav-link",to:"/login",children:Object(d.jsx)("button",{children:"Login"})})]})};var y=function(){var A=Object(n.useState)({newstitle:"",newsdate:"",newsauthor:"",newsdescript:""}),e=Object(O.a)(A,2),t=e[0],c=e[1],a=t.newstitle,s=t.newsdate,i=t.newsauthor,r=t.newsdescript,j=function(A){var e=A.target,n=e.value,a=e.name;c(Object(g.a)(Object(g.a)({},t),{},Object(b.a)({},a,n)))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"admin"}),Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"News Post Update Area"}),Object(d.jsx)("p",{children:"title"}),Object(d.jsx)("input",{name:"newstitle",value:a,onChange:j,type:"text"}),Object(d.jsx)("p",{children:"date"}),Object(d.jsx)("input",{name:"newsdate",value:s,onChange:j,type:"text"}),Object(d.jsx)("p",{children:"author"}),Object(d.jsx)("input",{name:"newsauthor",value:i,onChange:j,type:"text"}),Object(d.jsx)("p",{children:"content"}),Object(d.jsx)("input",{name:"newsdescript",value:r,onChange:j,type:"text"}),Object(d.jsx)("input",{type:"submit",value:"NewsPostSubmit",onClick:function(){console.log(a),console.log(s),console.log(i),console.log(r),p()({method:"post",url:"https://charong.herokuapp.com/newspost",data:{title:a,content:r,writer:i,date:s}}).then((function(A){console.log(A.status),console.log(A.data),alert(a+"\ub274\uc2a4\uc758 \ub4f1\ub85d\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")}))}})]})},W=t(3),z=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),Object(d.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)(W.c,{children:[Object(d.jsx)(W.a,{exact:!0,path:"/Call-Frontend/",component:C}),Object(d.jsx)(W.a,{path:"/login",component:v}),Object(d.jsx)(W.a,{path:"/map_main",component:D}),Object(d.jsx)(W.a,{path:"/query",component:R}),Object(d.jsx)(W.a,{path:"/notice",component:K}),Object(d.jsx)(W.a,{path:"/mypage",component:Z}),Object(d.jsx)(W.a,{path:"/register",component:U}),Object(d.jsx)(W.a,{path:"/admin",component:y})]})}),Object(d.jsx)(h,{})]})};a.a.render(Object(d.jsx)(i.a,{children:Object(d.jsx)(z,{})}),document.getElementById("root")),s()}},[[81,1,2]]]);
//# sourceMappingURL=main.b036b0c2.chunk.js.map
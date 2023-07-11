(this["webpackJsonpcv-react"]=this["webpackJsonpcv-react"]||[]).push([[0],{39:function(n,e,t){},58:function(n,e,t){"use strict";t.r(e);for(var i,o,c,a,r,s,l,d,b=t(1),j=t.n(b),m=t(12),h=t.n(m),u=(t(39),t(6)),p=t(3),O=t(2),g=t(13),f={primaryColor:"rgb(218,218,218)",secondaryColor:"#272727",highlightColor:"rgb(26,184,196)"},x=f.primaryColor,w=f.secondaryColor,v=f.highlightColor,y="812px",k="1023px",S="1200px",C={mobileS:"screen and (max-width: ".concat("500px",")"),mobileL:"screen and (max-width: ".concat(y,")"),tabletS:"screen and (max-width: ".concat(k,")"),tabletL:"screen and (min-width: ".concat(S,")")},L=O.c.nav(i||(i=Object(p.a)(["\n  height: 4em;\n  padding: 1em 0 1em 0;\n  width: 100%;\n  position: fixed;\n  display: flex;\n  z-index: 100;\n  justify-content: flex-end;\n  color: white;\n  background-color: ",";\n\n  @media only "," {\n    justify-content: space-evenly;\n    font-size: 0.7rem;\n  }\n"])),(function(n){return n.navBackground?w:""}),C.mobileS),z=Object(O.c)(g.Link)(o||(o=Object(p.a)(["\n  list-style-type: none;\n  display: inline-block;\n  margin: 0 2em 0 0;\n  font-size: 1rem;\n  text-transform: uppercase;\n  cursor: pointer;\n\n  &.active {\n    border-bottom: 2px solid ",";\n    padding-bottom: 0.1rem;\n    right: 100%;\n  }\n\n  &:hover {\n    color: ",";\n    border-bottom: 2px solid $highlight-color;\n    padding-bottom: 0.1rem;\n    right: 0;\n  }\n\n  @media only "," {\n    margin: 0;\n    font-size: 0.8rem;\n  }\n"])),v,v,C.mobileS),T=t(0),E=function(n){var e,t=Object(b.useState)(!1),i=Object(u.a)(t,2),o=i[0],c=i[1],a=null===(e=document.getElementById("landingPage"))||void 0===e?void 0:e.offsetHeight;return Object(b.useEffect)((function(){window.addEventListener("scroll",(function(n){a&&.8*a<window.scrollY?c(!0):a&&.8*a>=window.scrollY&&c(!1)}))})),Object(T.jsxs)(L,{navBackground:o,children:[Object(T.jsx)(z,{to:"landingPage",spy:!0,smooth:!0,duration:400,children:"Home"}),Object(T.jsx)(z,{to:"about",spy:!0,smooth:!0,duration:400,children:"About"}),Object(T.jsx)(z,{to:"projects",spy:!0,smooth:!0,duration:400,children:"Projects"}),Object(T.jsx)(z,{to:"contact-form",spy:!0,smooth:!0,duration:400,children:"Contact"})]})},F=j.a.createContext({scroll:!1,landingTransition:!1,form:!1,setForm:function(n){}}),Y=O.c.main(c||(c=Object(p.a)(['\n  h1 {\n    font-size: 10rem;\n  }\n\n  h2 {\n    font-size: 2.5rem;\n  }\n\n  p {\n    font-size: 1.2rem;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n\n  h1,\n  h3 {\n    font-family: "EB Garamond", serif;\n    font-style: italic;\n  }\n  @media only '," {\n    h1 {\n      font-size: 5rem;\n    }\n\n    h2 {\n      font-size: 2rem;\n    }\n  }\n"])),C.mobileL),B=function(n){var e=Object(b.useState)(!1),t=Object(u.a)(e,2),i=t[0],o=t[1],c=Object(b.useState)(!1),a=Object(u.a)(c,2),r=a[0],s=a[1],l=Object(b.useState)(!1),d=Object(u.a)(l,2),j=d[0],m=d[1],h={scroll:i,landingTransition:r,form:j,setForm:m};return i?setTimeout((function(){document.body.style.overflow="visible",s(!0)}),1500):document.body.style.overflow="hidden",Object(b.useEffect)((function(){o(!1),window.addEventListener("wheel",(function(n){n.deltaY&&o(!0)})),setTimeout((function(){i||o(!0)}),2e3)}),[]),Object(T.jsx)(F.Provider,{value:h,children:Object(T.jsxs)(Y,{children:[i&&Object(T.jsx)(E,{}),n.children]})})},P=[],J=.89,M=1;M<16;M++)M>1?P.push(Object(O.b)(r||(r=Object(p.a)(["\n    .circle:nth-child(",") {\n      size: ","em;\n      border: 13px solid black;\n      border-bottom:none;\n\t\t\tborder-radius:","em ","em 0 0;\n\t\t\twidth:","em;\n\t\t\theight:","em;\n\t\t\tz-index:  ",";\n      animation: "," 30s infinite ease-in-out;\n    }\n    "])),M,5+8*(M-M*J),5+8*(M-M*J),5+8*(M-M*J),5+8*(M-M*J),(5+8*(M-M*J))/2,-16-M,(d=M,Object(O.d)(a||(a=Object(p.a)(["\n  0% {\n    transform:translateX(-50%) rotate(0deg);\n  }\n  100% {\n    transform:translateX(-50%) rotate(","deg);\n  }\n"])),360*-d)))):P.push(Object(O.b)(s||(s=Object(p.a)(["\n    .circle:nth-child(",") {\n      size: 25px;\n      border-bottom:none;\n\t\t\tborder-radius:","em ","em 0 0;\n\t\t\twidth:","em;\n\t\t\theight:","em;\n\t\t\tz-index:  ",";\n    }\n    "])),M,5+8*(M-M*J),5+8*(M-M*J),5+8*(M-M*J),(5+8*(M-M*J))/2,16-M));var N,D,I,R,H,V,A,q,W,X,$,G,K,Q,U,Z,_,nn,en,tn,on,cn,an,rn,sn,ln,dn,bn,jn,mn,hn,un,pn,On,gn,fn,xn,wn,vn,yn,kn,Sn,Cn,Ln,zn,Tn,En,Fn,Yn,Bn,Pn,Jn,Mn,Nn,Dn,In=O.c.div(l||(l=Object(p.a)(["\n\n  .circle {\n    font-size:2rem;\n    color:",";\n    border-radius: 100% 100% 0 0;\n    position: absolute;\n    bottom: 50%;\n    left: 50%;\n    transform-origin: bottom center;\n  }\n  ","\n"])),v,P),Rn=f.primaryColor,Hn=f.secondaryColor,Vn=f.highlightColor,An=O.c.section(N||(N=Object(p.a)(["\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  background: linear-gradient(\n    to right,\n    "," 50%,\n    "," 50%\n  );\n  background-size: 200%, 100%;\n  transition: all 2.5s ease;\n  background-position: ",";\n"])),Rn,Hn,(function(n){return n.scroll?"right":"left"})),qn=O.c.h1(D||(D=Object(p.a)(["\n  color: ",";\n"])),Vn),Wn=O.c.header(I||(I=Object(p.a)(["\n  text-align: center;\n  transform: translateY(-20%);\n"]))),Xn=O.c.h2(R||(R=Object(p.a)(["\n  color: ",";\n"])),Rn),$n=function(){var n=Object(b.useContext)(F).scroll,e=["","","","","","","","","","","","","","",""].map((function(n){return Object(T.jsx)("div",{className:"circle",children:n})}));return Object(T.jsx)(An,{id:"landingPage",scroll:n,children:Object(T.jsxs)(Wn,{children:[Object(T.jsx)(In,{children:e}),Object(T.jsx)(qn,{children:"I'm John"}),Object(T.jsx)(Xn,{children:"a web developer"})]})})},Gn=O.c.div(H||(H=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 0 2px 8px ",";\n  border-radius: 6px;\n  margin: 10em 2.5% 5em 2.5%;\n  padding: 2.5em;\n\n  @media only "," {\n    margin: 0;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"])),x,C.mobileS),Kn=O.c.h2(V||(V=Object(p.a)(["\n  padding: 0 0 0.75em 0;\n  border-bottom: 2px solid ",";\n"])),v),Qn=O.c.p(A||(A=Object(p.a)(["\n  padding: 1.5em;\n  font-weight: normal;\n  text-align: center;\n  max-width: 1200px;\n  line-height: 2;\n\n  @media only "," {\n    width:100%;\n  }\n"])),C.mobileS),Un=O.c.span(q||(q=Object(p.a)(["\n  color: ",";\n  font-size: 1.2rem;\n  font-weight: 700;\n"])),v),Zn=t.p+"static/media/website.d272d232.png",_n=t.p+"static/media/websitePortrait.00e737fe.png",ne=O.c.div(W||(W=Object(p.a)(["\n  width: 80%;\n  position: relative;\n  height: 20vmin;\n\n  @media only "," {\n    width: 100%;\n  }\n"])),C.mobileS),ee=O.c.div(X||(X=Object(p.a)(["\n  ","\n  transition: all 0.4s ease;\n\n  @media only "," {\n    transform: scale(0.7);\n  }\n"])),(function(n){return n.deviceToggle?ce:ae}),C.mobileL),te=O.c.div($||($=Object(p.a)(["\n  ","\n  transition: all 0.4s ease;\n\n  @media only "," {\n    transform: scale(0.7);\n  }\n"])),(function(n){return n.deviceToggle?re:se}),C.mobileL),ie="\nbackground-image: url(".concat(Zn,");\nbackground-size:100%;\n"),oe="\nbackground-image: url(".concat(_n,");\nbackground-size:100%;\n"),ce="\ncolor: #000;\nposition: absolute;\ntop:5%;\nleft: 20%;\nwidth: 20vw;\npadding: 5.625vw;\nborder-radius: 5%;\nborder: solid 4px black;\n".concat(ie,"\n\n@media only ").concat(C.mobileL," {\n  width: 32vw;\n  padding: 8vw;\n}\n\n&:before {\n  content: '';\n  position: absolute;\n  top: 100%;\n  left: 42%;\n  width: 3vw;\n  height: 2vw;\n  background-color: black;\n}\n\n&:after {\n  content: '';\n  position: absolute;\n  top:115%;\n  left: 37%;\n  width: 5vw;\n  height: .7vw;\n  background-color: currentColor;\n  border-radius: 5px;\n}\n"),ae="\ncolor: #000;\nposition: absolute;\nleft: 25%;\ntop: 15%;\nwidth: 3.525vw;\npadding: 4.2vw;\nborder-radius: 0;\nborder: solid 0.4vw black;\n".concat(oe,"\n@media only ").concat(C.mobileL," {\n  width: 12vw;\n  height: 15.5vw;\n}\n\n\n&:before {\n  content: '';\n  position: absolute;\n  transform: translate(-50%,-50%);\n  width: 8.9vw;\n  height: 11vw;\n  border: solid 0.2vw black;\n  background-color: ").concat(x,";\n  border-radius: 5%;\n  z-index: -10;\n  @media only ").concat(C.mobileL," {\n    transform: translate(-38.65%,-32%);\n    width: 12vw;\n    height: 17vw;\n    background-color: transparent;\n  }\n}\n\n&:after {\n  content: '';\n  position: absolute;\n  top: 9.25vw;\n  transform: translate(-50%,-50%);\n  width: 0.1vw;\n  height: 0.1vw;\n  border: solid 0.2vw currentColor;\n  border-radius: 50%;\n}"),re="\ncolor: #000;\nposition: absolute;\ntop: 30%;\nright: 25%;\nwidth: 3.5vw;\nheight: 5.8vw;\nborder-radius: 10%;\nborder: solid 0.3vw black;\n".concat(oe,"\n\n@media only ").concat(C.mobileL," {\n  width: 7vw;\n  height: 11.6vw;\n  border: solid 0.3vw black;\n}\n\n&:before {\n  content: '';\n  position: absolute;\n  left: 43%;\n  top: 5%;\n  width: 0.5vw;\n  height: 0.2vw;\n  background-color: black;\n\n  @media only ").concat(C.mobileL," {\n    border: solid 0.005vw grey;\n  }\n}\n\n&:after {\n  content: '';\n  position: absolute;\n  bottom: 3%;\n  left: 50%;\n  height: 0.4vw;\n  width: 0.4vw;\n  border-radius: 50%;\n  background-color: black;\n\n  @media only ").concat(C.mobileL," {\n    background-color: grey;\n  }\n}\n"),se="\ncolor: #000;\nposition: absolute;\nright:20%;\ntop: 10%;\nwidth: 13.8vw;\nheight: 9.2vw;\nborder-radius: 5%;\nborder: solid 0.65vw black;\n".concat(ie,"\n\n@media only ").concat(C.mobileL," {\n  top: 7.5%;\n  width: 28vw;\n  height: 18.7vw;\n}\n\n&:before {\n  content: '';\n  position: absolute;\n  right: -12.5%;\n  top: 115%;\n  width: 15.5vw;\n  height: 0.95vw;\n  border-radius: 0 0 50% 50%;\n  border: solid 1px black;\n  background-color: black;\n\n  @media only ").concat(C.mobileL," {\n    width: 31.45vw;\n    background-color: black;\n  }\n}\n\n&:after {\n  content: '';\n  position: absolute;\n  top: 8.1vw;\n  left: 11.5vw;\n  height: 0.2vw;\n  width: 0.2vw;\n  border-radius: 50%;\n  background-color: red;\n\n  @media only ").concat(C.mobileL," {\n    top: 8.1vw;\n    left: 11.5vw;\n  }\n}\n"),le=function(){var n=Object(b.useState)(!0),e=Object(u.a)(n,2),t=e[0],i=e[1],o=Object(b.useState)(!0),c=Object(u.a)(o,2),a=c[0],r=c[1];setTimeout((function(){i(!t),r(!a)}),4e3);var s=Object(T.jsxs)(Gn,{children:[Object(T.jsx)(Kn,{children:"What I Do"}),Object(T.jsxs)(Qn,{children:["I help you design websites that can be viewed on ",Object(T.jsx)(Un,{children:"any device"})," to meet both you and your clients needs."]}),Object(T.jsxs)(ne,{children:[Object(T.jsx)(ee,{deviceToggle:t}),Object(T.jsx)(te,{deviceToggle:t})]})]});return Object(T.jsx)(T.Fragment,{children:s})},de=t(4),be=t(59),je=t(60),me=t(61),he=t(62),ue=t(63),pe=t(64),Oe=t(65),ge=t(66),fe=t(67),xe=t(68),we=t(69),ve=t(70),ye=t(71),ke=O.c.div(G||(G=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n\n  "," {\n    width: 5vw;\n    min-width: 3em;\n    height: 5vw;\n    min-height: 3em;\n    margin: 0 1vw 0 1vw;\n\n    }\n\n    @media only "," {\n      width: 3em;\n      height: 3em;\n    }\n  }\n"])),de.a,C.mobileS),Se=function(n){return"\n  animation: onInitialView ".concat(.4*n,"s ease-out forwards;\n  @keyframes onInitialView {\n    0% {\n      opacity: 0;\n      transform:translateY(100%);\n    }\n    100% {\n      opacity:1;\n      transform:translateY(0);\n    }\n  ")},Ce=Object(O.c)(be.a)(K||(K=Object(p.a)(["\n  color: #d94625;\n  ","\n"])),Se(1)),Le=Object(O.c)(je.a)(Q||(Q=Object(p.a)(["\n  color: #2168a6;\n  ","\n"])),Se(2)),ze=Object(O.c)(me.a)(U||(U=Object(p.a)(["\n  color: #cd669a;\n  ","\n"])),Se(3)),Te=Object(O.c)(he.a)(Z||(Z=Object(p.a)(["\n  color: #f0db4f;\n  background-color: black;\n  ","\n"])),Se(4)),Ee=Object(O.c)(ue.a)(_||(_=Object(p.a)(["\n  color: #61dbfb;\n  ","\n"])),Se(5)),Fe=Object(O.c)(pe.a)(nn||(nn=Object(p.a)(["\n  color: #007acc;\n  ","\n"])),Se(6)),Ye=Object(O.c)(Oe.a)(en||(en=Object(p.a)(["\n  color: #777bb3;\n  height: 4em;\n  width: 4em;\n  ","\n"])),Se(7)),Be=Object(O.c)(ge.a)(tn||(tn=Object(p.a)(["\n  color: #f05340;\n  height: 3.4em;\n  width: 3.4em;\n  ","\n"])),Se(2)),Pe=Object(O.c)(fe.a)(on||(on=Object(p.a)(["\n  color: #0868ac;\n  height: 3.4em;\n  width: 3.4em;\n  ","\n"])),Se(3)),Je=Object(O.c)(xe.a)(cn||(cn=Object(p.a)(["\n  color: #553c7b;\n  height: 3.4em;\n  width: 3.4em;\n  ","\n"])),Se(4)),Me=Object(O.c)(we.a)(an||(an=Object(p.a)(["\n  color: #41b883;\n  height: 3.4em;\n  width: 3.4em;\n  ","\n"])),Se(5)),Ne=Object(O.c)(ve.a)(rn||(rn=Object(p.a)(["\n  height: 4em;\n  width: 4em;\n  ","\n"])),Se(5)),De=Object(O.c)(ye.a)(sn||(sn=Object(p.a)(["\n  color:#38BDF8;\n  height: 3.4em;\n  width: 3.4em;\n  ","\n"])),Se(5)),Ie=function(){var n=Object(b.useState)(!1),e=Object(u.a)(n,2),t=e[0],i=e[1];Object(b.useEffect)((function(){window.addEventListener("scroll",(function(){var n=1.2*document.getElementById("techStack").offsetTop;window.scrollY>n&&i(!0)}))}));var o=Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Ce,{title:"Html"}),Object(T.jsx)(Le,{title:"Css"}),Object(T.jsx)(Te,{title:"Javascript"}),Object(T.jsx)(ze,{title:"Sass"}),Object(T.jsx)(Ee,{title:"Typescript"}),Object(T.jsx)(Fe,{title:"React"})]});return Object(T.jsxs)(Gn,{children:[Object(T.jsx)(Kn,{children:"Tech Stack"}),Object(T.jsx)(Qn,{children:"I use multiple technologies such as HTML, CSS and JavaScript coupled with superscripts like TypeScript and SCSS/SASS."}),Object(T.jsx)(ke,{id:"techStack",children:t?o:null})]})},Re=t(72),He=t(73),Ve=t(74),Ae=Object(O.d)(ln||(ln=Object(p.a)(["  \n0% {\n  transform: rotate(0deg);\n}\n100% {\n  transform: rotate(360deg);\n}"]))),qe=O.c.div(dn||(dn=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 10;\n  height: 405px;\n  max-width: 1600px;\n\n  @media only ","{\n    height: auto;\n  }\n"])),C.mobileL),We=O.c.section(bn||(bn=Object(p.a)(["\n  display: ",";\n  justify-content: space-evenly;\n  align-items: center;\n\n  @media only "," {\n    flex-direction: column;\n  }\n"])),(function(n){return n.active?"flex":"none"}),C.mobileL),Xe=O.c.a(jn||(jn=Object(p.a)(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  width: 35%;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  \n  @media only "," {\n    width: 60%;\n  }\n\n  @media only "," {\n    width: 95%;\n    margin: auto;\n  }\n"])),C.mobileL,C.mobileS),$e=O.c.h2(mn||(mn=Object(p.a)(["\n  @media only "," {\n    font-size: 0.5rem;\n  }\n"])),C.mobileS),Ge=O.c.h3(hn||(hn=Object(p.a)(["\n  margin-bottom: 1em;\n"]))),Ke=O.c.p(un||(un=Object(p.a)(["\n  width: 95%;\n  margin-bottom: 1.5em;\n\n  @media only "," {\n    display: none;\n  }\n"])),C.mobileL),Qe=O.c.div(pn||(pn=Object(p.a)(["\n  height: 40%;\n  width: 85%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  @media only "," {\n    transform: scale(0.7);\n    width:100%;\n  }\n  @media only "," {\n    transform: scale(0.8);\n  }\n"])),C.mobileL,C.tabletS),Ue=O.c.div(On||(On=Object(p.a)(["\n  height: auto;\n  width: 3em;\n  margin: 1em;\n"]))),Ze=O.c.div(gn||(gn=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  z-index: 15;\n"]))),_e=O.c.button(fn||(fn=Object(p.a)(["\n  cursor: pointer;\n  border: none;\n  background: none;\n"]))),nt=O.c.button(xn||(xn=Object(p.a)(["\n  cursor: pointer;\n  border: none;\n  background: none;\n"]))),et=Object(O.c)(Re.a)(wn||(wn=Object(p.a)(["\n  height: 4em;\n  width: 4em;\n"]))),tt=Object(O.c)(He.a)(vn||(vn=Object(p.a)(["\n  height: 4em;\n  width: 4em;\n"]))),it=Object(O.b)(yn||(yn=Object(p.a)(["\n  "," 5s infinite;\n"])),Ae),ot=Object(O.c)(Ve.a)(kn||(kn=Object(p.a)(["\n  transition-duration: 600ms;\n  width: ",";\n  height: ",";\n  margin: 0 0.5em 0 0.5em;\n  animation: ",";\n  opacity: ","\n"])),(function(n){return n.active?"1.6em":"1.5em"}),(function(n){return n.active?"1.6em":"1.5em"}),(function(n){return n.active?it:null}),(function(n){return n.active?"1":"0.5"})),ct=O.c.img(Sn||(Sn=Object(p.a)(["\n  width: 100%;\n  max-width: 28em;\n\n  @media only "," {\n    margin: 1rem 0 1.5rem 0;\n  }\n"])),C.mobileL),at=function(n){var e=n.slide,t=n.activeIndex,i=n.index,o=n.link,c=[];return e.stack.forEach((function(n){"php"===n?c.push(Object(T.jsx)(Ue,{children:Object(T.jsx)(Ye,{})})):"laravel"===n?c.push(Object(T.jsx)(Ue,{children:Object(T.jsx)(Be,{})})):"html"===n?c.push(Object(T.jsx)(Ue,{children:Object(T.jsx)(Ce,{})})):"css"===n?c.push(Object(T.jsx)(Ue,{children:Object(T.jsx)(Le,{})})):"js"===n?c.push(Object(T.jsx)(Ue,{children:Object(T.jsx)(Te,{})})):"jquery"===n?c.push(Object(T.jsx)(Ue,{children:Object(T.jsx)(Pe,{})})):"vue.js"===n?c.push(Object(T.jsx)(Ue,{children:Object(T.jsx)(Me,{})})):"react"===n?c.push(Object(T.jsx)(Ue,{children:Object(T.jsx)(Fe,{})})):"scss"===n?c.push(Object(T.jsx)(Ue,{children:Object(T.jsx)(ze,{})})):"typescript"===n?c.push(Object(T.jsx)(Ue,{children:Object(T.jsx)(Ee,{})})):"styledComponents"===n?c.push(Object(T.jsx)(Ue,{children:Object(T.jsx)(Ne,{})})):"tailwind"===n?c.push(Object(T.jsx)(Ue,{children:Object(T.jsx)(De,{})})):"bootstrap"===n&&c.push(Object(T.jsx)(Ue,{children:Object(T.jsx)(Je,{})}))})),Object(T.jsxs)(We,{active:t===i,children:[Object(T.jsxs)(Xe,{"aria-label":"link to "+e.title,href:o,children:[Object(T.jsx)($e,{children:e.title}),Object(T.jsxs)(Ge,{children:["Role: ",e.role]}),Object(T.jsx)(Ke,{children:e.description})]}),Object(T.jsx)(Xe,{children:Object(T.jsx)("a",{"aria-label":"link to "+e.title,href:o,children:Object(T.jsx)(ct,{src:e.thumbnail,"aria-label":e.title})})}),Object(T.jsxs)(Xe,{href:o,children:[Object(T.jsx)("h2",{children:"Tech Stack"}),Object(T.jsx)(Qe,{children:c})]})]})},rt=t.p+"static/media/MMERevise.fef71488.png",st=t.p+"static/media/ReactTicTacToe.dd830341.gif",lt=[{title:"MME Revise",role:"Junior Front End Developer",thumbnail:rt,description:"Front end design changes, mobile responsiveness adaptation to main website and online learning portal.",stack:["html","css","js","php","laravel","jquery","bootstrap","vue.js"],link:"https://mmerevise.co.uk/"},{title:"Tailwind Project",role:"Junior Front End Developer",thumbnail:t.p+"static/media/DSquared.1af0d398.gif",description:"Fully responsiveness webpage based on a wireframe from DSquared. Demonstrates ability to pick up new frameworks. Pixel perfect, in a timely manner.",stack:["html","css","js","tailwind"],link:"https://github.com/JonathanHYYan/Tailwind-CSS-Demo"},{title:"Bennetts Sport",role:"Junior Front End Developer",thumbnail:t.p+"static/media/BennetSports.a97ad62e.gif",description:"Retail website designed from scracth connected to Bennetts server to dynamically render available retailers and sizes for each product.",stack:["html","css","js","react","styledComponents"],link:"https://github.com/JonathanHYYan/Retail-Website"},{title:"React Tic Tac Toe",role:"Junior Front End Developer",thumbnail:st,description:"React Tic Tac Toe Project for Hackajob. Features contain: Alternating players, win/tie conditions and board reset using React hooks and vanilla CSS",stack:["html","css","js","react"],link:"https://github.com/JonathanHYYan/React-Tic-Tact-Toe"}],dt=function(){var n=Object(b.useState)(0),e=Object(u.a)(n,2),t=e[0],i=e[1],o=lt.map((function(n,e){return Object(T.jsx)(at,{slide:n,activeIndex:t,index:e,link:n.link})})),c=function(n){n<0?n=lt.length-1:n>=lt.length&&(n=0),i(n)};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(qe,{children:o}),Object(T.jsxs)(Ze,{children:[Object(T.jsx)(_e,{"aria-label":"previous-slide",onClick:function(){return c(t-1)},children:Object(T.jsx)(et,{})}),Object(T.jsx)(nt,{children:lt.map((function(n,e){return Object(T.jsx)(ot,{onClick:function(){return c(e)},active:t===e,"aria-label":"project-indicator"},e)}))}),Object(T.jsx)(_e,{"aria-label":"next-slide",onClick:function(){return c(t+1)},children:Object(T.jsx)(tt,{})})]})]})},bt=function(){var n=Object(T.jsx)("div",{id:"projects",children:Object(T.jsxs)(Gn,{children:[Object(T.jsx)(Kn,{className:"card-title",children:"What to Expect?"}),Object(T.jsx)(Qn,{className:"card-text",children:"Let's talk about the aesthetics and features that best represent you and your goals."}),Object(T.jsx)(dt,{})]})});return Object(T.jsx)(T.Fragment,{children:n})},jt=t.p+"static/media/background.d9694fcb.jpg",mt=O.c.section(Cn||(Cn=Object(p.a)(['\n  position: relative;\n  padding-top: 5em;\n\n  &:before {\n    content: "";\n    position: absolute;\n    opacity: 0.05;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: url(',");\n    background-size: cover;\n  }\n"])),jt),ht=function(){var n=Object(b.useContext)(F).scroll,e=Object(T.jsxs)(mt,{id:"main",children:[Object(T.jsx)(le,{}),Object(T.jsx)(Ie,{}),Object(T.jsx)(bt,{})]});return Object(T.jsx)(T.Fragment,{children:n&&e})},ut=t(21),pt=t(33),Ot=t(7),gt=O.c.form(Ln||(Ln=Object(p.a)(["\n  padding-top: 2em;\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 1em;\n\n  @media only "," {\n    width: 60%;\n  }\n\n  @media only "," {\n    width: 90%;\n  }\n"])),C.tabletS,C.mobileL),ft=O.c.input(zn||(zn=Object(p.a)(["\n  border-style: none;\n  border-bottom: 2px solid grey;\n  background: ",";\n  margin: 0.7em;\n  padding: 0.3em 1em;\n  width: 100%;\n\n  ::placeholder {\n    color: black;\n  }\n\n  &:focus {\n    outline: none;\n    border-bottom: solid ",";\n  }\n\n  &:invalid {\n    background-color: #fddddd;\n  }\n"])),(function(n){return n.hasError?"#f8786c":"none"}),v),xt=O.c.textarea(Tn||(Tn=Object(p.a)(["\n  border-style: none;\n  border-bottom: 2px solid grey;\n  background: ",";\n  margin: 0.7em;\n  padding: 0.3em 1em;\n  width: 100%;\n\n  ::placeholder {\n    color: black;\n  }\n\n  &:focus {\n    outline: none;\n    border-bottom: solid ",";\n  }\n"])),(function(n){return n.hasError?"#f8786c":"none"}),v),wt=O.c.div(En||(En=Object(p.a)([""]))),vt=O.c.button(Fn||(Fn=Object(p.a)(["\n  padding 0.2em;\n  width: 6em;\n  margin: 2em;\n  color: ",";\n  border: solid 2px black;\n  border-radius: 1em;\n  cursor: pointer;\n"])),v),yt=O.c.p(Yn||(Yn=Object(p.a)(["\n  color: #f8786c;\n"]))),kt=function(n){return Object(T.jsx)(ft,{id:n.id,placeholder:n.labelName,minLength:n.min,value:n.inputValue,onChange:n.inputChange,onBlur:n.onBlur,hasError:n.errorClass})},St=function(n){return Object(T.jsx)(xt,{hasError:n.errorClass,id:n.id,placeholder:n.labelName,rows:n.rows,value:n.messageValue,onChange:n.messageChange,onBlur:n.onBlur})},Ct={name:"",email:"",message:""},Lt={name:!1,email:!1,message:!1},zt=function(){var n=Object(b.useContext)(F).scroll,e=Object(b.useState)(Ct),t=Object(u.a)(e,2),i=t[0],o=t[1],c=Object(b.useState)(!1),a=Object(u.a)(c,2),r=a[0],s=a[1],l=Object(b.useState)(Lt),d=Object(u.a)(l,2),j=d[0],m=d[1],h=Object(b.useState)(!1),p=Object(u.a)(h,2),O=p[0],g=p[1],f=Object(b.useState)(!1),x=Object(u.a)(f,2),w=x[0],v=x[1],y=function(){var n=Object(pt.a)(Object(ut.a)().mark((function n(e){return Object(ut.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),g(!0),m((function(n){return Object(Ot.a)(Object(Ot.a)({},n),{},{name:!0,email:!0,message:!0})})),""!==i.name.trim()&&""!==i.email.trim()&&""!==i.message.trim()){n.next=6;break}return s(!1),n.abrupt("return");case 6:return s(!0),n.next=9,fetch("http://localhost:3001/send",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(i)});case 9:200===n.sent.status?(console.log("Message Sent"),v(!0)):console.log("Message failed to send");case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),k=!r&&j.name,S=!r&&j.email,C=!r&&j.message,L=j.name&&j.email&&j.message&&!r,z=Object(T.jsx)(vt,{"aria-label":"send-form",type:"submit",children:"Send"}),E=Object(T.jsx)(vt,{disabled:!0,"aria-label":"sending",type:"submit",children:"Sending..."}),Y=Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Kn,{children:"Contact Form"}),Object(T.jsxs)(gt,{onSubmit:y,children:[Object(T.jsx)(kt,{id:"name",errorClass:k,labelName:"Name",min:1,inputValue:i.name,inputChange:function(n){o((function(e){return Object(Ot.a)(Object(Ot.a)({},e),{},{name:n.target.value})}))},onBlur:function(n){m((function(n){return Object(Ot.a)(Object(Ot.a)({},n),{},{name:!0})})),""!==i.name.trim()?s(!0):s(!1)}}),Object(T.jsx)(kt,{id:"email",errorClass:S,labelName:"Email",min:1,inputValue:i.email,inputChange:function(n){o((function(e){return Object(Ot.a)(Object(Ot.a)({},e),{},{email:n.target.value})}))},onBlur:function(n){m((function(n){return Object(Ot.a)(Object(Ot.a)({},n),{},{email:!0})})),""!==i.email.trim()?s(!0):s(!1)}}),Object(T.jsx)(St,{id:"message",errorClass:C,labelName:"Message",rows:5,messageValue:i.message,messageChange:function(n){o((function(e){return Object(Ot.a)(Object(Ot.a)({},e),{},{message:n.target.value})}))},onBlur:function(n){m((function(n){return Object(Ot.a)(Object(Ot.a)({},n),{},{message:!0})})),""!==i.message.trim()?s(!0):s(!1)}}),L&&Object(T.jsx)(yt,{children:"Server not active on GitHub Pages"}),Object(T.jsx)(wt,{children:O?E:z})]})]}),B=Object(T.jsx)(Kn,{children:"Message Sent!"});return Object(T.jsx)(T.Fragment,{children:n&&Object(T.jsx)("section",{id:"contact-form",children:Object(T.jsx)(Gn,{children:w?B:Y})})})},Tt=t.p+"static/media/dummyAboutMePic.68995de6.jpg",Et=O.c.div(Bn||(Bn=Object(p.a)(["\n  color: $secondary-color;\n  font-size: 10rem;\n  font-weight: 1000;\n  opacity: 0.1;\n  transition: transform 2s ease, opacity 4s;\n  transform: translateX(","%);\n\n  &:hover {\n    transition: 4s;\n    opacity: 0;\n  }\n\n  @media only "," {\n    font-size: 5.5rem;\n    transition: transform 0.4s ease, opacity 4s;\n  }\n"])),(function(n){return-50+n.scrollPercent}),C.mobileS),Ft=O.c.section(Pn||(Pn=Object(p.a)(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20em;\n  position: relative;\n  overflow: hidden;\n\n  &:before {\n    opacity: 0;\n    content: "";\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    transition: 4s;\n    background-image: url(',");\n\n    @media only "," {\n      background-size: 1100px, 733px;\n      opacity: ","\n    }\n  }\n\n  &:hover {\n    &:before {\n      opacity: 0.4;\n    }\n  }\n"])),Tt,C.mobileS,(function(n){return n.scrollPercent>50?1:0})),Yt=O.c.div(Jn||(Jn=Object(p.a)(["\n  position: absolute;\n  color: $secondary-color;\n  font-size: 2rem;\n  font-weight: 700;\n\n  &:before {\n    opacity: 1;\n  }\n\n  @media only "," {\n    font-size: 1.5rem;\n    margin: 10%;\n  }\n"])),C.mobileS),Bt=function(){var n=Object(b.useState)(0),e=Object(u.a)(n,2),t=e[0],i=e[1],o=Object(b.useContext)(F).landingTransition;Object(b.useEffect)((function(){window.addEventListener("scroll",c)}),[]);var c=function(n){i(.1*window.scrollY)},a=Object(T.jsxs)(Ft,{id:"about",scrollPercent:t,children:[Object(T.jsx)(Et,{scrollPercent:t,children:"About Me"}),Object(T.jsx)(Yt,{children:"Front-end developer creating memorable and smooth user experiences"})]});return Object(T.jsx)(T.Fragment,{children:o&&a})},Pt=t(76),Jt=t(77),Mt=t(78),Nt=t(75),Dt=O.c.footer(Mn||(Mn=Object(p.a)(["\n  display: flex;\n  padding: 3em 2em 3em 2em;\n  background-color: ",";\n  color: white;\n  width: 100%;\n  align-items: center;\n\n  @media only "," {\n    flex-direction: column;\n    padding: 0 2em 0 2em;\n    justify-content: center;\n  }\n\n  h3 {\n    display: flex;\n    align-items: center;\n    font-size: 3.5rem;\n\n    @media only "," {\n      with:90%;\n      font-size: 2rem;\n    }\n  }\n\n  ul {\n    list-style-type: none;\n    padding: 2em 0 2em 0;\n    @media only "," {\n      padding: 0.5em 0 0.5em 0;\n    }\n  }\n\n  .socials {\n    width: 60%;\n    border-right: 2px solid white;\n\n    @media only "," {\n      width: 100%;\n      border-right: 0;\n      padding-top: 1rem;\n    }\n\n    & p {\n      display: flex;\n      font-size: 0.8rem;\n      @media only "," {\n        width: 100%;\n        text-align: center;\n      }\n    }\n\n    & ul {\n      display: flex;\n      align-items: center;\n      @media only "," {\n        justify-content: center;\n      }\n    }\n\n    & li {\n      margin: 0 1.5em 0 0;\n    }\n  }\n\n  .info {\n    display: flex;\n    align-items: center;\n    width: 40%;\n    padding-left: 5%;\n    justify-content: space-between;\n\n    @media only "," {\n      width: 100%;\n      justify-content: center;\n      padding-left: 0;\n    }\n    & li {\n      font-size: 1.3rem;\n      padding-bottom: 1em;\n\n      @media only "," {\n        display: inline-block;\n        padding-right: 1em;\n        font-size: 0.8em;\n      }\n    }\n  }\n\n  "," {\n    min-width: 2em;\n    min-height: 2em;\n    color: white;\n  }\n"])),w,C.mobileL,C.mobileL,C.mobileL,C.mobileL,C.mobileL,C.mobileL,C.mobileL,C.mobileL,de.a),It=Object(O.c)(Nt.a)(Nn||(Nn=Object(p.a)(["\n  width: 1em;\n  hight: 1em;\n"]))),Rt=Object(O.c)(g.Link)(Dn||(Dn=Object(p.a)(["\n  color: white;\n  font-size: 1rem;\n  text-transform: uppercase;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  justify-content: space-between;\n\n  @media only "," {\n    width: 100%;\n  }\n  \n  & li {\n    font-size: 1.3rem;\n    padding-bottom: 1em;\n\n    @media only "," {\n      display: inline-block;\n      padding-right: 1em;\n      font-size: 0.8em;\n    }\n  }\n"])),C.mobileL,C.mobileL),Ht=function(){var n=Object(b.useContext)(F).scroll,e=Object(T.jsxs)(Dt,{children:[Object(T.jsxs)("div",{className:"socials",children:[Object(T.jsx)("p",{children:"You can find me socially on these platforms: "}),Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:Object(T.jsx)("a",{"aria-label":"linked-in",href:"https://www.linkedin.com/in/jonathan-yan-8806b87b/",children:Object(T.jsx)(Pt.a,{})})}),Object(T.jsx)("li",{children:Object(T.jsx)("a",{"aria-label":"github",href:"https://github.com/JonathanHYYan",children:Object(T.jsx)(Jt.a,{})})}),Object(T.jsx)("li",{children:Object(T.jsx)("a",{"aria-label":"codepen",href:"https://codepen.io/jyanhoyin",children:Object(T.jsx)(Mt.a,{})})})]}),Object(T.jsxs)("ul",{children:[Object(T.jsx)(It,{}),Object(T.jsx)("h3",{children:"Jonathan Yan"})]})]}),Object(T.jsx)("div",{className:"info",children:Object(T.jsxs)("ul",{children:[Object(T.jsx)(Rt,{to:"contact-form",spy:!0,smooth:!0,duration:400,children:"Contact"}),Object(T.jsx)(Rt,{to:"about",spy:!0,smooth:!0,duration:400,children:"About me"}),Object(T.jsx)(Rt,{to:"projects",spy:!0,smooth:!0,duration:400,children:"Projects"})]})})]});return Object(T.jsx)(T.Fragment,{children:n&&e})};var Vt=function(){return Object(T.jsx)(O.a,{theme:f,children:Object(T.jsxs)(B,{children:[Object(T.jsx)($n,{}),Object(T.jsx)(Bt,{}),Object(T.jsx)(ht,{}),Object(T.jsx)(zt,{}),Object(T.jsx)(Ht,{})]})})};h.a.render(Object(T.jsx)(j.a.StrictMode,{children:Object(T.jsx)(Vt,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.1c3a9306.chunk.js.map
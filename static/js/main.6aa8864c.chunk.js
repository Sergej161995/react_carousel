(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(4),n=a.n(c),s=a(2),i=a(1),l=(a(9),a(10),a(0)),b=function(e){var t=e.images,a=e.step,c=e.frameSize,n=e.itemWidth,b=e.animationDuration,o=e.infinite,m=Object(i.useState)(0),r=Object(s.a)(m,2),j=r[0],u=r[1],h=(t.length-c)*n,d=(t.length-c)*n,p=c*n;return Object(l.jsxs)("div",{className:"Carousel",children:[Object(l.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(p,"px")},children:t.map((function(e){return Object(l.jsx)("li",{className:"Carousel__element",style:{transform:"translateX(".concat(j,"px)"),transition:"".concat(b,"ms")},children:Object(l.jsx)("img",{src:e,alt:"".concat(e),style:{width:"".concat(n,"px")}})},e)}))}),Object(l.jsxs)("div",{className:"Carousel__buttons",children:[Object(l.jsx)("button",{type:"button",className:"Carousel__btn",onClick:function(){u(Math.min(j+n*a,0)),0===j&&u(-h)},disabled:0===j,children:Object(l.jsx)("span",{className:"Carousel__vector",children:"<"})}),Object(l.jsx)("button",{type:"button",className:"Carousel__btn","data-cy":"next",onClick:function(){u(Math.max(j-n*a,-h)),j===-h&&o&&u(0)},disabled:j===-d&&!o,children:Object(l.jsx)("span",{className:"Carousel__vector",children:">"})})]})]})},o=function(){var e=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],t=Object(i.useState)(3),a=Object(s.a)(t,2),c=a[0],n=a[1],o=Object(i.useState)(3),m=Object(s.a)(o,2),r=m[0],j=m[1],u=Object(i.useState)(130),h=Object(s.a)(u,2),d=h[0],p=h[1],_=Object(i.useState)(1e3),O=Object(s.a)(_,2),g=O[0],x=O[1],N=Object(i.useState)(!1),k=Object(s.a)(N,2),v=k[0],f=k[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{"data-cy":"title",className:"App__title",children:"Carousel with ".concat(e.length," images")}),Object(l.jsxs)("div",{className:"block",children:[Object(l.jsxs)("div",{className:"block__element",children:[Object(l.jsx)("label",{htmlFor:"Width",className:"block__label",children:"Item Width:"}),Object(l.jsx)("input",{onChange:function(e){p(+e.target.value)},value:d,type:"number",id:"Width",className:"block__input"})]}),Object(l.jsxs)("div",{className:"block__element",children:[Object(l.jsx)("label",{htmlFor:"Size",className:"block__label",children:"Frame Size:"}),Object(l.jsx)("input",{onChange:function(e){j(+e.target.value)},value:r,type:"number",id:"Size",className:"block__input",min:1,max:e.length})]}),Object(l.jsxs)("div",{className:"block__element",children:[Object(l.jsx)("label",{htmlFor:"Step",className:"block__label",children:"Step:"}),Object(l.jsx)("input",{onChange:function(e){n(+e.target.value)},value:c,type:"number",id:"Step",className:"block__input",min:1,max:e.length})]}),Object(l.jsxs)("div",{className:"block__element",children:[Object(l.jsx)("label",{htmlFor:"Animation",className:"block__label",children:"Animation Duration:"}),Object(l.jsx)("input",{onChange:function(e){x(+e.target.value)},value:g,type:"number",id:"Animation",className:"block__input"})]}),Object(l.jsxs)("div",{className:"block__checkbox",children:[Object(l.jsx)("label",{htmlFor:"infinite",children:"Infinite"}),Object(l.jsx)("input",{checked:v,onChange:function(e){f(e.target.checked)},type:"checkbox",name:"Infinite",id:"1"})]})]}),Object(l.jsx)(b,{images:e,step:c,frameSize:r,itemWidth:d,animationDuration:g,infinite:v})]})};n.a.render(Object(l.jsx)(o,{}),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.6aa8864c.chunk.js.map
(this["webpackJsonptemplate-for-ev-3"]=this["webpackJsonptemplate-for-ev-3"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),i=a(1),n=a.n(i),s=a(17),r=a.n(s),o=a(14),l=a(2),d=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{name:e.name,id:e.id,img:e.image,status:e.status,species:e.species,origin:e.origin.name,episodes:e.episode.length}}))}))},j=a.p+"static/media/header_logo.de13d484.png",h=(a(24),function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsx)("img",{src:j,className:"header__logo",alt:"Rick and Morty logo",title:"Rick and Morty logo"})})}),m=(a(25),function(e){return Object(c.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(c.jsx)("input",{type:"text",name:"searchBox",id:"searchBox",className:"searchBox",placeholder:"Type a character's name",onChange:function(t){e.handleFilter(t.target.value)}})})}),b=(a(15),function(){return Object(c.jsx)("p",{className:"errorMessage",children:"Sorry, your search did not match any character in our list."})}),u=a(7),A=(a(26),function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(u.b,{to:"/char/".concat(e.id),children:Object(c.jsxs)("li",{className:"card",children:[Object(c.jsx)("img",{src:e.img,alt:e.name,className:"card__img"}),Object(c.jsxs)("main",{className:"card__info",children:[Object(c.jsx)("h3",{className:"card__info--name",children:e.name}),Object(c.jsx)("p",{children:e.species})]})]})})})}),p=(a(32),function(e){if(0===e.chars.length)return Object(c.jsx)(b,{});var t=e.chars.map((function(e){return Object(c.jsx)(A,{id:e.id,name:e.name,img:e.img,species:e.species},e.id)}));return Object(c.jsx)("ul",{className:"cardList",children:t})}),f=a.p+"static/media/unknown_icon.91181278.png",g=(a(33),function(e){return"Alive"===e.char.status?Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAYAAACfKfiZAAAACXBIWXMAAAsSAAALEgHS3X78AAACaElEQVRYhe2XT0tUYRSHn3ekUaIgWzkG0sL+UEi0KWpnu6ChL9AHsM/QqiT6CrruAxTZsnTpSGCbFEQXlWFBJDGmYC2eFvfemqb7T2cGI3zgbub+3nPOnPe97zknUBK1CtwAbgEXgeH4AdiInyXgOTAbQvhe1naR42F1Wm1anma8ptaJ4wF1Ut3eg+N2tmMbA3t1PqQ2OnDcTkMdKut8TF3vovOEdXWsyHlN/dAD561BpGfCaM8Xeug8oWHLmai0xHAPuFJqnzrjauwLgBD/+2FgFTiasWgJeB8vPlngYBNYAEaI7os0doDREMJH4gCmc1I2kaxSB9W5HO2ceqJFP5GjnUpE/epWhuhFe+jqmRyjoyn6lxnaplqtAOPAsYxUvWn/IYSwCuymaHdDCGtlbMQcB8YrRHd7Fn8dSvUS0J+i7Y/fFdpooY75e6p6X+2LnY+oiznaRXUk1vbFa/OYDeoKcDYnSohO9gZwDjhSoP0BrBBVyqIvZiWoW2SfgV6zVSnW9JYKUWoPio1/IoClAtE28Gk/xuO1eSxXiHq4PCaA88BDymVrF3hE9MXcLdDOoFbN7vd21DtqUrT61JvqY/W1+lX9or5Tnxnd/acS6+pts1u6plGjW1iMVF+pdbXoDkjsXVafFticgt/luAaskV2OEzaBJ8A88DZ+PgODwGngOlAHrhXY+bMcx0FMFkTcTSbT0jZgdzvhLBpqWjH71Y73oiNOyG5KW4I4uLa8LRPd3I55yw4mbWei09Hsm/rArD0vGUjN/Q2nU5YYTsMeAqkS9Y914ALp4/kyMAPMdW08P+SQQ/57fgIHtsywkkgl/QAAAABJRU5ErkJggg==",alt:"Happy face emoji",className:"statusIcon"}):"Dead"===e.char.status?Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAYAAACfKfiZAAAACXBIWXMAAAsSAAALEgHS3X78AAACjUlEQVRYhe2XPWgUQRiGn72EMxElRQSTgIVEFCJpAmphIdrEwmhvq6VFLKzsTLo0FimioGIhFpaKYKGWRquEkBBBsUiIjTaep+QHHoudxfXcvewld0QkDyzM3b7zft/M7O58E1EQtQycAy4Ax4G+cAGshGseeAa8iqJoraj3ZoH71DvqN4vzLfTp3U7gDnVMrTYQuJZq8OhoNHiPOr2NwLVMqz1Fgw+qS00MnrCkDm4WvFddbkHwdBLZM2G85m9bGDxh2tQzUUrlcBM4mZHbIjCX+v0cqGboquFewlzoW8upEOuP0feZ/bR/Mn4gD6iz6kO1pJ5RN1K6jfBfKWhmQp+e4FFL1fQravzOZrGqXgyaLrUU2hMZ2olwr6R2hfbF4JHFVBJ8j1rJESVJDKWSHa2jHU3phuoE1/hjVUY9X0eket8w8mDcbbwctcyq3SldSX2wifcw6mQdwaLaFgzH/b0c/ep6Sreu9qemfTy024JHHpPtxBtLHseA2+pP4Aawpl4BrgHtKV078EidBO4BZePNqzN45DEQqe+Bo3VEreR9pFaAfTuUQKW0uaa1lIgLiZ1i5Z9IYL5JZhvADHAXuAosF+izUORDlMdH9bF6XT2tdqad1ScFPIaj8L5+AfbXyXQVeAm8S64oir7WitQjxDvqCeAScLiOZwU4kHTM24wSvmQEO6iOGNd8L9SvDc7gFEAUzHqBD8DeOhlfBg6FEZ4M7a3yAzgSRdHn9IjGGhzBdhj7KyXjkqyZlXAe0+qezHkxrmBaUREn5BelqSR2riyvmYlmLscbix5Map6J7R7Nvqu3zFvzgon0urXD6ZQFDqdRA4mUgbPACDBA9vF8AXgKvG7a8XyXXXb57/kFrATABrMWQWIAAAAASUVORK5CYII=",alt:"Dead face emoji",className:"statusIcon"}):Object(c.jsx)("img",{src:f,alt:"Question mark emoji",className:"statusIcon__unknown"})}),O=(a(34),function(){return Object(c.jsx)(u.b,{to:"/",className:"detailLink","aria-label":"Go back to the list",title:"Go back to the list",children:"< Back to the list"})}),x=function(){return Object(c.jsx)("article",{className:"errorMessage",children:Object(c.jsx)("p",{children:"No result was found. Sorry!"})})},_=(a(35),function(e){return void 0===e.char?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{}),Object(c.jsx)(x,{})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O,{}),Object(c.jsxs)("article",{className:"detail",children:[Object(c.jsx)("img",{src:e.char.img,alt:e.char.name,className:"detail__img"}),Object(c.jsxs)("div",{className:"detail__info",children:[Object(c.jsx)("h3",{className:"detail__info__name",children:e.char.name}),Object(c.jsxs)("p",{className:"detail__info__attribute",children:[Object(c.jsx)("span",{className:"detail__info__title",children:"Status: "})," ",e.char.status," ",g(e)]}),Object(c.jsxs)("p",{className:"detail__info__attribute",children:[Object(c.jsx)("span",{className:"detail__info__title",children:"Species: "})," ",e.char.species]}),Object(c.jsxs)("p",{className:"detail__info__attribute",children:[Object(c.jsx)("span",{className:"detail__info__title",children:"Origin: "})," ",e.char.origin]}),Object(c.jsxs)("p",{className:"detail__info__attribute",children:[Object(c.jsx)("span",{className:"detail__info__title",children:"No. of pisodes: "})," ",e.char.episodes]})]})]})]})}),k=(a(36),a.p+"static/media/logochicas.708815cb.png"),N=function(){return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsxs)("small",{children:["Data from"," ",Object(c.jsx)("a",{href:"https://rickandmortyapi.com",target:"_blank",rel:"noreferrer",className:"footer__link",title:"Go to Rick and Morty API","aria-label":"Go to Rick and Morty API",children:"rickandmortyapi.com"})]}),Object(c.jsxs)("small",{children:["App developed in 2020 by"," ",Object(c.jsx)("a",{href:"https://github.com/Celiamf",target:"_blank",rel:"noreferrer",className:"footer__link--github",title:"Go to Celia's Github profile","aria-label":"Go to Celia's Github profile",children:"Celia"})]}),Object(c.jsx)("a",{href:"https://beta.adalab.es/project-promo-k-modulo-1-team-3/",target:"_blank",rel:"noreferrer",title:"Go to Las Chicas del Coding website","aria-label":"Go to Las Chicas del Coding website",children:Object(c.jsx)("img",{src:k,alt:"Las Chicas del Coding",title:"Las Chicas del Coding"})})]})};a(37);var F=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(i.useState)(""),r=Object(o.a)(s,2),j=r[0],b=r[1];a.sort((function(e,t){var a=e.name.toUpperCase(),c=t.name.toUpperCase();return a<c?-1:a>c?1:0})),Object(i.useEffect)((function(){d().then((function(e){n(e)}))}),[]);var u=a.filter((function(e){return e.name.toUpperCase().includes(j.toUpperCase())}));return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(h,{}),Object(c.jsx)("main",{children:Object(c.jsxs)(l.c,{children:[Object(c.jsxs)(l.a,{exact:!0,path:"/",children:[Object(c.jsx)(m,{handleFilter:function(e){b(e)}}),Object(c.jsx)(p,{chars:u})]}),Object(c.jsx)(l.a,{exact:!0,path:"/char/:id",render:function(e){var t=parseInt(e.match.params.id),i=a.find((function(e){return e.id===t}));return Object(c.jsx)(_,{char:i})}})]})}),Object(c.jsx)(N,{})]})};a(38);r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(u.a,{children:Object(c.jsx)(F,{})})}),document.getElementById("root"))}],[[39,1,2]]]);
//# sourceMappingURL=main.145344de.chunk.js.map
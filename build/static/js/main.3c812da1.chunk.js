(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{13:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),r=a.n(c),o=(a(13),a(6)),i=a(3),m=a(7),s=a(2),u=a(1);var E=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),E=Object(i.a)(r,2),d=E[0],p=E[1];Object(n.useEffect)((function(){fetch("http://192.34.109.55/BlaseExtra/Api/QRGETCATEGORIES",{method:"POST",mode:"no-cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({rest:"sadat"})}).then((function(e){return e.json()})).then((function(e){console.log(e.CategoryList),c(e.CategoryList)}))}),[]);var b=function(e){fetch("http://192.34.109.55/BlaseExtra/Api/QRGELLALL",{method:"POST",mode:"no-cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({mode:"R",rest:"sadat",category:e,code:"0",nameEN:"",nameAR:"",description:"",price:0})}).then((function(e){return e.json()})).then((function(e){console.log(e.ProductsManagement),p(e.ProductsManagement)}))};return l.a.createElement("div",{className:"flex-container"},l.a.createElement(s.BrowserView,null,l.a.createElement("main",null,l.a.createElement("section",{className:"menu section"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,"Sadat Resto menu list ",l.a.createElement(u.a,{style:{fontSize:"20px"}})),l.a.createElement("h4",{className:"Subtitle"},"Choose a Category "),l.a.createElement("div",{className:"underline"})),l.a.createElement("div",{className:"child"},null===a||void 0===a?void 0:a.map((function(e,t){return l.a.createElement("button",{type:"button",className:"filter-btn",key:t,onClick:function(){return b(e.name)}},e.name)})))))),l.a.createElement(s.MobileView,null,l.a.createElement("main",null,l.a.createElement("section",{className:"menu section"},l.a.createElement("div",{className:"title"},l.a.createElement("br",null),l.a.createElement("p",{style:{fontWeight:"bold",fontSize:"2rem",color:"black",marginTop:"-10vh"}},"Sadat menu list ",l.a.createElement(u.a,{style:{fontSize:"20px"}})),l.a.createElement("h4",{className:"MobileSubtitle"}," Choose a Category"),l.a.createElement("div",{className:"Mobileunderline"})),l.a.createElement("div",{className:"Gridbox"},null===a||void 0===a?void 0:a.map((function(e,t){return l.a.createElement("button",{type:"button",className:"mobilebutton",key:t,onClick:function(){return b(e.name)}},e.name)})))))),l.a.createElement(s.BrowserView,null,l.a.createElement("div",{className:"section-center"},null===d||void 0===d?void 0:d.map((function(e,t){return l.a.createElement("article",{className:"menu-item"},l.a.createElement("img",{className:"photo",src:"https://i.redd.it/vne3691qg8h91.png"}),l.a.createElement("div",{className:"item-info"},l.a.createElement("header",null,l.a.createElement("h4",null," ",e.nameEN),l.a.createElement("h4",null," ",e.nameAR)),l.a.createElement("p",{className:"item-text"},l.a.createElement("p",{style:{color:"black"}},e.description),l.a.createElement("text",{className:"priceCurrency"}," ","Price: ",e.price," ",e.cur)),l.a.createElement("button",{className:"button-52"},l.a.createElement("a",{href:"https://wa.me/96101339569?text=Hello, I would like to order "+[e.nameEN],style:{color:"black",textDecoration:"none",fontWeight:"bold",fontSize:"0.85em"}},"Order ",e.nameEN," ",l.a.createElement(u.b,null)))))})))),l.a.createElement(s.MobileView,null,l.a.createElement("div",{className:"Mobilesection-center"},null===d||void 0===d?void 0:d.map((function(e,t){return l.a.createElement("article",{className:"menu-item"},l.a.createElement("img",{className:"photo",src:"https://i.redd.it/vne3691qg8h91.png"}),l.a.createElement("div",{className:"Mobitem-info"},l.a.createElement("header",null,l.a.createElement("h4",null," ",e.nameEN),l.a.createElement("h4",null," ",e.nameAR)),l.a.createElement("p",{className:"item-text"},l.a.createElement("p",{style:{color:"black"}},e.description),l.a.createElement("text",{className:"priceCurrency"}," ","Price: ",e.price," ",e.cur)),l.a.createElement("button",{title:"Order via Whatsapp",className:"button-52"},l.a.createElement("a",{href:"https://wa.me/96103339569?text=Hello, I would like to order "+[e.nameEN],style:Object(o.a)({color:"black",textDecoration:"none",fontWeight:"bold",fontSize:"1.1em"},"fontWeight","bold")},e.nameEN," ",l.a.createElement(u.b,null)))))})))),l.a.createElement(m.VerticleButton,{EasingType:"easeOutCubic",AnimationDuration:200}))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(21)}},[[8,1,2]]]);
//# sourceMappingURL=main.3c812da1.chunk.js.map
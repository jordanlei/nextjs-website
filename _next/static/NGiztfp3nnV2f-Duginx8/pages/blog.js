(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3P0e":function(i,e,t){"use strict";var a=t("0iUn"),I=t("sLSF"),c=t("MI3g"),l=t("a7VT"),n=t("Tit0"),g=t("q1tI"),o=t.n(g),d=(t("xTJh"),t("GkDY"),t("eAqH"),o.a.createElement),s=function(i){function e(i){var t;return Object(a.a)(this,e),(t=Object(c.a)(this,Object(l.a)(e).call(this,i))).items=t.props.items,t}return Object(n.a)(e,i),Object(I.a)(e,[{key:"componentDidMount",value:function(){var i=this.items.name;console.log(document.getElementById(i).offsetTop),window.addEventListener("scroll",(function(e){var t,a,I,c,l,n,g=(l=this.pageYOffset)-document.getElementById(i).offsetTop;for(t=0,c=(I=document.querySelectorAll("[data-type='parallax-"+i+"']")).length;t<c;t++)n="translate3d(0,"+-1*(l+g*(a=I[t]).getAttribute("data-depth"))+"px, 0)",a.style["-webkit-transform"]=n,a.style["-moz-transform"]=n,a.style["-ms-transform"]=n,a.style["-o-transform"]=n,a.style.transform=n}))}},{key:"render",value:function(){var i=this.items.name,e=this.items.background,t=this.items.backgrounddepth,a=this.items.layers.map((function(e){return d("div",{className:"layer "+e.name,"data-depth":e.depth,"data-type":"parallax-"+i,style:{backgroundImage:"url("+e.image+")"}})}));return d("div",null,d("div",{id:this.items.name,style:{minHeight:"100vh"}},d("div",{className:"layer layer-bg","data-depth":t,"data-type":"parallax-"+i,style:{backgroundImage:e}}),a,this.props.children))}}]),e}(g.Component);e.a=s},"3Ssi":function(i,e){i.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEzNjYgNzY4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzY2IDc2ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTt9DQoJLnN0MXtkaXNwbGF5Om5vbmU7fQ0KCS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0M3tmaWxsOnVybCgjZG90X3BhdHRlcm4pO30NCgkuc3Q0e2Rpc3BsYXk6aW5saW5lO29wYWNpdHk6MC41O2ZpbGw6IzAwMzQ4RDt9DQoJLnN0NXtvcGFjaXR5OjAuMzE7ZmlsbDojMDAzNDhEO30NCjwvc3R5bGU+DQo8cGF0dGVybiAgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iZG90X3BhdHRlcm4iIHZpZXdCb3g9IjAgLTgwIDgwIDgwIiBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiPg0KCTxnPg0KCQk8cmVjdCB5PSItODAiIGNsYXNzPSJzdDAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIvPg0KCQk8cGF0aCBkPSJNMC04MFYwaDgwdi04MEgweiBNNDAuMTItMzFjLTQuOSwwLTguODgtMy45Ny04Ljg4LTguODhjMC00LjksMy45Ny04Ljg4LDguODgtOC44OFM0OS00NC43OCw0OS0zOS44OA0KCQkJQzQ5LTM0Ljk3LDQ1LjAzLTMxLDQwLjEyLTMxeiIvPg0KCTwvZz4NCjwvcGF0dGVybj4NCjxnIGlkPSJMYXllcl8xIiBjbGFzcz0ic3QxIj4NCgk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjY4MyIgeTE9IjAiIHgyPSI2ODMiIHkyPSI3NjgiPg0KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDAzNDhEIi8+DQoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDAwMDAiLz4NCgk8L2xpbmVhckdyYWRpZW50Pg0KCTxyZWN0IGNsYXNzPSJzdDIiIHdpZHRoPSIxMzY2IiBoZWlnaHQ9Ijc2OCIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzQiIGNsYXNzPSJzdDEiPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiIGNsYXNzPSJzdDEiPg0KCTxyZWN0IHk9Ii0xMCIgY2xhc3M9InN0MyIgd2lkdGg9IjEzNjYiIGhlaWdodD0iNzMwIi8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMyIgY2xhc3M9InN0MSI+DQoJPGNpcmNsZSBjbGFzcz0ic3Q0IiBjeD0iNjgzIiBjeT0iMzYyIiByPSIxNjIiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl81IiBjbGFzcz0ic3QxIj4NCgk8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSI2ODMiIGN5PSIzNjIiIHI9IjE2MiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzYiPg0KCTxjaXJjbGUgY2xhc3M9InN0NSIgY3g9IjY4MyIgY3k9IjI3NyIgcj0iMTA3Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="},"53hk":function(i,e){i.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEzNjYgNzY4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzY2IDc2ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTt9DQoJLnN0MXtkaXNwbGF5Om5vbmU7fQ0KCS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0M3tmaWxsOnVybCgjTmV3X1BhdHRlcm5fMik7fQ0KCS5zdDR7ZGlzcGxheTppbmxpbmU7b3BhY2l0eTowLjU7ZmlsbDojMDAzNDhEO30NCjwvc3R5bGU+DQo8cGF0dGVybiAgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iTmV3X1BhdHRlcm5fMiIgdmlld0JveD0iMCAtODAgODAgODAiIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyI+DQoJPGc+DQoJCTxyZWN0IHk9Ii04MCIgY2xhc3M9InN0MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIi8+DQoJCTxwYXRoIGQ9Ik0wLTgwVjBoODB2LTgwSDB6IE00MC4xMi0zMWMtNC45LDAtOC44OC0zLjk3LTguODgtOC44OGMwLTQuOSwzLjk3LTguODgsOC44OC04Ljg4UzQ5LTQ0Ljc4LDQ5LTM5Ljg4DQoJCQlDNDktMzQuOTcsNDUuMDMtMzEsNDAuMTItMzF6Ii8+DQoJPC9nPg0KPC9wYXR0ZXJuPg0KPGcgaWQ9IkxheWVyXzEiIGNsYXNzPSJzdDEiPg0KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNjgzIiB5MT0iMCIgeDI9IjY4MyIgeTI9Ijc2OCI+DQoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDM0OEQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPg0KCTwvbGluZWFyR3JhZGllbnQ+DQoJPHJlY3QgY2xhc3M9InN0MiIgd2lkdGg9IjEzNjYiIGhlaWdodD0iNzY4Ii8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfNCIgY2xhc3M9InN0MSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPHJlY3QgY2xhc3M9InN0MyIgd2lkdGg9IjEzNjYiIGhlaWdodD0iNzY4Ii8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMyIgY2xhc3M9InN0MSI+DQoJPGNpcmNsZSBjbGFzcz0ic3Q0IiBjeD0iNjgzIiBjeT0iMzYyIiByPSIxNjIiLz4NCgk8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSI2ODMiIGN5PSIzNjIiIHI9IjE2MiIvPg0KCTxjaXJjbGUgY2xhc3M9InN0NCIgY3g9IjY4MyIgY3k9IjM2MiIgcj0iMTYyIi8+DQo8L2c+DQo8L3N2Zz4NCg=="},BR8T:function(i,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t("YbiN")}])},C5Vf:function(i,e){i.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCAxMDAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7b3BhY2l0eTowLjc7ZmlsbDojQzEyNzJEO30NCgkuc3Qxe2Rpc3BsYXk6bm9uZTt9DQoJLnN0MntkaXNwbGF5OmlubGluZTtvcGFjaXR5OjAuMzI7ZmlsbDojMUYxQzkxO30NCgkuc3Qze2Rpc3BsYXk6aW5saW5lO29wYWNpdHk6MC43ODtmaWxsOiMxRjFDOTE7fQ0KPC9zdHlsZT4NCjxnIGlkPSJMYXllcl8xIj4NCgk8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9Ijk5OSIgaGVpZ2h0PSIxMDAwIi8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMyI+DQoJPGc+DQoJCTxyZWN0IHg9IjI0OS43NiIgeT0iMjM5LjQzIiBjbGFzcz0ic3QwIiB3aWR0aD0iMTg3LjkyIiBoZWlnaHQ9IjUyMiIvPg0KCQk8cmVjdCB4PSI1NjEuMzYiIHk9IjM4Ny4yIiBjbGFzcz0ic3QwIiB3aWR0aD0iMTg3LjkyIiBoZWlnaHQ9IjM3NC4yNCIvPg0KCTwvZz4NCgk8Zz4NCgkJPHJlY3QgeD0iMjQ5LjI4IiB5PSIzNzEuMTMiIGNsYXNzPSJzdDAiIHdpZHRoPSIxODcuOTIiIGhlaWdodD0iMzkxLjA0Ii8+DQoJCTxyZWN0IHg9IjU2MC44OCIgeT0iNDk5LjYzIiBjbGFzcz0ic3QwIiB3aWR0aD0iMTg3LjkyIiBoZWlnaHQ9IjI2MS44MSIvPg0KCTwvZz4NCjwvZz4NCjxnIGlkPSJMYXllcl8yIiBjbGFzcz0ic3QxIj4NCgk8Zz4NCgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTI0OS43MiwxNjcuMDN2NjY3LjUzaDUwMFYxNjcuMDNIMjQ5LjcyeiBNNjc1LjY5LDc3Ny45N0gzMjMuMzVWMjIzLjNoMzUyLjM1Vjc3Ny45N3oiLz4NCgkJPHJlY3QgeD0iMzgzLjQ5IiB5PSIyOTEuNzEiIGNsYXNzPSJzdDMiIHdpZHRoPSIyMzIuNDciIGhlaWdodD0iNDE2Ljg4Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo="},YbiN:function(i,e,t){"use strict";t.r(e);var a=t("q1tI"),I=t.n(a),c=t("0iUn"),l=t("sLSF"),n=t("MI3g"),g=t("a7VT"),o=t("Tit0"),d=t("ok1R"),s=t("rhny"),N=t("s/m+"),j=t.n(N),M=t("3P0e"),u=I.a.createElement,m=function(i){function e(){return Object(c.a)(this,e),Object(n.a)(this,Object(g.a)(e).apply(this,arguments))}return Object(o.a)(e,i),Object(l.a)(e,[{key:"render",value:function(){var i={name:"blog-welcome",background:"linear-gradient(rgba(0, 52, 141, 1), rgba(0, 0, 0, 1), rgba(171, 66, 0, 1))",backgrounddepth:"-0.3",layers:[{image:t("53hk"),depth:"-0.90",name:"layer1"},{image:t("3Ssi"),depth:"-1.2",name:"layer2"},{image:t("3Ssi"),depth:"-1.0",name:"layer3"},{image:t("3Ssi"),depth:"-0.8",name:"layer4"}]};return u("div",null,u("section",{id:"blog-welcome"},u(M.a,{items:i},u("div",{className:"namecard"},u(d.a,null,u(s.a,{md:8,className:"welcome-title"},u(j.a,{bottom:!0,duration:5e3},u("h1",null,"BLOG"))))))))}}]),e}(a.Component),r=t("9a8N"),D=t("F66N"),z=t("oqc9"),h=I.a.createElement,b=function(i){function e(){return Object(c.a)(this,e),Object(n.a)(this,Object(g.a)(e).apply(this,arguments))}return Object(o.a)(e,i),Object(l.a)(e,[{key:"render",value:function(){return h("div",{className:"sidenav"},h(r.a,{vertical:!0},h(D.a,null,h(z.Link,{class:"navlink",activeClass:"active",to:"blog-welcome",href:"",spy:!0,smooth:!0,duration:800}," Top")),h(D.a,null,h(z.Link,{class:"navlink",activeClass:"active",to:"blog-featured",href:"",spy:!0,smooth:!0,duration:800}," Featured")),h(D.a,null,h(z.Link,{class:"navlink",activeClass:"active",to:"blog-posts",href:"",spy:!0,smooth:!0,duration:800}," Posts")),h("a",{href:"/"},"Home")))}}]),e}(a.Component),y=I.a.createElement,C=function(i){function e(){return Object(c.a)(this,e),Object(n.a)(this,Object(g.a)(e).apply(this,arguments))}return Object(o.a)(e,i),Object(l.a)(e,[{key:"render",value:function(){return y("section",{id:"blog-featured"},y("div",{style:{paddingBottom:"2%",paddingLeft:"20%",paddingRight:"10%",backgroundColor:"none",height:"100vh"}},y("div",{style:{color:"rgba(255, 255, 255, 0.9)"}},y(d.a,null,y(s.a,{md:3,style:{paddingTop:"25vh"}},y("div",{className:"blog-featured-description"},y(j.a,{bottom:!0,duration:5e3},y("a",{href:"#hello"},y("h4",{style:{letterSpacing:"3px"}},"Featured Blog:"),y("h3",null,"On Brotherhood"),y("h4",null,y("i",null,"What Over a Decade of Brotherhood has Taught Me")))))),y(s.a,{md:4}),y(s.a,{md:5,style:{paddingTop:"20vh",textAlign:"center"}},y("div",{className:"blog-featured-thumbnail"},y("a",{href:"#hello"},y("div",{style:{textAlign:"center",width:"100%",position:"absolute",paddingTop:"10px"}},y("h4",null,"VIEW POST")),y("img",{src:t("C5Vf"),style:{width:"100%",top:"0"}}))))))))}}]),e}(a.Component),Z=I.a.createElement,w=function(i){function e(i){var t;return Object(c.a)(this,e),(t=Object(n.a)(this,Object(g.a)(e).call(this,i))).state={posts:t.props.posts},t}return Object(o.a)(e,i),Object(l.a)(e,[{key:"render",value:function(){var i=this.state.posts.map((function(i){return Z(s.a,{md:4,style:{paddingLeft:"5%",paddingRight:"5%"}},Z("a",{href:i.link},Z("img",{src:i.image,style:{width:"100%"}}),Z("h4",null,i.title),Z("h5",null,i.subtitle),Z("p",null,Z("i",null,"Written by ",i.author," on ",i.date))))}));return Z("section",{id:"blogpostlist"},Z("div",{className:"dark-container",style:{position:"relative"}},Z(d.a,null,i)))}}]),e}(a.Component),G=(t("eAqH"),I.a.createElement),p=function(i){function e(){return Object(c.a)(this,e),Object(n.a)(this,Object(g.a)(e).apply(this,arguments))}return Object(o.a)(e,i),Object(l.a)(e,[{key:"render",value:function(){var i=[{title:"On Brotherhood",subtitle:"What Over a Decade of Brotherhood has Taught Me",author:"Jordan Lei",date:"12.22.19",image:t("C5Vf"),tags:["Thoughts"],link:"#home"},{title:"On Brotherhood",subtitle:"What Over a Decade of Brotherhood has Taught Me",author:"Jordan Lei",date:"12.22.19",image:t("y4ht"),tags:["Thoughts"],link:"#home"},{title:"On Brotherhood",subtitle:"What Over a Decade of Brotherhood has Taught Me",author:"Jordan Lei",date:"12.22.19",image:t("y4ht"),tags:["Thoughts"],link:"#home"}];return G("div",{className:"landing-container"},G(b,null),G(m,null),G(C,null),G(w,{posts:i}))}}]),e}(a.Component);t("q4sD");t.d(e,"default",(function(){return L}));var v=I.a.createElement;function L(){return v("div",null,v(p,null))}},y4ht:function(i,e){i.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe29wYWNpdHk6MC4zMjtmaWxsOiMxRjFDOTE7fQ0KCS5zdDF7b3BhY2l0eTowLjc4O2ZpbGw6IzFGMUM5MTt9DQo8L3N0eWxlPg0KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI5OTkiIGhlaWdodD0iMTAwMCIvPg0KPGc+DQoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI0OS43MiwxNjcuMDN2NjY3LjUzaDUwMFYxNjcuMDNIMjQ5LjcyeiBNNjc1LjY5LDc3Ny45N0gzMjMuMzVWMjIzLjNoMzUyLjM1Vjc3Ny45N3oiLz4NCgk8cmVjdCB4PSIzODMuNDkiIHk9IjI5MS43MSIgY2xhc3M9InN0MSIgd2lkdGg9IjIzMi40NyIgaGVpZ2h0PSI0MTYuODgiLz4NCjwvZz4NCjwvc3ZnPg0K"}},[["BR8T",0,1,8]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3P0e":function(i,e,t){"use strict";var a=t("0iUn"),n=t("sLSF"),c=t("MI3g"),I=t("a7VT"),l=t("Tit0"),o=t("q1tI"),g=t.n(o),d=(t("xTJh"),t("GkDY"),t("eAqH"),g.a.createElement),s=function(i){function e(i){var t;return Object(a.a)(this,e),(t=Object(c.a)(this,Object(I.a)(e).call(this,i))).items=t.props.items,t}return Object(l.a)(e,i),Object(n.a)(e,[{key:"componentDidMount",value:function(){var i=this.items.name;console.log(document.getElementById(i).offsetTop),window.addEventListener("scroll",(function(e){var t,a,n,c,I,l,o=(I=this.pageYOffset)-document.getElementById(i).offsetTop;for(t=0,c=(n=document.querySelectorAll("[data-type='parallax-"+i+"']")).length;t<c;t++)l="translate3d(0,"+-1*(I+o*(a=n[t]).getAttribute("data-depth"))+"px, 0)",a.style["-webkit-transform"]=l,a.style["-moz-transform"]=l,a.style["-ms-transform"]=l,a.style["-o-transform"]=l,a.style.transform=l}))}},{key:"render",value:function(){var i=this.items.name,e=this.items.background,t=this.items.backgrounddepth,a=this.items.layers.map((function(e){return d("div",{className:"layer "+e.name,"data-depth":e.depth,"data-type":"parallax-"+i,style:{backgroundImage:"url("+e.image+")"}})}));return d("div",null,d("div",{id:this.items.name,style:{minHeight:"100vh"}},d("div",{className:"layer layer-bg","data-depth":t,"data-type":"parallax-"+i,style:{backgroundImage:e}}),a,this.props.children))}}]),e}(o.Component);e.a=s},"3Ssi":function(i,e){i.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEzNjYgNzY4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzY2IDc2ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTt9DQoJLnN0MXtkaXNwbGF5Om5vbmU7fQ0KCS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0M3tmaWxsOnVybCgjZG90X3BhdHRlcm4pO30NCgkuc3Q0e2Rpc3BsYXk6aW5saW5lO29wYWNpdHk6MC41O2ZpbGw6IzAwMzQ4RDt9DQoJLnN0NXtvcGFjaXR5OjAuMzE7ZmlsbDojMDAzNDhEO30NCjwvc3R5bGU+DQo8cGF0dGVybiAgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iZG90X3BhdHRlcm4iIHZpZXdCb3g9IjAgLTgwIDgwIDgwIiBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiPg0KCTxnPg0KCQk8cmVjdCB5PSItODAiIGNsYXNzPSJzdDAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIvPg0KCQk8cGF0aCBkPSJNMC04MFYwaDgwdi04MEgweiBNNDAuMTItMzFjLTQuOSwwLTguODgtMy45Ny04Ljg4LTguODhjMC00LjksMy45Ny04Ljg4LDguODgtOC44OFM0OS00NC43OCw0OS0zOS44OA0KCQkJQzQ5LTM0Ljk3LDQ1LjAzLTMxLDQwLjEyLTMxeiIvPg0KCTwvZz4NCjwvcGF0dGVybj4NCjxnIGlkPSJMYXllcl8xIiBjbGFzcz0ic3QxIj4NCgk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjY4MyIgeTE9IjAiIHgyPSI2ODMiIHkyPSI3NjgiPg0KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDAzNDhEIi8+DQoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDAwMDAiLz4NCgk8L2xpbmVhckdyYWRpZW50Pg0KCTxyZWN0IGNsYXNzPSJzdDIiIHdpZHRoPSIxMzY2IiBoZWlnaHQ9Ijc2OCIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzQiIGNsYXNzPSJzdDEiPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiIGNsYXNzPSJzdDEiPg0KCTxyZWN0IHk9Ii0xMCIgY2xhc3M9InN0MyIgd2lkdGg9IjEzNjYiIGhlaWdodD0iNzMwIi8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMyIgY2xhc3M9InN0MSI+DQoJPGNpcmNsZSBjbGFzcz0ic3Q0IiBjeD0iNjgzIiBjeT0iMzYyIiByPSIxNjIiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl81IiBjbGFzcz0ic3QxIj4NCgk8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSI2ODMiIGN5PSIzNjIiIHI9IjE2MiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzYiPg0KCTxjaXJjbGUgY2xhc3M9InN0NSIgY3g9IjY4MyIgY3k9IjI3NyIgcj0iMTA3Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="},"53hk":function(i,e){i.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEzNjYgNzY4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzY2IDc2ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTt9DQoJLnN0MXtkaXNwbGF5Om5vbmU7fQ0KCS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0M3tmaWxsOnVybCgjTmV3X1BhdHRlcm5fMik7fQ0KCS5zdDR7ZGlzcGxheTppbmxpbmU7b3BhY2l0eTowLjU7ZmlsbDojMDAzNDhEO30NCjwvc3R5bGU+DQo8cGF0dGVybiAgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iTmV3X1BhdHRlcm5fMiIgdmlld0JveD0iMCAtODAgODAgODAiIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyI+DQoJPGc+DQoJCTxyZWN0IHk9Ii04MCIgY2xhc3M9InN0MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIi8+DQoJCTxwYXRoIGQ9Ik0wLTgwVjBoODB2LTgwSDB6IE00MC4xMi0zMWMtNC45LDAtOC44OC0zLjk3LTguODgtOC44OGMwLTQuOSwzLjk3LTguODgsOC44OC04Ljg4UzQ5LTQ0Ljc4LDQ5LTM5Ljg4DQoJCQlDNDktMzQuOTcsNDUuMDMtMzEsNDAuMTItMzF6Ii8+DQoJPC9nPg0KPC9wYXR0ZXJuPg0KPGcgaWQ9IkxheWVyXzEiIGNsYXNzPSJzdDEiPg0KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNjgzIiB5MT0iMCIgeDI9IjY4MyIgeTI9Ijc2OCI+DQoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDM0OEQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPg0KCTwvbGluZWFyR3JhZGllbnQ+DQoJPHJlY3QgY2xhc3M9InN0MiIgd2lkdGg9IjEzNjYiIGhlaWdodD0iNzY4Ii8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfNCIgY2xhc3M9InN0MSI+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiI+DQoJPHJlY3QgY2xhc3M9InN0MyIgd2lkdGg9IjEzNjYiIGhlaWdodD0iNzY4Ii8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMyIgY2xhc3M9InN0MSI+DQoJPGNpcmNsZSBjbGFzcz0ic3Q0IiBjeD0iNjgzIiBjeT0iMzYyIiByPSIxNjIiLz4NCgk8Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSI2ODMiIGN5PSIzNjIiIHI9IjE2MiIvPg0KCTxjaXJjbGUgY2xhc3M9InN0NCIgY3g9IjY4MyIgY3k9IjM2MiIgcj0iMTYyIi8+DQo8L2c+DQo8L3N2Zz4NCg=="},BR8T:function(i,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t("YbiN")}])},YbiN:function(i,e,t){"use strict";t.r(e);var a=t("q1tI"),n=t.n(a),c=t("0iUn"),I=t("sLSF"),l=t("MI3g"),o=t("a7VT"),g=t("Tit0"),d=t("ok1R"),s=t("rhny"),m=t("s/m+"),u=t.n(m),r=t("3P0e"),N=n.a.createElement,j=function(i){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(g.a)(e,i),Object(I.a)(e,[{key:"render",value:function(){var i={name:"blog-welcome",background:"linear-gradient(rgba(0, 52, 141, 1), rgba(0, 0, 0, 1), rgba(171, 66, 0))",backgrounddepth:"-0.3",layers:[{image:t("53hk"),depth:"-0.90",name:"layer1"},{image:t("3Ssi"),depth:"-1.2",name:"layer2"},{image:t("3Ssi"),depth:"-1.0",name:"layer3"},{image:t("3Ssi"),depth:"-0.8",name:"layer4"}]};return N("div",null,N("section",{id:"blog-welcome"},N(r.a,{items:i},N("div",{className:"namecard"},N(d.a,null,N(s.a,{md:8,className:"welcome-title"},N(u.a,{bottom:!0,duration:5e3},N("h1",null,"BLOG"))))))))}}]),e}(a.Component),b=t("9a8N"),D=t("F66N"),z=t("oqc9"),y=n.a.createElement,M=function(i){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(g.a)(e,i),Object(I.a)(e,[{key:"render",value:function(){return y("div",{className:"sidenav"},y(b.a,{vertical:!0},y(D.a,null,y(z.Link,{class:"navlink",activeClass:"active",to:"blog-welcome",href:"",spy:!0,smooth:!0,duration:800}," Top")),y(D.a,null,y(z.Link,{class:"navlink",activeClass:"active",to:"blog-featured",href:"",spy:!0,smooth:!0,duration:800}," Featured")),y(D.a,null,y(z.Link,{class:"navlink",activeClass:"active",to:"blog-posts",href:"",spy:!0,smooth:!0,duration:800}," Posts")),y("a",{href:"/"},"Home")))}}]),e}(a.Component),h=n.a.createElement,p=function(i){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(g.a)(e,i),Object(I.a)(e,[{key:"render",value:function(){return h("section",{id:"blog-featured"},h("div",{style:{paddingBottom:"2%",paddingLeft:"20%",paddingRight:"10%",backgroundColor:"none",height:"100vh"}},h("div",{style:{height:"30vh"}}),h("div",{style:{color:"rgba(255, 255, 255, 0.9)"}},h(d.a,null,h(s.a,{md:3},h(u.a,{bottom:!0,duration:5e3},h("h3",null,"Featured Blog"))),h(s.a,{md:4}),h(s.a,{md:5},h("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis sem at lectus convallis fermentum. Nam eget fringilla magna. Nunc rhoncus mauris est, sed aliquet tortor pretium ut. Duis aliquet justo lorem. Nunc commodo molestie semper. Suspendisse condimentum finibus urna a aliquam."))))))}}]),e}(a.Component),C=(t("eAqH"),n.a.createElement),Z=function(i){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(g.a)(e,i),Object(I.a)(e,[{key:"render",value:function(){t("53hk"),t("3Ssi"),t("3Ssi"),t("3Ssi");return C("div",{className:"landing-container"},C(M,null),C(j,null),C(p,null))}}]),e}(a.Component);t("q4sD");t.d(e,"default",(function(){return v}));var G=n.a.createElement;function v(){return G("div",null,G(Z,null))}}},[["BR8T",0,1,8]]]);
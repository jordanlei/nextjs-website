(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3P0e":function(e,i,t){"use strict";var a=t("0iUn"),n=t("sLSF"),c=t("MI3g"),l=t("a7VT"),o=t("Tit0"),I=t("q1tI"),s=t.n(I),d=(t("xTJh"),t("GkDY"),t("eAqH"),s.a.createElement),r=function(e){function i(e){var t;return Object(a.a)(this,i),(t=Object(c.a)(this,Object(l.a)(i).call(this,e))).items=t.props.items,t}return Object(o.a)(i,e),Object(n.a)(i,[{key:"componentDidMount",value:function(){var e=this.items.name;console.log(document.getElementById(e).offsetTop),window.addEventListener("scroll",(function(i){var t,a,n,c,l,o,I=(l=this.pageYOffset)-document.getElementById(e).offsetTop;for(t=0,c=(n=document.querySelectorAll("[data-type='parallax-"+e+"']")).length;t<c;t++)o="translate3d(0,"+-1*(l+I*(a=n[t]).getAttribute("data-depth"))+"px, 0)",a.style["-webkit-transform"]=o,a.style["-moz-transform"]=o,a.style["-ms-transform"]=o,a.style["-o-transform"]=o,a.style.transform=o}))}},{key:"render",value:function(){var e=this.items.name,i=this.items.background,t=this.items.backgrounddepth,a=this.items.layers.map((function(i){return d("div",{className:"layer "+i.name,"data-depth":i.depth,"data-type":"parallax-"+e,style:{backgroundImage:"url("+i.image+")"}})}));return d("div",null,d("div",{id:this.items.name,style:{minHeight:"100vh"}},d("div",{className:"layer layer-bg","data-depth":t,"data-type":"parallax-"+e,style:{backgroundImage:i}}),a,this.props.children))}}]),i}(I.Component);i.a=r},AfU7:function(e,i){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTM2NiAyNDE2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6bm9uZTt9LmNscy0ye2ZpbGw6dXJsKCNzcGFyc2VfZG90cyk7fTwvc3R5bGU+PHBhdHRlcm4gaWQ9InNwYXJzZV9kb3RzIiBkYXRhLW5hbWU9InNwYXJzZV9kb3RzIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iODAiIGhlaWdodD0iODAiLz48cGF0aCBkPSJNMCwwVjgwSDgwVjBaTTQwLjUsNDVBNC41LDQuNSwwLDEsMSw0NSw0MC41LDQuNDksNC40OSwwLDAsMSw0MC41LDQ1WiIvPjwvcGF0dGVybj48L2RlZnM+PHRpdGxlPnNwYXJzZV9kb3RzQXNzZXQgMTwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cmVjdCBjbGFzcz0iY2xzLTIiIHdpZHRoPSIxMzY2IiBoZWlnaHQ9IjI0MTYiLz48L2c+PC9nPjwvc3ZnPg=="},HxXx:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogpost",function(){return t("oedW")}])},YPJC:function(e,i){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEzNjYgNzY4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzY2IDc2ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTt9DQoJLnN0MXtkaXNwbGF5Om5vbmU7fQ0KCS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0M3tkaXNwbGF5OmlubGluZTtmaWxsOnVybCgjU1ZHSURfMl8pO30NCgkuc3Q0e29wYWNpdHk6MC4zMjtmaWxsOiMxRjFDOTE7fQ0KCS5zdDV7ZGlzcGxheTppbmxpbmU7b3BhY2l0eTowLjc5O2ZpbGw6IzFGMUM5MTt9DQo8L3N0eWxlPg0KPHBhdHRlcm4gIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9InNwYXJzZV94NUZfZG90cyIgdmlld0JveD0iMCAtODAgODAgODAiIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyI+DQoJPGc+DQoJCTxyZWN0IHk9Ii04MCIgY2xhc3M9InN0MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIi8+DQoJCTxwYXRoIGQ9Ik0wLTgwVjBoODB2LTgwSDB6IE00MC41LTM1Yy0yLjQ5LDAtNC41LTIuMDEtNC41LTQuNXMyLjAxLTQuNSw0LjUtNC41czQuNSwyLjAxLDQuNSw0LjVTNDIuOTktMzUsNDAuNS0zNXoiLz4NCgk8L2c+DQo8L3BhdHRlcm4+DQo8ZyBpZD0iTGF5ZXJfMSIgY2xhc3M9InN0MSI+DQoJDQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNjgzIiB5MT0iOS4wOTQ5NDdlLTEzIiB4Mj0iNjgzIiB5Mj0iNzY4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAtMSAxMzY2IDc2OCkiPg0KCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDAzNDhEIi8+DQoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDAwMDAiLz4NCgk8L2xpbmVhckdyYWRpZW50Pg0KCTxwb2x5Z29uIGNsYXNzPSJzdDIiIHBvaW50cz0iMCwwIDEzNjYsMCAxMzY2LDc2OCAwLDc2OCAJIi8+DQoJPHBhdHRlcm4gIGlkPSJTVkdJRF8yXyIgeGxpbms6aHJlZj0iI3NwYXJzZV94NUZfZG90cyIgcGF0dGVyblRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMCAtNjQpIj4NCgk8L3BhdHRlcm4+DQoJPHJlY3QgY2xhc3M9InN0MyIgd2lkdGg9IjEzNjYiIGhlaWdodD0iMjQxNiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KCTxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik00OTEsNzl2NTE0aDM4NVY3OUg0OTF6IE04MTksNTQ5LjQySDU0Ny42OXYtNDI3LjFIODE5VjU0OS40MnoiLz4NCjwvZz4NCjxnIGlkPSJMYXllcl8zIiBjbGFzcz0ic3QxIj4NCgk8cmVjdCB4PSI1OTQiIHk9IjE3NSIgY2xhc3M9InN0NSIgd2lkdGg9IjE3OSIgaGVpZ2h0PSIzMjEiLz4NCjwvZz4NCjwvc3ZnPg0K"},oedW:function(e,i,t){"use strict";t.r(i);var a=t("ln6h"),n=t.n(a),c=t("q1tI"),l=t.n(c),o=t("0iUn"),I=t("sLSF"),s=t("MI3g"),d=t("a7VT"),r=t("Tit0"),g=t("ok1R"),h=t("rhny"),m=t("s/m+"),N=t.n(m),b=t("3P0e"),u=l.a.createElement,w=function(e){function i(){return Object(o.a)(this,i),Object(s.a)(this,Object(d.a)(i).apply(this,arguments))}return Object(r.a)(i,e),Object(I.a)(i,[{key:"render",value:function(){var e={name:"blogpost",background:"linear-gradient(rgba(0, 13, 36, 1), rgba(0, 58, 156, 1))",backgrounddepth:"-0.3",layers:[{image:t("AfU7"),depth:"-0.90",name:"layer1"},{image:t("YPJC"),depth:"0",name:"layer2"},{image:t("yH0b"),depth:"-0.2",name:"layer3"},{image:t("yH0b"),depth:"0.2",name:"layer4"}]},i=u("p",null,"The scientist named the population, after their distinctive horn, Ovid\u2019s Unicorn. These four-horned, silver-white unicorns were previously unknown to science. Now, after almost two centuries, the mystery of what sparked this odd phenomenon is finally solved. Dr. Jorge P\xe9rez, an evolutionary biologist from the University of La Paz, and several companions, were exploring the Andes Mountains when they found a small valley, with no other animals or humans. P\xe9rez noticed that the valley had what appeared to be a natural fountain, surrounded by two peaks of rock and silver snow. P\xe9rez and the others then ventured further into the valley. \u201cBy the time we reached the top of one peak, the water looked blue, with some crystals on top,\u201d said P\xe9rez. P\xe9rez and his friends were astonished to see the unicorn herd. These creatures could be seen from the air without having to move too much to see them \u2013 they were so close they could touch their horns. While examining these bizarre creatures the scientists discovered that the creatures also spoke some fairly regular English. P\xe9rez stated, \u201cWe can see, for example, that they have a common \u2018language,\u2019 something like a dialect or dialectic.\u201d Dr. P\xe9rez believes that the unicorns may have originated in Argentina, where the animals were believed to be descendants of a lost race of people who lived there before the arrival of humans in those parts of South America. While their origins are still unclear, some believe that perhaps the creatures were created when a human and a unicorn met each other in a time before human civilization. According to P\xe9rez, \u201cIn South America, such incidents seem to be quite common.\u201d However, P\xe9rez also pointed out that it is likely that the only way of knowing for sure if unicorns are indeed the descendants of a lost alien race is through DNA. \u201cBut they seem to be able to communicate in English quite well, which I believe is a sign of evolution, or at least a change in social organization,\u201d said the scientist.");return u("div",null,u(b.a,{items:e},u("div",{className:"blog-namecard"},u(g.a,null,u(h.a,{md:5,className:"blog-title"},u(N.a,{bottom:!0,duration:5e3},u("h1",null,"How to Engage with Art"),u("h2",null,"A Guide Made for and by an Amateur"),u("h3",null,u("i",null,"Posted by Jordan Lei 12.12.19"))))))),u("div",{className:"standard-container",style:{padding:"30%",fontStyle:"lighter"}},u("div",{className:"blog-post",style:{backgroundColor:"rgba(0, 0, 0, 0.8)"}},u("h3",null,"Header of Paragraph"),i,i,i,i,i,i,i,i,i,i,i)))}}]),i}(c.Component),z=l.a.createElement,M=function(e){return z(w,null)};M.getInitialProps=function(e){var i;return n.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.query,t.abrupt("return",{content:i});case 2:case"end":return t.stop()}}))};i.default=M},yH0b:function(e,i){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEzNjYgNzY4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzY2IDc2ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTt9DQoJLnN0MXtkaXNwbGF5Om5vbmU7fQ0KCS5zdDJ7ZGlzcGxheTppbmxpbmU7ZmlsbDp1cmwoI1NWR0lEXzFfKTt9DQoJLnN0M3tkaXNwbGF5OmlubGluZTtmaWxsOnVybCgjU1ZHSURfMl8pO30NCgkuc3Q0e29wYWNpdHk6MC4zMjtmaWxsOiMxRjFDOTE7fQ0KCS5zdDV7b3BhY2l0eTowLjY7ZmlsbDojMUYxQzkxO30NCjwvc3R5bGU+DQo8cGF0dGVybiAgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0ic3BhcnNlX3g1Rl9kb3RzIiB2aWV3Qm94PSIwIC04MCA4MCA4MCIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ij4NCgk8Zz4NCgkJPHJlY3QgeT0iLTgwIiBjbGFzcz0ic3QwIiB3aWR0aD0iODAiIGhlaWdodD0iODAiLz4NCgkJPHBhdGggZD0iTTAtODBWMGg4MHYtODBIMHogTTQwLjUtMzVjLTIuNDksMC00LjUtMi4wMS00LjUtNC41czIuMDEtNC41LDQuNS00LjVzNC41LDIuMDEsNC41LDQuNVM0Mi45OS0zNSw0MC41LTM1eiIvPg0KCTwvZz4NCjwvcGF0dGVybj4NCjxnIGlkPSJMYXllcl8xIiBjbGFzcz0ic3QxIj4NCgkNCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2ODMiIHkxPSI5LjA5NDk0N2UtMTMiIHgyPSI2ODMiIHkyPSI3NjgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIC0xIDEzNjYgNzY4KSI+DQoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDM0OEQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPg0KCTwvbGluZWFyR3JhZGllbnQ+DQoJPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIwLDAgMTM2NiwwIDEzNjYsNzY4IDAsNzY4IAkiLz4NCgk8cGF0dGVybiAgaWQ9IlNWR0lEXzJfIiB4bGluazpocmVmPSIjc3BhcnNlX3g1Rl9kb3RzIiBwYXR0ZXJuVHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIC02NCkiPg0KCTwvcGF0dGVybj4NCgk8cmVjdCBjbGFzcz0ic3QzIiB3aWR0aD0iMTM2NiIgaGVpZ2h0PSIyNDE2Ii8+DQo8L2c+DQo8ZyBpZD0iTGF5ZXJfMiIgY2xhc3M9InN0MSI+DQoJPHBhdGggY2xhc3M9InN0NCIgZD0iTTQ5MSw3OXY1MTRoMzg1Vjc5SDQ5MXogTTgxOSw1NDkuNDJINTQ3LjY5di00MjcuMUg4MTlWNTQ5LjQyeiIvPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzMiPg0KCTxyZWN0IHg9IjU5NCIgeT0iMTc1IiBjbGFzcz0ic3Q1IiB3aWR0aD0iMTc5IiBoZWlnaHQ9IjMyMSIvPg0KPC9nPg0KPC9zdmc+DQo="}},[["HxXx",0,1,8]]]);